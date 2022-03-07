import Message from "./Components/Message";
import {toast} from "react-toastify";
import {DAPP_ADDRESS} from "./config";

const singAndPublish = (tx: WavesKeeper.TSignTransactionData, callback: Function) => {
    if (!window.WavesKeeper) {
        toast.error(<Message result={false} message="Zainstaluj SKey Keeper"/>)
        return
    }

    window.WavesKeeper.initialPromise.then(keeper => {
        window.WavesKeeper.signAndPublishTransaction(tx)
            .then(resp => JSON.parse(resp))
            .then(data => {
                const newData = data as any
                callback()
                toast.success(<Message result={true} message={newData.id}/>)
            })
            .catch(err =>
                toast.error(<Message result={false} message={err?.data?.message ?? err?.data ?? err}/>)
            )
    })
}

const dAppFuncion = (dApp: string, funName: string, args: Array<WavesKeeper.TCallArgs>, payments: Array<WavesKeeper.IMoneyTokens>): WavesKeeper.TSignTransactionData => (
    {
        type: 16,
        data: {
            dApp: dApp,
            call: {
                function: funName,
                args: args
            },
            payment: payments,
            fee: {
                tokens: "0.009",
                assetId: "WAVES"
            },
        }
    }
)

export const authorize = (token: string, fun: Function) => {
    const data = dAppFuncion(
        DAPP_ADDRESS,
        "authorize",
        [{type: "string", value: token}],
        []
    );
    singAndPublish(data, fun);
}



export const addUser = (token: string, fun: Function) => {
    const data = dAppFuncion(
        DAPP_ADDRESS,
        "addUser",
        [{type: "string", value: token}],
        []
    );
    singAndPublish(data, fun);
}