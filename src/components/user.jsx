import React from "react";
import QualitieList from "./qualitieList";
import BookMark from "./bookmark";
import PropTypes from "prop-types";
const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    bookmark,
    onDelete,
    onToggleBookmark
}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{<QualitieList qualities={qualities} />}</td>
            <td> {profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}/5</td>
            <td>
                {
                    <BookMark
                        id={_id}
                        status={bookmark}
                        onToggleBookmark={onToggleBookmark}
                    />
                }
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(_id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};
User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
    onToggleBookmark: PropTypes.func.isRequired
};
export default User;
