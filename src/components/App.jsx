import React, { useState } from "react";
import SearchStatus from "./searchStatus";
import Users from "./users";
import API from "../api";

const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll());
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
            <SearchStatus userCount={users.length} />
            <Users
                users={users}
                onDelete={handlDelete}
                onToggleBookmark={handleToggleBookmark}
            />
        </div>
    );
};
export default App;
