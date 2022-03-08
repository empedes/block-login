import {ReactElement, useState} from 'react';
import '../Styles/App.css';
import 'react-toastify/dist/ReactToastify.css';
import FacebookLogin from "./FacebookLogin";
import GoogleLogin from "./GoogleLogin";
import SkeyLogin from "./SkeyLogin";


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
  return (
    <>
      <h3>
        {!!user ? `You are already logged in as ${user}` : `Pleas log in`}
      </h3>

      {!user &&
          <>
              <a onClick={() => setLoginMethod('facebook')}> Facebook </a> ||
              <a onClick={() => setLoginMethod('google')}> Google </a> ||
              <a onClick={() => setLoginMethod('skey')}> Skey </a> ||

            {!user && loginMethod === 'facebook' && <FacebookLogin/>}
            {!user && loginMethod === 'google' && <GoogleLogin/>}
            {!user && loginMethod === 'skey' && <SkeyLogin user={user} fun={setUserAddress}/>}
          </>
      }
    </>
  )
}

export default App;
