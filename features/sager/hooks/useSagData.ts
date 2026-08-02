import { useEffect, useState } from "react";
import { sagApi, Sag } from "../api/sagApi";

export function useSagData() {
  const [sager, setSager] = useState<Sag[]>([]);

  useEffect(() => {
    sagApi.hentSager().then(setSager);
  }, []);

  return { sager };
}
