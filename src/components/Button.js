const Button = ({name, isEspresso, setEspresso, buttons, setActiveTab, activeTab}) => {

  const onClick = (i) =>{
    setActiveTab(i)
    setEspresso(!isEspresso)
  }

  return (
    <div>
      {buttons.map((btn, i) => {
        const isActive = i === activeTab;
        return (
          <button
            key={btn.id}
            style={{ backgroundColor: isActive ? "#374151" : "" }}
            className={`${btn.id} ${isActive && activeTab} mx-5 px-9 p-3 border-2 rounded-lg text-gray-300 hover:bg-gray-700 transition duration-300`}
            onClick={() => onClick(i)}
          >
            {btn.id}
          </button>
        );
      })}
    </div>
  );
}

export default Button