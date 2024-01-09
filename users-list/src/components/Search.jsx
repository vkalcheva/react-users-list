export default function Search() {
    return (
        <form className="search-form">
            <h2>
                <svg
                    aria-hidden="true"
                    className="svg-inline--fa fa-user SearchBar_icon__cXpTg"
                    data-icon="user"
                    data-prefix="fas"
                    focusable="false"
                    role="img"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                        fill="currentColor"
                    >
                    </path>
                </svg>
                <span>
                    Users
                </span>
            </h2>
            <div className="search-input-container">
                <input
                    name="search"
                    placeholder="Please, select the search criteria"
                    type="text"
                />
                <button className="btn close-btn">
                    <i className="fa-solid fa-xmark" />
                </button>
                <button
                    className="btn"
                    title="Please, select the search criteria"
                >
                    <i className="fa-solid fa-magnifying-glass" />
                </button>
            </div>
            <div className="filter">
                <span>
                    Search Criteria:
                </span>
                <select
                    className="criteria"
                    name="criteria"
                >
                    <option value="">
                        Not selected
                    </option>
                    <option value="">
                        First Name
                    </option>
                    <option value="">
                        Last Name
                    </option>
                    <option value="">
                        Email
                    </option>
                    <option value="">
                        Phone
                    </option>
                </select>
            </div>
        </form>

    );
}