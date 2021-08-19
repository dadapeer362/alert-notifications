// Write your code here
import './index.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="alert-container">
    <h1 className="alert-heading">Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle className="icons-style success-color" />
      <div className="text-container">
        <h1 className="success-color">Success</h1>
        <p className="text-para">You can access all the files in the folder</p>
      </div>
    </Notification>
    <Notification>
      <RiErrorWarningFill className="icons-style error-color" />
      <div className="text-container">
        <h1 className="error-color">Error</h1>
        <p className="text-para">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
    <Notification>
      <MdWarning className="icons-style warning-color" />
      <div className="text-container">
        <h1 className="warning-color">Warning</h1>
        <p className="text-para">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
    <Notification>
      <MdInfo className="icons-style info-color" />
      <div className="text-container">
        <h1 className="info-color">Info</h1>
        <p className="text-para">Anyone on the internet can view these files</p>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
