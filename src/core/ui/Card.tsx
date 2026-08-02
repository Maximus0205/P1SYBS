export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 border border-slate-200">
      {children}
    </div>
  );
}
