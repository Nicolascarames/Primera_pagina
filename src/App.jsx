import { useUser } from "./UserContext";
import "./App.css";

import "./Components/intro/intro.css";
import "./main.css";
import { LoginOrSignup } from "./Components/intro/LoginOrSignup";
import { Coments } from "./Components/main/Coments";
import { Menu } from "./Components/intro/Menu";
import { useEffect } from "react";

function App() {
  const [user] = useUser();

  // console.log(user);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  if (!user) {
    return (
      <header className="intro">
        <LoginOrSignup />
      </header>
    );
  }

  if (user.status === "error") {
    return (
      <header className="intro">
        <p>Wrong username or password. Try again.</p>
        <p>{user.message}</p>
        <LoginOrSignup />
      </header>
    );
  }

  const username = user.username ? user.username : "";

  return (
    <>
      <main className="main">
        <header>
          {!user.token ? (
            <LoginOrSignup />
          ) : (
            <p className="name">Bienvenido {username}</p>
          )}
          <Menu />
        </header>
        <section>
          <Coments />
        </section>
      </main>
    </>
  );
}
export default App;
