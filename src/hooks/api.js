import { useUser } from "../UserContext";
import { useFetchPost, useFetchRefresh } from "./useFetchActions";

// const login ="https://api-1-navidad.onrender.com/login"
// const coments ="https://api-1-navidad.onrender.com/coments"
// const newuser ="https://api-1-navidad.onrender.com/newuser"
// const loginurl = "https://api1.naviwarrior.es/login";
// const coments = "https://api1.naviwarrior.es/coments";
// const newuser = "https://api1.naviwarrior.es/newuser";
const loginurl = `${import.meta.env.VITE_URLBACK}/login`;
const coments = `${import.meta.env.VITE_URLBACK}/coments`;
const newuser = `${import.meta.env.VITE_URLBACK}/newuser`;

export const useComents = () => useFetchRefresh(coments);

export const useUserActions = () => {
    const [, setUser] = useUser();
    const post = useFetchPost();

    const login = (username, password) =>
        post(loginurl, {
            username,
            password,
        }).then((data) => setUser(data));

    const signup = (username, password) =>
        post(newuser, {
            username,
            password,
        });

    return { login, signup };
};
