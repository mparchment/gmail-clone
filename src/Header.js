import './Header.css';
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import { Avatar, IconButton } from "@material-ui/core"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsButton from "@material-ui/icons/Notifications"
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "./features/userSlice";
import {auth} from "./firebase";

function Header(){
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    };

    return (
        <div className='header'>
            <div className='header-left'>
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png" alt=""/>
            </div>
            <div className='header-middle'>
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon className="header-input-caret"/>
            </div>
            <div className='header-right'>
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsButton/>
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl}/>
            </div>
        </div>
    )
}

export default Header;