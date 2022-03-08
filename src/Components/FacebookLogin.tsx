import {ReactElement} from 'react';
import '../Styles/App.css';
import 'react-toastify/dist/ReactToastify.css';


const FacebookLogin = (): ReactElement => {
  return (
    <>
      <p>The application will be given the following permissions:</p>
      <ul>
        <li>Name</li>
        <li>Surname</li>
        <li>Profile photo</li>
        <li>Profile photo</li>
        <li>E-mail address</li>
      </ul>
      <button>OK</button>
    </>
  )
}


export default FacebookLogin;
