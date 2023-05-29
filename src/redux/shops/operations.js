import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../shared/api/apiDefault';

export const getShops = createAsyncThunk(
    'shops/getShops',
    async (_, { rejectWithValue }) => {
        try {
            const response = await instance.get(`/api/shop`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getShopById = createAsyncThunk(
    'shops/getShopById',
    async (id, { rejectWithValue }) => {
        try {
            const response = await instance.get(`/api/shop/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
