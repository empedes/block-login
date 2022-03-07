import {ReactElement} from 'react';
import '../Styles/App.css';
import 'react-toastify/dist/ReactToastify.css';


const GoogleLogin = (): ReactElement => {
  return (
    <>
      <p>Aplikacja otrzyma następujące uprawnienia:</p>
      <ul>
        <li>adres email</li>
        <li>nazwa</li>
        <li>lokalizacja</li>
      </ul>
      <button>OK</button>
    </>
  )
}

export default GoogleLogin;