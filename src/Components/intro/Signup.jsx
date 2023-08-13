import { useState } from "react";
import { useUserActions } from "../../hooks/api.js";
import { Button } from "@mui/material";

export const Signup = () => {
  const { signup } = useUserActions();
  const [email, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Registrate:</p>
      <label>
        <input
          value={email}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          placeholder="Email"
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
        Enviar registro
      </Button>
    </form>
  );
};
