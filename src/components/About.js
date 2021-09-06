import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
    const a = useContext(noteContext);
    useEffect(() => {
         a.update();
    }, [])
    return (
        <div>
            This is About {a.state.name} and his age is {a.state.age} 
        </div>
    )
}

export default About