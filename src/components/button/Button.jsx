import './button.css'

// eslint-disable-next-line react/prop-types
export const Button = ({title, onClick}) => {
  return <button onClick={onClick} className='bg-diwan-500 text-white hover:bg-diwan-700'>{title}</button>
}