import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from "uuid";

const BoxList = () => {

    const INITIAL_STATE = [
            {id: uuid(), width: "100px", height: "100px", backgroundColor: "blue"},
            {id: uuid(), width: "100px", height: "100px", backgroundColor: "yellow"}
        ]
        
    const [boxes,setBoxes] = useState(INITIAL_STATE);

    const addBox = (width,height,backgroundColor) => {
        setBoxes(data => (
             [...data,
              {id: uuid(), width,height,backgroundColor}
            ]))
    }

    const removeBox = (id) => {
        setBoxes(data => (
            data.filter(ele => ele.id !== id)
        ));
    }

    return (
        <>
            {boxes.map(box => (
                <Box 
                    key={box.id}
                    id={box.id}
                    width={box.width} 
                    height={box.height} 
                    backgroundColor={box.backgroundColor}
                    remove={removeBox}
                />))}
           <NewBoxForm addBox={addBox}/>
        </>
    );
}

// addBox={addBox} value={boxFormData}

export default BoxList;