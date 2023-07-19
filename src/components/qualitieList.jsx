import React from "react";
import Quality from "./quality";
import PropTypes from "prop-types";

const QualitieList = ({ qualities }) => {
    return qualities.map((qualitie) => (
        <Quality key={qualitie._id} {...qualitie} />
    ));
};
QualitieList.propTypes = {
    qualities: PropTypes.array
};
export default QualitieList;
