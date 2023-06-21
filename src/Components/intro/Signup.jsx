import { useState } from "react";
import { useUserActions } from "../../hooks/api.js";

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
          placeholder="email"
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
      <button>Enviar registro</button>
    </form>
  );
};
