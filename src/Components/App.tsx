import {ReactElement, useState} from 'react';
import '../Styles/App.css';
import 'react-toastify/dist/ReactToastify.css';
import FacebookLogin from "./FacebookLogin";
import GoogleLogin from "./GoogleLogin";
import SkeyLogin from "./SkeyLogin";
import {ToastContainer, ToastContainerProps} from "react-toastify";

const toastOpt: ToastContainerProps = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  rtl: false,
  pauseOnFocusLoss: false,
  draggable: true,
  pauseOnHover: true,
  newestOnTop: true,
}

const App = (): ReactElement => {
  const [user, setUser] = useState('')
  const [loginMethod, setLoginMethod] = useState('skey')
  const setUserAddress = () => {
    window.WavesKeeper.initialPromise.then(keeper => {
      window.WavesKeeper.publicState().then(
        (data: WavesKeeper.IPublicStateResponse) => {
          setUser(data.account?.address ?? ' ')
        }
      )
    })
  }

  const loginButtons = () => {
    if (user) return <></>

    return (
      <>
        <button className='button' onClick={() => setLoginMethod('facebook')}> Facebook</button>
        <br/><br/>
        <button className='button' onClick={() => setLoginMethod('google')}> Google</button>
        <br/> <br/>
        <button className='button' onClick={() => setLoginMethod('skey')}> Skey</button>
        <br/>
        <br/> <br/>
      </>
    )
  }

  const login = () => {
    if (!user) return <h3>Pleas sign in by</h3>

    return <p>{`You are already logged in as ${user}`}</p>
  }

  return (
    <div className='App'>
      <div className='wrapper'>
        <div className='Login'>
          <h2>Login</h2>
          {login()}

          {loginButtons()}

          {!user && loginMethod === 'facebook' && <FacebookLogin/>}
          {!user && loginMethod === 'google' && <GoogleLogin/>}
          {!user && loginMethod === 'skey' && <SkeyLogin user={user} fun={setUserAddress}/>}

        </div>
      </div>
      <ToastContainer {...toastOpt}/>
    </div>
  )
}

export default App;
