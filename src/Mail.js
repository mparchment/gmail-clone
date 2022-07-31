import './Mail.css'
import {IconButton} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import DeleteIcon from '@material-ui/icons/Delete'
import EmailIcon from '@material-ui/icons/Email'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ErrorIcon from "@material-ui/icons/Error"
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore"
import PrintIcon from "@material-ui/icons/Print"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import { selectOpenMail } from './features/mailslice'
import { useSelector } from "react-redux";

function Mail(){
    const navigate = useNavigate()
    const selectedMail = useSelector(selectOpenMail)

    return (
        <div className='mail'>
            <div className="mail">
                <div className="mail-tools">
                    <div className="mail-tools-left">
                        <IconButton onClick={() => navigate("/")}>
                            <ArrowBackIcon/>
                        </IconButton>

                        <IconButton>
                            <MoveToInboxIcon/>
                        </IconButton>

                        <IconButton>
                            <ErrorIcon/>
                        </IconButton>

                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>

                        <IconButton>
                            <EmailIcon/>
                        </IconButton>

                        <IconButton>
                            <WatchLaterIcon/>
                        </IconButton>

                        <IconButton>
                            <LabelImportantIcon/>
                        </IconButton>

                        <IconButton>
                            <CheckCircleIcon/>
                        </IconButton>

                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                    </div>
                    <div className="mail-tools-right">
                        <IconButton>
                            <UnfoldMoreIcon/>
                        </IconButton>
                        <IconButton>
                            <PrintIcon/>
                        </IconButton>
                        <IconButton>
                            <ExitToAppIcon/>
                        </IconButton>
                    </div>
                </div>
                <div className="mail-body">
                    <div className="mail-body-header">
                        <h2>{selectedMail?.subject}</h2>
                        <LabelImportantIcon className="mail-important"/>
                        <p>{selectedMail?.title}</p>
                        <p className="mail-time">{selectedMail?.time}</p>
                    </div>

                    <div className="mail-message">
                        <p>{selectedMail?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mail;