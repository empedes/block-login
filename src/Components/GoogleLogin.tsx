import {ReactElement} from 'react';
import '../Styles/App.css';
import 'react-toastify/dist/ReactToastify.css';


const GoogleLogin = (): ReactElement => {
  return (
    <>
      <p>The application will be given the following permissions:</p>
      <ul>
        <li>E-mail address</li>
        <li>Name</li>
        <li>Location</li>
      </ul>
    </>
  )
}

export default GoogleLogin;
