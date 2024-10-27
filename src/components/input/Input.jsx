import './input.css'

// eslint-disable-next-line react/prop-types
export const Input = ({label}) => {
  return <div>
    <p>{label}</p>
    <input placeholder={label}/>
  </div>
}