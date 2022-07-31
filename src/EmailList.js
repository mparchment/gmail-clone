import './EmailList.css'
import { IconButton, Checkbox } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import Section from './Section'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import EmailRow from './EmailRow'
import { useState, useEffect } from "react";
import { db } from './firebase'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'


function EmailList({ viewMail, setViewMail }){

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const emailsColRef = collection(db, 'emails');
        const emailsQuery = query(emailsColRef, orderBy('time', 'desc'));
        onSnapshot(emailsQuery, (snapshot) => {
            setEmails(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        })
    }, [])

    return (
        <div className='emailList'>
            <div className='emailList-settings'>
                <div className="emailList-settings-left">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList-settings-right">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="emailList-sections">
                <Section Icon={InboxIcon} title='Primary' color='red' selected={true}/>
                <Section Icon={PeopleIcon} title='Social' color='#1A73E8'/>
                <Section Icon={LocalOfferIcon} title='Promotions' color='green'/>
            </div>

            <div className="emailList-list">
                {emails.map(( { id, data: { to, subject, message, time } }) => (
                    <EmailRow
                        viewMail={viewMail}
                        setViewMail={setViewMail}
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={time.toDate().toUTCString()}
                    />
                ))}
            </div>
        </div>
    )
}

export default EmailList;