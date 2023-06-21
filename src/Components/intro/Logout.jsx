import { useUser } from "../../UserContext";

export const Logout = () => {
  const [, setUser] = useUser();
  const handleClick = () => {
    setUser("");
    localStorage.removeItem("user");
  };
  return <button onClick={handleClick}>Logout</button>;
};
