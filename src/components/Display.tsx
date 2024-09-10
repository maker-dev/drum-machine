interface DisplayProps {
    value: string;
}

function Display({value}: DisplayProps) {
  return (
    <div id="display" className="w-48 h-12 bg-gray-500 p-4 flex justify-center items-center font-semibold">
        {
            value
        }
    </div>
  )
}

export default Display