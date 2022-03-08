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
      <p>The application will be given the following permissions:</p>
      <ul>
        <li>BlockChain address</li>
      </ul>
      <TransactionButton
        key="Zaloguj"
        fun={() => authorize((Math.random() + 1).toString(36).substring(2), props.fun)}
        buttonActive={!props.user}
        name="Log in"
      />
    </>
  )
}


export default SkeyLogin;
