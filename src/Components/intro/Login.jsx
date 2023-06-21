import { useState } from "react";
import { useUserActions } from "../../hooks/api";
import { useUser } from "../../UserContext";

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

      <button>Login</button>
    </form>
  );
};
