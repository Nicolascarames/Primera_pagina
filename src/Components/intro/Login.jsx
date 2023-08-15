import { useState } from "react";
import { useUserActions } from "../../hooks/api";
import { useUser } from "../../UserContext";
import { Button } from "@mui/material";

export const Login = () => {
  const { login } = useUserActions();
  const [username, setUsername] = useState();

  const [password, setPassword] = useState();
  const [user] = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{user && user.error ? "" : "Logueate:"}</p>
      <label>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </label>
      <label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </label>

      <Button type="submit" variant="contained" size="small" color="ochre">
        Login
      </Button>
    </form>
  );
};
