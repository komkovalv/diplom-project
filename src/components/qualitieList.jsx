import React from "react";
import Quality from "./ui/qualities/quality";
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
