import {ReactElement} from 'react';
import '../Styles/App.css';
import 'react-toastify/dist/ReactToastify.css';


const FacebookLogin = (): ReactElement => {
  return (
    <>
      <p>Aplikacja otrzyma następujące uprawnienia:</p>
      <ul>
        <li>imię</li>
        <li>nazwisko</li>
        <li>zdjęcie profilowe</li>
        <li>lista znajomych</li>
        <li>zadres email</li>
      </ul>
      <button>OK</button>
    </>
  )
}


export default FacebookLogin;