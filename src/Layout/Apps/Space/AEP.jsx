import { useIntl } from "react-intl"
import { Card } from "../../../components/card/card"

const aep = [
  {"name": "calendar", "link": ""},
  {"name": "rh", "link": ""},
  {"name": "periscolaire", "link": ""},
]

export const AEP = () => {
  const {formatMessage} = useIntl()
  return <div className="flex flex-col gap-2">
    <h1 className="font-bold text-lg">{formatMessage({id: 'aep.space'})}</h1>
    {aep.map((p, i) => <div key={i}><Card link={p.link} title={`aep.${p.name}.title`} description={`aep.${p.name}.description`}/></div>)}
  </div>
}