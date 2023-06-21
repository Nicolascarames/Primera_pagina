import { useState } from "react";
import { ChangeUsername } from "./ChangeUsername";
import { Logout } from "./Logout";

export const Menu = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="menu">
      {menu ? (
        <nav className="menu__abierto">
          <button onClick={() => setMenu(!menu)}>cerrar</button>
          <ChangeUsername />
          <Logout />
        </nav>
      ) : (
        <button onClick={() => setMenu(!menu)}>Menu</button>
      )}
    </nav>
  );
};
