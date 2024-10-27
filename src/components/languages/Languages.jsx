import { useIntl } from "react-intl"
import { useLocale } from "../../translation/IntlProvider"

export const Languages = () => {
  const {locale, setLocale} = useLocale()
  const {formatMessage} = useIntl()
  return <div>
  <select onChange={p => setLocale(p.target.value)} value={locale} className="w-full border-diwan-500 border">
    <option value="br" className="w-full">{formatMessage({id: "br"})}</option>
    <option value="fr" className="w-full">{formatMessage({id: "fr"})}</option>
    <option value="en" className="w-full">{formatMessage({id: "en"})}</option>
  </select>
</div>
}