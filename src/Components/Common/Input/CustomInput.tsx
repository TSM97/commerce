import { ChangeEventHandler } from "react";

type CustomInputType = {
  OnChange: ChangeEventHandler<HTMLInputElement>;
  Name: string;
  Label: string;
  Id: string;
  Type: "text" | "password" | "email" | "number" | "checkbox" | "radio";
  value: any;
  ClassName?: string;
};

export default function CustomInput({
  OnChange,
  Name,
  Label,
  Id,
  Type,
  value,
  ClassName,
}: CustomInputType) {
  return (
    <div className={`relative ${ClassName}`}>
      <input
        type={Type}
        name={Name}
        id={Id}
        onChange={OnChange}
        placeholder=" "
        className="peer shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-honey"
        required
      />
      <label
        htmlFor={Id}
        className={`absolute left-3 top-2 bg-white px-1 text-gray-500 text-sm font-bold transition-all peer-placeholder-shown:cursor-text peer-focus:cursor-default peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base ${
          value != "" ? " top-[-11px]" : "peer-focus:top-[-11px] "
        } peer-focus:text-honey peer-focus:text-sm`}
      >
        {Label}
      </label>
    </div>
  );
}
