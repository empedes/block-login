import {ReactElement} from 'react';
import '../Styles/App.css';
import 'react-toastify/dist/ReactToastify.css';
import TransactionButton from "./TransactionButton";
import {authorize} from "../WKConsumer";

interface ISkeyLoginProps {
  user: string,
  fun: Function
}

const SkeyLogin = (props: ISkeyLoginProps): ReactElement => {
  return (
    <>
      <p>Aplikacja otrzyma następujące uprawnienia:</p>
      <ul>
        <li>adres BlockChain</li>
      </ul>
      <TransactionButton
        key="Zaloguj"
        fun={() => authorize((Math.random() + 1).toString(36).substring(2), props.fun)}
        buttonActive={!props.user}
        name="Zaloguj"
      />
    </>
  )
}


export default SkeyLogin;