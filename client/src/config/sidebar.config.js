import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import SendIcon from '@mui/icons-material/Send';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


export const SIDEBAR_DATA = [{
  name: 'inbox',
  title: 'Inbox',
  icon: InsertPhotoIcon
}, {
  name: 'starred',
  title: 'Starred',
  icon: StarOutlineOutlinedIcon
}, {
  name: 'sent',
  title: 'Sent',
  icon: SendIcon
}, {
  name: 'drafts',
  title: 'Drafts',
  icon: InsertDriveFileOutlinedIcon
}, {
  name: 'bin',
  title: 'Bin',
  icon: DeleteOutlineOutlinedIcon
}, {
  name: 'allmail',
  title: 'All Mail',
  icon: EmailOutlinedIcon
}];