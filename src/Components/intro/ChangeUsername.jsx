import { useState } from "react";
import { useUser } from "../../UserContext";

export const ChangeUsername = () => {
  const [username, setUsername] = useState();
  const [user, setUser] = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/user/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: user.token,
      },
    });

    setUsername("");

    const newusername = { ...user };
    newusername.username = username;
    setUser(newusername);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="username">
        <input
          required
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Change your username"
        />

        <button>Change Username</button>
      </form>
    </>
  );
};
