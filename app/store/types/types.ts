export type Dishes = {
  user: Users[] | [];
  register: (user: Users[]) => void;
};
export type All = {
  user: Users[] | [];
  register: (user: Users[]) => void;
  fetchDishes: (input: string) => void;
  pagenationDishes: (page: number, limit: number, input: string) => void;
  loading: boolean;
  err: any | unknown;
  fetchDishe: (id: string) => void;
  cards: [] | ab[];
  card: [] | ab[];
  allCards: [] | ab[];
};
export type aa = {
  err: any | unknown;
  cards: [] | ab[];
  card: [] | ab[];
  allCards: [] | ab[];
  loading: boolean;
  fetchDishes: (input: string) => void;
  fetchDishe: (id: string) => void;
  pagenationDishes: (page: number, limit: number, unput: string) => void;
};

export type Users = {
  fullName: string;
  email: string;
  password: string;
};
export type ab = {
  id: string;
  name: string;
  category: string;
  price: string;
  stars: string;
  imgUrl: string;
};
