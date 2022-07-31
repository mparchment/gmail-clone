import './EmailRow.css'
import { IconButton, Checkbox } from '@material-ui/core'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailslice"

function EmailRow({ id, title, subject, description, time }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const openMail = () => {
        dispatch(selectMail({
            id, title, subject, description, time
        }));

        navigate('/Mail')
    }

    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow-options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>
            </div>

            <h3 className="emailRow-title">
                {title}
            </h3>

            <div className="emailRow-message">
                <h4>{subject} <span className="emailRow-description">- {description}</span> </h4>
            </div>
            <p className="emailRow-time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow;