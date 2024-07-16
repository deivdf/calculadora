import { MenuItem } from "../types"
type MenuItemsprops = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}
export default function menuitems({item, addItem}: MenuItemsprops) {
  return (
    <button 
    className=" border-2 border-gray-400 w-full hover:bg-gray-400 p-3 flex justify-between"
    onClick={() => addItem(item)}
    >
     <p className="font-black uppercase text-slate-800">{item.name}</p>
     <p className="font-black uppercase ">$ {item.price}</p>
    </button>
  )
}
