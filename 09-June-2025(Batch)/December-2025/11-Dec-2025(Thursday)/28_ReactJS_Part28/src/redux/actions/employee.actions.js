import { createAsyncThunk } from "@reduxjs/toolkit";
// import api from "../api";
import { api } from "../../shared/utility"

export const readEmployeeToDo = createAsyncThunk(
    "readEmployeeToDo",
    async (empId, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/todos", { params: { employee: empId } })
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const completeToDo = createAsyncThunk(
    "completeToDo",
    async (toDoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.patch(`/todos/${toDoData.id}`, toDoData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })