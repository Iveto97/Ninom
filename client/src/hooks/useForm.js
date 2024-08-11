import { useEffect, useState } from "react";


export default function useForm(initialValues, submitCallback, options = { reinitializeForm: false}) {
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        if(options.reinitializeForm) {
            setValues(initialValues);
        }
    }, [initialValues, options.reinitializeForm]);

    const changeHandler = (e) => {
        setValues(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value
    }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

       await submitCallback(values);
        setValues(initialValues);
    }

    return{
        values,
        submitHandler,
        changeHandler,
    }
};