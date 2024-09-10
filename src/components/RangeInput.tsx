import React from 'react';

interface RangeInputProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({ value, min = 0, max = 100, step = 1, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default RangeInput;
