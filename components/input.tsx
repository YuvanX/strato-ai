import clsx from "clsx";

export const Input = ({
  label,
  id,
  placeholder,
  type,
  onChange,
  classname,
}: {
  label: string;
  id: string;
  placeholder: string;
  type: string;
  onChange: (value: string) => void
  classname?: string;
}) => {
  return <div className="flex flex-col my-3">
    <label className="font-semibold mb-2 text-sm text-white" htmlFor={id}>{label}</label>
    <input className={clsx("px-2 py-2 outline-none bg-[#121212] rounded text-slate-300 border border-[#1E293B]", classname)} placeholder={placeholder} type={type} onChange={(e) => onChange(e.target.value)}/>
  </div>;
};
