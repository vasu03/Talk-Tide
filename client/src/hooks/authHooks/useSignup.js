// Importing required modules
import { useState } from "react";
import toast from "react-hot-toast";

// Creating a hook to perform Signup operation
const useSignup = async () => {
    // Some state to handle Signup
    const [ loading, setLoading ] = useState(false);

    // a function to handle signup
    const signUp = async (userName, email, password, confirmPassword) => {
        
        // perform Sigup
        setLoading(true);
        try {
            
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    // return some states -> loading & signUp()
    return { loading, signUp };

};

// Exporting the hook
export default useSignup;