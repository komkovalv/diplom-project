import React from "react";
import PropTypes from "prop-types";
const Quality = ({ color, name }) => {
    return (
        <span className={"m-2 p-2 fs-7 badge text-bg-" + color}> {name}</span>
    );
};
Quality.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
export default Quality;
