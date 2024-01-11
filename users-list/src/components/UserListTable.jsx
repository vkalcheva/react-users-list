import { useEffect, useState } from "react";

import * as userService from "../services/userService";

import UserListItem from "./UserListItem";
import CreateUserModal from "./CreateUserModal";
import UserInfoModal from "./UserInfoModal";
import UserDeleteModal from "./UserDeleteModal";

export default function UserListTable() {
    const [users, setUsers] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);


    useEffect(() => {
        userService.getAll()
            .then(result => setUsers(result));
        // .catch (err => console.log(err));

    }, []);

    const createUserClickHandler = () => {
        setShowCreate(true);
    };

    const hideCreateUserModal = () => {
        setShowCreate(false);
    };

    const userCreateHendler = async (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));
        const newUser = await userService.create(data);
        setUsers(state => [...state, newUser]);
        setShowCreate(false);
    };

    const userInfoClickHendler = async (userId) => {
        setSelectedUser(userId);
        setShowInfo(true);
    };

    const deleteUserClickHandler = (userId) => {
        setSelectedUser(userId);
        setShowDelete(true);
    };

    const deleteUserHandler = async () => {
        // Remove user from server
        const result = await userService.remove(selectedUser);

        //Remove user from state
        setUsers(state => state.filter(user => user._id !== selectedUser));

        // Close delete modal
        setShowDelete(false);
    };

    return (
        <div className="table-wrapper">
            {showCreate &&
                <CreateUserModal
                    hideModal={hideCreateUserModal}
                    onUserCreate={userCreateHendler}
                />}
            {showInfo &&
                <UserInfoModal
                    hideModal={() => setShowInfo(false)}
                    userId={selectedUser}
                />}
            {showDelete &&
                <UserDeleteModal
                    hideModal={() => setShowDelete(false)}
                    onDelete={deleteUserHandler}
                />}

            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            First name
                            <svg
                                aria-hidden="true"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                data-icon="arrow-down"
                                data-prefix="fas"
                                focusable="false"
                                role="img"
                                viewBox="0 0 384 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    fill="currentColor"
                                >
                                </path>
                            </svg>
                        </th>
                        <th>
                            Last name
                            <svg
                                aria-hidden="true"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                data-icon="arrow-down"
                                data-prefix="fas"
                                focusable="false"
                                role="img"
                                viewBox="0 0 384 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    fill="currentColor"
                                >
                                </path>
                            </svg>
                        </th>
                        <th>
                            Email
                            <svg
                                aria-hidden="true"
                                className="icon"
                                data-icon="arrow-down"
                                data-prefix="fas"
                                focusable="false"
                                role="img"
                                viewBox="0 0 384 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    fill="currentColor"
                                >
                                </path>
                            </svg>
                        </th>
                        <th>
                            Phone
                            <svg
                                aria-hidden="true"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                data-icon="arrow-down"
                                data-prefix="fas"
                                focusable="false"
                                role="img"
                                viewBox="0 0 384 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    fill="currentColor"
                                >
                                </path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg
                                aria-hidden="true"
                                className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                data-icon="arrow-down"
                                data-prefix="fas"
                                focusable="false"
                                role="img"
                                viewBox="0 0 384 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    fill="currentColor"
                                >
                                </path>
                            </svg>
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <UserListItem
                            key={user._id}
                            userId={user._id}
                            {...user}
                            onInfoClick={userInfoClickHendler}
                            onDeleteClick={deleteUserClickHandler}
                        // createdAt={user.createdAt}
                        // email={user.email}
                        // firstName={user.firstName}
                        // imageUrl={user.imageUrl}
                        // lastName={user.lastName}
                        // phoneNumber={user.phoneNumber}

                        />
                    ))}

                </tbody>
            </table>

            <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>


        </div>
    );
};