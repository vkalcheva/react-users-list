import Search from "./Search";
import UserListTable from "./UserListTable";

export default function UserList() {
    return (
        <section class="card users-container">
            <Search />
            <UserListTable />
        </section>
    );
}