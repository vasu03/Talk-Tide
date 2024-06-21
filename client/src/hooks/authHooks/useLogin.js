// Importing required modules
import { useState } from "react";
import toast from "react-hot-toast";

// Creating a hook to perform LogIn operation
const useLogin = async () => {
    // Some state to handle Login
    const [ loading, setLoading ] = useState(false);

    // a function to handle login
    const logIn = async (userName, password) => {
        
        // perform Login
        setLoading(true);
        try {
            
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    // return some states -> loading & logIn()
    return { loading, logIn };

};

// Exporting the hook
export default useLogin;