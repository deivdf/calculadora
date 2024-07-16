import { formatCurrenci } from "../helpers"
import { OrderItem } from "../types"

type ordeProps = {
    order: OrderItem[]
    removeItem: (id: OrderItem['id']) => void
}
export default function orderComponets({order, removeItem}: ordeProps) {
  return (
    <div className="space-y-3 mt-14">
      {
        order.map( item =>
            <div key={item.id} className="flex justify-between border-t border-gray-400 p-5 last-of-type:border-b">
                <div>
                    <p className=" text-2xl text-gray-900">{item.name} {formatCurrenci(item.price)}</p>
                    <p className=" text-2xl text-gray-900 font-bold">{item.quantity} - {formatCurrenci(item.price * item.quantity)} </p>
                </div>
                <button className=" bg-red-600 h-8 w-8 rounded-xl font-black text-white"
                onClick={() => removeItem(item.id)}
                >
                    x
                </button>
            </div>
        )
      }
    </div>
  )
}
