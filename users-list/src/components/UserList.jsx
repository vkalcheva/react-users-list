import Search from "./Search";
import UserListTable from "./UserListTable";

export default function UserList() {
    return (
        <section className="card users-container">
            <Search />
            <UserListTable />

            <button className="btn-add btn">Add new user</button>
        </section>
    );
}