import { useState } from "react";
import { useUserActions } from "../../hooks/api";
import { useUser } from "../../UserContext";
import { Button } from "@mui/material";

export const Login = () => {
  const { login } = useUserActions();
  const [email, setEmail] = useState();

  const [password, setPassword] = useState();
  const [user] = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{user && user.error ? "" : "Logueate:"}</p>
      <label>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        Login
      </Button>
    </form>
  );
};
