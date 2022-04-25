const Button = ({name, onClick}) => {
  return (
    <button className="px-9 p-3 border-2 rounded-lg text-gray-300" onClick={onClick}>{name}</button>
  )
}

export default Button