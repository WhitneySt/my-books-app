import { useState } from "react";

const useForm = (initalValue = {}) => {

    const [dataForm, setDataForm] = useState(initalValue);

    const handleChangeInputs = (event) => {
        const { name, value } = event.target;
        setDataForm({
            ...dataForm,
            [name]: value
        });
    }

    const reset = () => {
        setDataForm({});
    }

    return {dataForm, handleChangeInputs, reset}
}

export default useForm