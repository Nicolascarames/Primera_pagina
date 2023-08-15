import { useState } from "react";
import { useUserActions } from "../../hooks/api.js";
import { Button } from "@mui/material";

export const Signup = () => {
  const { signup } = useUserActions();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, password);
    alert('Usuario creado con exito, ahora inicia sesion!')
    window.location.reload()
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Registrate:</p>
      <label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
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
        Enviar registro
      </Button>
    </form>
  );
};
