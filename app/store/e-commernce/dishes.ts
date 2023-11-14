// import exp from "constants";
import { StateCreator } from "zustand";
import { Dishes, aa } from "../types/types";
import axios from "axios";

const dishes: StateCreator<aa> = (set) => ({
  cards: [],
  allCards: [],
  loading: true,
  card: {},
  err: "",
  fetchDishes: async (input: string) => {
    set((state) => ({
      loading: state.loading,
    }));
    try {
      const res = await axios.get(
        `https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/Dishes?search=${input}`
      );
      const data = await res.data;
      set(() => ({
        loading: false,
        cards: data,
      }));
    } catch (error: unknown | any) {
      set(() => ({
        loading: false,
        cards: [],
        error: error.message,
      }));
    }
  },
  fetchDishe: async (id: string) => {
    set((state) => ({
      loading: state.loading,
    }));
    try {
      const res = await axios.get(
        `https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/Dishes/${id}`
      );
      const data = await res.data;
      set(() => ({
        loading: false,
        card: data,
      }));
    } catch (error: unknown | any) {
      set(() => ({
        loading: false,
        cards: [],
        error: error.message,
      }));
    }
  },
  pagenationDishes: async (page: number, limit: number, input: string) => {
    set((state) => ({
      loading: state.loading,
    }));
    try {
      const res = await axios.get(
        `https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/Dishes?page=${page}&limit=${limit}&search=${input}`
      );
      const data = await res.data;
      set(() => ({
        loading: false,
        allCards: data,
      }));
    } catch (error: unknown | any) {
      set(() => ({
        loading: false,
        allCards: [],
        error: error.message,
      }));
    }
  },
});

export default dishes;
