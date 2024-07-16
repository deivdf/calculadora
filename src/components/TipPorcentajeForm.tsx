import type { Dispatch, SetStateAction } from "react"
const tipoOptions = [
    {
        id: 'tipo-10',
        value: 0.10,
        lable: '10%'
    },
    {
        id: 'tipo-15',
        value: 0.15,
        lable: '15%'
    },
    {
        id: 'tipo-20',
        value: 0.50,
        lable: '50%'
    }
]
/*se importa import type { Dispatch, SetStateAction } from "react" para quitar el react
 setTip: React.Dispatch<React.SetStateAction<number>> esto se strae del hook*/

type TipPorcentajeFormProps = {
  setTip: Dispatch<SetStateAction<number>>
  tip: number
}

export default function TipPorcentajeForm({setTip, tip}: TipPorcentajeFormProps) {
  return (
    <div>
      <h3 className=" font-black text-2xl flex gap-2">Propinas:</h3>
      <form>
        {tipoOptions.map(tipOption => (
            <div key={tipOption.id} className="flex gap-2">
                <label htmlFor={tipOption.id}>{tipOption.lable}</label>
                <input 
                id={tipOption.id}
                type="radio"
                name="tip"
                value={tipOption.value}
                //se parsea con el +
                onChange={e => setTip(+e.target.value)}
                checked={tipOption.value === tip}
                 />
            </div>
        ))}
      </form>
    </div>
  )
}

