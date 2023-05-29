import { instance } from '../../shared/api/apiDefault';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getByCategory = createAsyncThunk(
    'menu/getByCategory',
    async (data, { rejectWithValue }) => {
        const encodedData = encodeURIComponent(JSON.stringify(data));
        try {
            const response = await instance.get(
                `/api/menu?data=${encodedData}`
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
