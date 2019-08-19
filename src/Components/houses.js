import React, {useEffect} from "react";

const Houses = (props) => {
    
    useEffect(() => {
        return props.getHouses();
    }, [props.getHouses])

    return (
        <>
      
        </>
    )
}
export default Houses;