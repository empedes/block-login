import { ReactElement } from "react"

interface ITransactionButtonProps {
  buttonActive: Boolean,
  name: String,
  fun: Function,
}

const TransactionButton = ({buttonActive, name, fun}: ITransactionButtonProps): ReactElement => {
  return (
    <button
    onClick={() => fun()}
    disabled={!buttonActive}>
    {name}
  </button>
  )
}

export default TransactionButton