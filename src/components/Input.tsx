import React, { FC } from "react";

interface InputProps {
  id: string;
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
}

const Input: FC<InputProps> = ({ id, type, onChange, value, label }) => {
  return (
    <div className="relative">
      <input
        className="block w-full bg-neutral-400 px-6 pt-6 pb-1 rounded-md focus:outline-none focus:ring-0 peer"
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        placeholder=" "
      />
      <label
        className="absolute top-3 left-6 z-10 origin-[0] scale-75 -translate-y-3 transform duration-150 
    peer-focus:scale-75 peer-focus:-translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
