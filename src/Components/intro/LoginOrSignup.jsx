import { useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Button } from "@mui/material";

export const LoginOrSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <nav>
      {isLogin ? <Login /> : <Signup />}

      <Button
        onClick={() => setIsLogin(!isLogin)}
        variant="contained"
        size="small"
        color="yellow"
      >
        {isLogin ? "Registrate" : "Iniciar sesion"}
      </Button>
    </nav>
  );
};
