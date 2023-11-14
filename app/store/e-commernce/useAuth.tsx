import { StateCreator } from "zustand";
import { Dishes, Users } from "../types/types";

const userAuth: StateCreator<Dishes> = (set) => ({
  user: [],
  register: (user: Users[]) =>
    set((state) => ({
      user: user,
    })),
});
export default userAuth;
