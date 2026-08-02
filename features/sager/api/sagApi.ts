export type Sag = {
  id: string;
  titel: string;
  kunde: string;
  status: string;
};

export const sagApi = {
  async hentSager(): Promise<Sag[]> {
    return [
      {
        id: "1",
        titel: "Montørbesøg Odense",
        kunde: "Kunde A",
        status: "Åben"
      }
    ];
  }
};
