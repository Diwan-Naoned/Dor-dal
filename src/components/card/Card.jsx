import { useIntl } from 'react-intl'
import './card.css'

// eslint-disable-next-line react/prop-types
export const Card = ({title, description, link, type}) => {
  const {formatMessage} = useIntl()
  return <a href={link}>
    <div className={`${type === 'primary' ? 'bg-diwan-500 text-white hover:bg-diwan-700 w-full px-8 py-4' : 'card'}`}>
      <h1 className='font-semibold text-center'>{formatMessage({id: title})}</h1>
      {description && <p className='font-light text-xs'>{formatMessage({id: description})}</p>}
    </div>
  </a>
}