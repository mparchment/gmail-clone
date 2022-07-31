import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import {
    BrowserRouter as Router, Routes, Route
} from "react-router-dom"
import Mail from './Mail'
import EmailList from './EmailList'
import SendMail from './SendMail'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from './features/userSlice'
import Login from './Login'
import { auth } from './firebase'
import { login } from "./features/userSlice";

function App() {

    const [sendingMail, setSendingMail] = useState(false)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                // The user is logged in
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }))
            } else {
                // The user is logged out
            }
        })
    }, [])

    return (
      <Router>

          {!user ? (
              <Login />
          ) : (
              <div className="app">
                  <Header />
                  <div className="app-body">
                      <Sidebar composeEmail={sendingMail => setSendingMail(sendingMail)} />
                      <Routes>
                          <Route path='/Mail' element={<Mail/>}/>
                          <Route path='/' element={<EmailList/>}/>
                      </Routes>
                  </div>
                  {sendingMail && <SendMail composeEmail={sendingMail => setSendingMail(sendingMail)} />}
              </div>
          )}
      </Router>
  );
}

export default App;
