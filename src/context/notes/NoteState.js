import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    // create state in NoteState call via useContext api
    const s1 = {
        "name":"Saurabh Shukla",
        "class":"5B",
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Rishabh Shukla",
                "class": "10C"
            })
        },1000)
    }
    return(
        // to pass the value using create new useContext hooks pass the value and access is another one
        <NoteContext.Provider value={{state:state,update:update}}>   
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


