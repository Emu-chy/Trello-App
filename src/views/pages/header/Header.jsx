import { useNavigate } from "react-router-dom";

const Header = () => {
    const history = useNavigate();

    const logoutUser = () => {
        localStorage.removeItem("loggedIn-Data");
        history("/");
    };
    const showProfile = () => {
        const userProfile = localStorage.getItem("users");
        alert(userProfile);
    };
    return (
        <div className="navbar">
            <div className="flex-1">
                <div className="ml-3 cursor-pointer">
                    <h1 className="text-xl text-violet-900 font-bold">MyTrello</h1>
                </div>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" alt="pic" />
                        </div>
                    </label>

                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <p className="justify-between" onClick={showProfile}>
                                Profile
                                <span className="badge">New</span>
                            </p>
                        </li>

                        <li>
                            <p onClick={logoutUser}>Logout</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
