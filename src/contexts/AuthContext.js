import { createContext } from "react";

const AuthContext = createContext({
    user: {},
    token: "",
    isLoggen: false,
    setAuthDetails: () => {}
})

export default AuthContext;