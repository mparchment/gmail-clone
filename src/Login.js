import "./Login.css"
import loadingGif from './loading.gif'
import { auth, provider } from './firebase'
import { signInWithPopup } from 'firebase/auth'
import { Button } from "@mui/material";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
    const dispatch = useDispatch()

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user,
                    email: user.email,
                    photoUrl: user.photoURL,
                }))
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login-container">
                <img src={loadingGif} alt=""/>
            </div>
            <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
        </div>
    )
}

export default Login;