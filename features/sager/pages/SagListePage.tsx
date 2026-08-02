import SagListeTable from "../components/SagListeTable";
import Card from "../../../core/ui/Card";
import { useSagData } from "../hooks/useSagData";

export default function SagListePage() {
  const { sager } = useSagData();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-black">Sager</h2>

      <Card>
        <SagListeTable sager={sager} />
      </Card>
    </div>
  );
}
