import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, onToggleBookmark, id }) => {
    return (
        <button
            className="btn btn-outline-primary"
            onClick={() => onToggleBookmark(id)}
        >
            <i
                className={
                    "bi bi-emoji" + (status ? "-heart-eyes-fill" : "-neutral")
                }
            ></i>
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool,
    id: PropTypes.string.isRequired,
    onToggleBookmark: PropTypes.func.isRequired
};
export default BookMark;
