import { createContext } from "react";

export const initailState = {
    user: {lang: "uz"},
    token: "",
    setLang: () => {} ,
    setAuthDetails: () => {}
};

const GlobalContext = createContext(initailState);

export default GlobalContext;