import { createContext } from "react";

export const initailState = {
    user: {},
    token: "",
    isLoggen: false,
    setAuthDetails: () => {}
};

const AuthContext = createContext(initailState);

export default AuthContext;