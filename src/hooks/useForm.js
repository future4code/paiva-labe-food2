import {useState} from 'react';

function useForm(initialValue) {
    const [form, setForm] = useState(initialValue)

    const onChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const clear = () => {
        setForm('')
    }
    return [form, onChange, clear, setForm]
}

export default useForm;