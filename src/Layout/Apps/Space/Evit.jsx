import { useIntl } from "react-intl"
import { Card } from "../../../components/card/card"

const evit = [
  {"name": "calendar", "link": ""},
  {"name": "event", "link": ""},
  {"name": "recipe", "link": ""},
]

export const Evit = () => {
  const {formatMessage} = useIntl()
  return <div className="flex flex-col gap-2">
    <h1 className="font-bold text-lg">{formatMessage({id: 'evit.space'})}</h1>
    {evit.map((p, i) => <div key={i}><Card link={p.link} title={`evit.${p.name}.title`} description={`evit.${p.name}.description`}/></div>)}
  </div>
}