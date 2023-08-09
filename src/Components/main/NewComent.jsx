import { useState } from "react";
import { useUser } from "../../UserContext";

export const NewComent = () => {
  const [text, setText] = useState();
  const [file, setFile] = useState();
  const [user] = useUser();

  const handleSubmitUser = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("text", text);
      formdata.append("image", file);

      await ModifyUser(formdata, user.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmitUser}
        className="signin_form flex-column-evenly"
      >
        <div className="form-item flex-center-left">
          <textarea
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Text..."
          />
        </div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};
