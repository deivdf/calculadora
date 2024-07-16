import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrenci } from "../helpers"

type Totalprop = {
    order: OrderItem[]
    tip: number
    Ordertoma: ()=> void
}


export default function OrderTotal({order, tip, Ordertoma}: Totalprop) {
    const subTotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const maspropin = useMemo(()=> subTotal * tip, [tip, order])
    const totalmas = useMemo(()=> maspropin + subTotal, [tip, order])
  return (
    <div>
        <div>
            <h2 className="font-bold uppercase mt-7">Total a pagar más propina</h2>
            <p> Cuenta a pagar:
                <span className=" font-bold">: {formatCurrenci(subTotal)}</span>
            </p>
            <p>
                Propina: 
                <span className=" font-bold">: {formatCurrenci(maspropin)}</span>
            </p>
            <p> Total a pagar:
                 <span className=" font-bold">: {formatCurrenci(totalmas)}</span>
            </p>
        </div>
        <button 
        className=" uppercase w-full bg-black text-white p-4 mt-10 font-bold"
        onClick={Ordertoma}
        >
            Guardar ordern
            </button>
    </div>

  )
}
