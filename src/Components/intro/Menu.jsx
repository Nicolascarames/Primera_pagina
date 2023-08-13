import { useState } from "react";
import { ChangeUsername } from "./ChangeUsername";
import { Logout } from "./Logout";
import { Button } from "@mui/material";

export const Menu = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="menu">
      {menu ? (
        <nav className="menu__abierto">
          <Button
            onClick={() => setMenu(!menu)}
            variant="contained"
            size="small"
            color="ochre"
          >
            Cerrar
          </Button>
          <ChangeUsername />
          <Logout />
        </nav>
      ) : (
        <Button
          onClick={() => setMenu(!menu)}
          variant="contained"
          size="small"
          color="ochre"
        >
          Menu
        </Button>
      )}
    </nav>
  );
};
