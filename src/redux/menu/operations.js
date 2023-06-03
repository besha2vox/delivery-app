import { instance } from '../../shared/api/apiDefault';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllBySHopId = createAsyncThunk(
  'menu/getAll',
  async (data, { rejectWithValue }) => {
    const { page, shop } = data;
    try {
      const response = await instance.get(`/api/menu/all/${shop}?page=${page}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getByCategory = createAsyncThunk(
  'menu/getByCategory',
  async (data, { rejectWithValue }) => {
    const { page, ...query } = data;
    const encodedData = encodeURIComponent(JSON.stringify(query));
    try {
      const response = await instance.get(
        `/api/menu?data=${encodedData}&page=${page}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getById = createAsyncThunk(
  'menu/getById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/api/menu/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
