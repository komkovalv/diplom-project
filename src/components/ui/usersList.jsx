import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import API from "../..";
import QualitiesList from "./qualities/qualitiesList";

const User = () => {
    const [user, setUser] = useState();
    const { userId } = useParams();
    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    }, []);
    if (!user) {
        return <div>loading...</div>;
    }
    function getProfessionById(userId) {
        return API.professions[userId] || "undf";
    }
    const profession = getProfessionById(userId);
    console.log(profession);

    const history = useHistory();
    const handleClick = () => {
        history.push("/users");
    };
    return (
        <div>
            <h1>{user.name}</h1>
            <h2>Профессия: {user.profession.name}</h2>
            <p>
                <QualitiesList qualities={user.qualities} />
            </p>
            <h6>CompletedMeteengs: {user.completedMeetings}</h6>
            <h2>Rate: {user.rate}</h2>

            <button style={{ margin: 25 }} onClick={handleClick}>
                Все пользователи
            </button>
        </div>
    );
};

export default User;
