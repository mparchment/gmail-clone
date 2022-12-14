import './Sidebar.css'
import { Button, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import SidebarOption from './SidebarOption'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearMeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'

function Sidebar({ composeEmail }) {
    return (
        <div className='sidebar'>
            <Button
                onClick={() => composeEmail(true)}
                startIcon={<AddIcon fontSize='large'/>}
                className='sidebar-compose'
            >
                Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" number={6}/>
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={6}/>
            <SidebarOption Icon={NearMeIcon} title="Sent" number={54} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number={6}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={6}/>

            <div className="sidebar-footer">
                <div className="sidebar-footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>

        </div>
    );
}

export default Sidebar