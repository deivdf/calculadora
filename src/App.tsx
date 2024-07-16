import { menuItems } from "./data/db"
import Menuitems from "./components/Menuitems"
import useOrder from "./hooks/useOrder"
import OrderComponets from "./components/OrderComponets"
import OrderTotal from "./components/OrderTotal"
import TipPorcentajeForm from "./components/TipPorcentajeForm"
function App() {
  //console.log(menuItems)
  const {addItem,  tip, setTip, order, removeItem, Ordertoma} = useOrder()

  return (
    <>
      <header className="bg-blue-500 py-5">
          <h1 className="text-center text-4xl font-black"> Contador de propinas y consumo </h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="text-center p-5">
          <h2 className="font-black text-4xl">Menu</h2>
          <div className="space-y-3 mt-10">
             {menuItems.map(item =>(
               <Menuitems key={item.id}
               item={item}
               addItem={addItem}
               />
             ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg">
          {order.length > 0 ?(
            <>
          <h2 className=" text-center font-black text-4xl">Consumos</h2>
          <OrderComponets
           order={order}
           removeItem={removeItem}
           />
          <TipPorcentajeForm
          setTip={setTip}
          tip={tip}
          />
           <OrderTotal
           tip={tip}
           order={order}
           Ordertoma={Ordertoma}
           />
            </>
          ):(
            <p className="text-3xl text-center text-red-500">No hay pedidos</p>
          )}

        </div>
      </main>
    </>
  )
}

export default App
