import { ErrorResponse, useGet, usePost } from "@sourceempire/brawl-fetch";
import { createContext, useContext, useEffect, useState } from "react";

const serverUrl = import.meta.env.VITE_SERVER_URL;

export const endpoints = {
  EVENTS: `${serverUrl}/api/events`,
  LOGIN: `${serverUrl}/api/public/auth/login`,
  LOGIN_VALIDATE: `${serverUrl}/api/public/auth/login/validate`,
  LOGGED_IN_USER: `${serverUrl}/api/user`,
  LOGOUT: `${serverUrl}/api/auth/logout`,
} as const;

export enum ErrorCode {
  LoginValidateFail = "LOGIN_VALIDATE_FAIL",
}

export type PublicUser = {
  id: string;
  userTag: string;
  imageUrl?: string;
};

export type User = PublicUser & {
  name: string;
  username: string;
};

type Context = {
  isLoadingValidation: boolean;
  isLoadingLogin: boolean;
  isLoggedIn: boolean;
  loginError?: string;
  loadingUser: boolean;
  email: string;
  userId: string;
  login: ({ username, password }: { username: string; password: string }) => void;
  loginValidate: () => void;
  clearLoginError: () => void;
  logout: () => void;
};

const AuthContext = createContext<Context>({
  isLoadingValidation: true,
  isLoadingLogin: false,
  isLoggedIn: false,
  loadingUser: false,
  email: "",
  userId: "",
  login: ({ username, password }) => ({ username, password }),
  loginValidate: () => undefined,
  clearLoginError: () => undefined,
  logout: () => undefined,
});

type Props = {
  children: React.ReactElement;
};

const { LOGIN_VALIDATE, LOGGED_IN_USER, LOGIN, LOGOUT } = endpoints;

export function AuthContextProvider({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [getLoggedInUser, { state: userState }] = useGet<{ user: User }>(LOGGED_IN_USER);

  function onLoginComplete() {
    setIsLoggedIn(true);
    getLoggedInUser();
  }

  function login(body: { username: string; password: string }) {
    loginRequest({ body, params: { role: "admin" } });
  }

  const [loginValidate, { state: loginValidateState }] = useGet<ErrorResponse>(LOGIN_VALIDATE, {
    onComplete(error) {
      if (error.errorCode !== ErrorCode.LoginValidateFail) {
        onLoginComplete();
      }
    },
  });

  const [
    loginRequest,
    {
      state: loginState,
      actions: { resetState: clearLoginError },
    },
  ] = usePost(LOGIN, {
    onComplete() {
      onLoginComplete();
    },
  });

  const [logoutRequest] = usePost(LOGOUT, {
    onComplete() {
      setIsLoggedIn(false);
    },
  });

  useEffect(() => {
    loginValidate();
  }, [loginValidate]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,

        isLoadingValidation: loginValidateState.status === "loading",
        isLoadingLogin: loginState.status === "loading",
        loadingUser: userState.status === "loading",

        loginError: loginState.status === "error" ? loginState.error.message : undefined,

        ...(userState.status === "success"
          ? {
              email: userState.data.user.username,
              userId: userState.data.user.id,
            }
          : {
              email: "",
              userId: "",
            }),

        login,
        loginValidate,
        clearLoginError,
        logout: logoutRequest,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
