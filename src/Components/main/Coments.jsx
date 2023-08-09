import { useEffect } from "react";
import { useComents } from "../../hooks/api";
import "./coments.css";

export const Coments = () => {
  const [info, refresh] = useComents();

  useEffect(() => {
    const t = setInterval(refresh, 50000);
    return () => clearInterval(t);
  }, [refresh]);

  // console.log(info);
  // console.log(import.meta.env.VITE_URLIMAGESBACK);

  return (
    <ul className="coments_ul">
      {info?.data.map((coment) => (
        <li key={coment.idcoments}>
          <p>{coment.text}</p>
          <img
            src={`${import.meta.env.VITE_URLIMAGESBACK}${coment.image}`}
            alt="papa"
          />
        </li>
      ))}
    </ul>
  );
};
