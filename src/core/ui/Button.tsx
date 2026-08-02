type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition";

const variants = {
  primary: "bg-[#b7181e] text-white hover:bg-red-700",
  secondary: "bg-black text-white hover:bg-black/80",
  ghost: "bg-transparent text-black hover:bg-[#F5F5F5]"
};

export default function Button({ children, variant = "primary", ...rest }: Props) {
  return <button className={`${base} ${variants[variant]}`} {...rest}>{children}</button>;
}
