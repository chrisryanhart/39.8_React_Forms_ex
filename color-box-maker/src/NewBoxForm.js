import React, {useState} from 'react';

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {width: "", height: "", backgroundColor: ""}

    const [boxFormData, setBoxFormData] = useState(INITIAL_STATE);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setBoxFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { width, height, backgroundColor } = boxFormData;
        // setItem
        addBox(width, height, backgroundColor);
        setBoxFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='width'>Width: </label>
                <input id='width' name='width' value={boxFormData.width} onChange={handleChange}/>

                <label htmlFor='height'>Height: </label>
                <input 
                    id='height' 
                    name='height'
                    value={boxFormData.height}
                    onChange={handleChange}
                />

                <label htmlFor='backgroundColor'>BG Color: </label>
                <input 
                    id='backgroundColor' 
                    name='backgroundColor' 
                    value={boxFormData.backgroundColor}
                    onChange={handleChange}
                />
            </div>
            <button>Add Box</button>
        </form>
    );
}

export default NewBoxForm;