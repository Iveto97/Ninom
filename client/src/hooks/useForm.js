import { useState } from "react";


export default function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value
    }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallback(values);
        setValues(initialValues);
    }

    return{
        values,
        submitHandler,
        changeHandler
    }
};