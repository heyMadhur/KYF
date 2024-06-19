import { createContext, useContext, useState, useEffect } from "react";

// 1) Create the Context
const GlobalContext = createContext();

// 2) It will
export const useGlobalContext = () => useContext(GlobalContext)

const GlobalProvider = ({ children }) => {
    const [productDetails, setProductDetails] = useState(null)
    return (
        <GlobalContext.Provider
            value={{
                productDetails, setProductDetails
            }}
        >

            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider