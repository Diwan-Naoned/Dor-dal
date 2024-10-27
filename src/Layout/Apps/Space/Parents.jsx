import { useIntl } from "react-intl"
import { Card } from "../../../components/card/card"

const parents = [
  {"name": "periscolaire", "link": ""},
  {"name": "don", "link": ""},
  {"name": "event", "link": ""},
  {"name": "book", "link": "https://www.helloasso.com/associations/evit-diwan/boutiques/ar-stal-vente-de-noel-d-ouvrages-en-breton"},
]

export const Parents = () => {
  const {formatMessage} = useIntl()
  return <div className="flex flex-col gap-2">
    <h1 className="font-bold text-lg">{formatMessage({id: 'parent.space'})}</h1>
    {parents.map((p, i) => <div key={i}><Card link={p.link} title={`parent.${p.name}.title`} description={`parent.${p.name}.description`}/></div>)}
  </div>
}