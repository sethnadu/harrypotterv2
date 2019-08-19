import React, {useEffect} from "react";

const SortingHat = (props) => {
    
    useEffect(() => {
        return props.getSortingHat();
    }, [props.getSortingHat])

    return (
        <>
      
        </>
    )
}
export default SortingHat;