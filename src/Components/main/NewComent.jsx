import { useState } from "react";
import { useUser } from "../../UserContext";
import "./coments.css";

export const NewComent = () => {
  const [text, setText] = useState();
  const [file, setFile] = useState();
  const [user] = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("text", text);
      formdata.append("image", file);

      // await ModifyUser(formdata, user.token);

      const res = await fetch("http://localhost:3000/post", {
        method: "POST",
        headers: {
          Authorization: `${user.token}`,
          // "Content-Type": "multipart/form-data",
        },
        body: formdata,
      });

      if (res.ok) {
        alert("subida correcta");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <textarea
          name="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Text..."
        />

        {/* <div className="upload-container">
          <label htmlFor="file-input">
            <div className="upload-button"> Choose your file </div>
          </label>
        </div> */}

        <input
          id="file-input"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};
