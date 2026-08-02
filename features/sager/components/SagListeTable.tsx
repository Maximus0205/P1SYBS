import type { Sag } from "../api/sagApi";

export default function SagListeTable({ sager }: { sager: Sag[] }) {
  return (
    <table className="w-full text-sm">
      <thead className="bg-slate-100">
        <tr>
          <th className="px-3 py-2 text-left">Titel</th>
          <th className="px-3 py-2 text-left">Kunde</th>
          <th className="px-3 py-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {sager.map((s) => (
          <tr key={s.id} className="border-t">
            <td className="px-3 py-2">{s.titel}</td>
            <td className="px-3 py-2">{s.kunde}</td>
            <td className="px-3 py-2">{s.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
