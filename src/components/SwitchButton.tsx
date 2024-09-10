interface SwitchButtonProps {
    label: string;
    isActive: boolean;
    setIsActive: (isActive: boolean) => void;
}

function SwitchButton({label, isActive, setIsActive}: SwitchButtonProps) {
      

  const toggleRotation = () => {
    setIsActive(!isActive);
  };

  return (<div>
        <span className="text-black font-medium capitalize">{label}</span>
        <button
        onClick={toggleRotation}
        className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-transform duration-300 ${
            isActive ? 'rotate-180' : 'rotate-0'
        } ${isActive ? 'bg-green-500' : 'bg-red-500'}`}
        >
        <span className="text-white text-2xl">⏻</span>
        </button>
  </div>
  );
}

export default SwitchButton