import React, { useState, useEffect } from "react";
import Users from "./users";
import API from "../api";

const App = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handlDelete = (userId) => {
        setUsers((prevState) =>
            prevState.filter((user) => user._id !== userId)
        );
    };
    const handleToggleBookmark = (id) => {
        setUsers((prev) =>
            prev.map((user) =>
                user._id === id ? { ...user, bookmark: !user.bookmark } : user
            )
        );
    };

    return (
        <div>
            <Users
                users={users}
                onDelete={handlDelete}
                onToggleBookmark={handleToggleBookmark}
            />
        </div>
    );
};
export default App;
