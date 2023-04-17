import React, { useState } from "react";
import { paginate } from "../utils/pagination";
import "bootstrap/dist/css/bootstrap.css";
import Pagination from "./pagination";
import User from "./user";
import PropTypes from "prop-types";

const Users = ({ users, ...rest }) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <>
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="name">Имя</th>
                            <th scope="quality">Качества</th>
                            <th scope="profession">Профессия</th>
                            <th scope="completedMeetings">Встретился,раз</th>
                            <th scope="rate">Оценка</th>
                            <th scope="rate">Избранное</th>
                            <th scope="delete"></th>
                        </tr>
                    </thead>
                    <tbody className="users-list">
                        {userCrop.map((user) => (
                            <User key={user._id} {...user} {...rest} />
                        ))}
                    </tbody>
                </table>
            )}

            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};
Users.propTypes = {
    users: PropTypes.array.isRequired
};
export default Users;
