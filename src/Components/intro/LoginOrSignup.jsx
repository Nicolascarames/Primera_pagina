import { useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";

export const LoginOrSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <nav>
      {isLogin ? <Login /> : <Signup />}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Registrate" : "Iniciar sesion"}
      </button>
    </nav>
  );
};
