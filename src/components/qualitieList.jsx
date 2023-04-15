import React from "react";
import Quality from "./quality";

const QualitieList=({qualities})=>{
    return qualities.map((qualitie) => (
            <Quality key={qualitie._id} {...qualitie}/>
             ))
}
export default QualitieList