import { useEffect } from "react";
import { useComents } from "../../hooks/api";
import "./Coments.css";
import { NewComent } from "./NewComent";

export const Coments = () => {
  const [info, refresh] = useComents();

  useEffect(() => {
    const t = setInterval(refresh, 10000);
    return () => clearInterval(t);
  }, [refresh]);

  // console.log(info);
  // console.log(import.meta.env.VITE_URLIMAGESBACK);

  return (
    <>
      {" "}
      <NewComent refresh={refresh} />
      <ul className="coments_ul">
        {info?.data
          .sort((a, b) => b.id - a.id)
          .map((coment) => (
            <li key={coment.id}>
              {coment.image && (
                <img
                  src={`${import.meta.env.VITE_URLIMAGESBACK}${coment.image}`}
                  alt="imagen no encontrada"
                />
              )}
              <p>{coment.text}</p>
              <p className="info_comentario">{`${
                coment.username
              }  => ${new Date(coment.create_at).toLocaleString()}`}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
