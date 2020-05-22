export interface Item {
  id: string;
  name: string;
  desc?: string;
  price: number;
  calories: number;
  imageUrl: string;
}

export type RootStackParamList = {
  Main: undefined;
  Cart: { items: Item[] };
};
