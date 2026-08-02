type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Input({ label, ...rest }: Props) {
  return (
    <label className="block space-y-1">
      {label && <span className="text-sm font-medium text-black">{label}</span>}
      <input
        {...rest}
        className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#b7181e] focus:outline-none"
      />
    </label>
  );
}
