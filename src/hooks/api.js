import { useUser } from "../UserContext";
import { useFetchPost, useFetchRefresh } from "./useFetchActions";

// const login ="https://api-1-navidad.onrender.com/login"
// const coments ="https://api-1-navidad.onrender.com/coments"
// const newuser ="https://api-1-navidad.onrender.com/newuser"
const loginurl = "http://localhost:3000/login";
const coments = "http://localhost:3000/coments";
const newuser = "http://localhost:3000/newuser";

export const useComents = () => useFetchRefresh(coments);

export const useUserActions = () => {
  const [, setUser] = useUser();
  const post = useFetchPost();

  const login = (email, password) =>
    post(loginurl, {
      email,
      password,
    }).then((data) => setUser(data));

  const signup = (email, password) =>
    post(newuser, {
      email,
      password,
    }).then((data) => setUser(data));

  return { login, signup };
};
