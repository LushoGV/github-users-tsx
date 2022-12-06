import { createContext, useContext, useEffect, useState } from "react";
import { iUser, context, ProviderProps } from "../interfaces";

const userContext = createContext<context>({} as context);

const UserProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState<string>("light");
  const [loader, setLoader] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [userData, setUserData] = useState<iUser>();

  const getUser = async (username: string | undefined): Promise<void> => {
    setIsError(false);
    if (username) {
      setLoader(true);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setTimeout(() => {
          setLoader(false);
        }, 1000);
        if (response.status === 200) {
          setUserData(data);
        } else {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      }
    }
  };

  useEffect(() => {
    if (localStorage.themeSelected) {
      setTheme(localStorage.themeSelected);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    getUser("octocat");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("themeSelected", theme === "dark" ? "light" : "dark");
  };

  return (
    <userContext.Provider
      value={{ loader, isError, userData, theme, handleThemeSwitch, getUser }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => {
  const { loader, isError, userData, theme, handleThemeSwitch, getUser } =
    useContext(userContext);
  return { loader, isError, userData, theme, handleThemeSwitch, getUser };
};
