import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./axiosInstance";

export const getCombinations = createAsyncThunk(
  "combinations",
  async (page: number) => {
    const { data } = await instance.get(
      `/combinations?pageIndex=${page}&pageSize=6`
    );
    return data;
  }
);
