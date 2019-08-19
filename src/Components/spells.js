import React, {useEffect} from "react";

const Spells = (props) => {
    
    useEffect(() => {
        return props.getSpells();
    }, [props.getSpells])

    return (
        <>
      
        </>
    )
}
export default Spells;