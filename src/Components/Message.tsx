import {ReactElement} from "react"

interface IMessageProps {
  result: Boolean,
  message: String
}

const Message = ({result, message}: IMessageProps): ReactElement => {
  if (result) {
    const href = `https://explorer.smartkeyplatform.io/testnet/tx/${message}`
    return <a target="_blank" href={href}>See in blockchain</a>

  } else {
    return <p>{message}</p>
  }
}

export default Message
