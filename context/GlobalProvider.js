import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";

// 1) Create the Context
const GlobalContext = createContext();

// 2) It will
export const useGlobalContext = () => useContext(GlobalContext)

const GlobalProvider = ({ children }) => {
    const [productDetails, setProductDetails] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCurrentUser()
            .then((res) => {
                if (res) {
                    setIsLoggedIn(true)
                    setUser(res)
                } else {
                    setIsLoggedIn(false)
                    setUser(null)
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <GlobalContext.Provider
            value={{
                productDetails, setProductDetails, isLoggedIn, setIsLoggedIn, user, setUser, isLoading, setIsLoading
            }}
        >

            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider