import { useEffect, useState } from "react";
import { useUser } from "../UserContext";

export const useFetchPost = () => {
  const [user] = useUser();

  const post = async (url, body) => {
    const res = await fetch(url, {
      method: "POST",
      headers: user
        ? {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          }
        : {
            "Content-Type": "application/json",
          },
      body: JSON.stringify(body),
    });
    return await res.json();
  };
  return post;
};

export const useFetch = (url) => {
  const [user] = useUser();
  const [info, setInfo] = useState();

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(url, {
        headers: user
          ? {
              Authorization: `Bearer ${user.token}`,
            }
          : {},
      });
      const data = await res.json();
      setInfo(data);
    };
    loadData();
  }, [url, user]);

  return info;
};

async function loadData(url, user, setInfo) {
  const res = await fetch(url, {
    headers: user
      ? {
          Authorization: `Bearer ${user.token}`,
        }
      : {},
  });
  const data = await res.json();
  setInfo(data);
}

export const useFetchRefresh = (url) => {
  const [user] = useUser();
  const [info, setInfo] = useState();

  useEffect(() => {
    loadData(url, user, setInfo);
  }, [url, user]);

  const refresh = () => loadData(url, user, setInfo);

  return [info, refresh];
};
