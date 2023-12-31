import useSWR from "swr";
import axiosClient from "../utils/axios";
import { useEffect } from "react";
import { Await, useNavigate } from "react-router-dom";

export const useAuth = ({ middleware, url }) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  const navigate = useNavigate();

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/user", () =>
    axiosClient("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.data)
      .catch((error) => {
        throw Error(error?.response.data.errors);
      })
  );

  const login = async (datos, setErrores) => {
    try {
      const respuesta = await axiosClient.post("/api/login", datos);
      localStorage.setItem("AUTH_TOKEN", respuesta.data.token);
      setErrores([]);
      await mutate();
    } catch (error) {
      setErrores(Object.values(error.response.data.errors));
    }
  };

  const register = async (datos, setErrores) => {
    try {
      const respuesta = await axiosClient.post("/api/register", datos);
      localStorage.setItem("AUTH_TOKEN", respuesta.data.token);
      setErrores([]);
      await mutate();
    } catch (error) {
      setErrores(Object.values(error.response.data.errors));
    }
  };

  const logout = async () => {
    try {
      await axiosClient.post("api/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("AUTH_TOKEN");
      await mutate(undefined);
    } catch (error) {
      throw Error(error?.response.data.errors);
    }
  };

  useEffect(() => {
    if (middleware === "guest" && url && user) navigate(url);
    if (middleware === "auth" && error) navigate("/auth/login");
  }, [user, error]);

  return { login, register, logout, user, error };
};
