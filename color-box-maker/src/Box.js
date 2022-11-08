import React from 'react';
import './Box.css';

const Box = ({id, remove, width="100px", height='100px', backgroundColor='greenyellow'}) => {
    // have to remove the box upon click

    const handleClick = () => remove(id);
    
    return (
        <>
           <div className='Box' key={id} style={{width, height, backgroundColor}}/>
           <button onClick={handleClick}>X</button>
        </>
    );
}

export default Box;