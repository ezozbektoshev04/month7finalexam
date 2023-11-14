import { create } from "zustand";
import userAuth from "./e-commernce/useAuth";
import { All, Dishes } from "./types/types";
import dishes from "./e-commernce/dishes";

const useStore = create<All>((...set) => ({
  ...dishes(...set),
  ...userAuth(...set),
}));

export default useStore;
