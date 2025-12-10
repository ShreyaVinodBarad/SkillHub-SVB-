import { createAsyncThunk } from "@reduxjs/toolkit";
// import api from "../api";
import { api } from "./../../shared/utility"

export const registerEmployee = createAsyncThunk(
    "registerEmployee",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/employees", userData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const readEmployee = createAsyncThunk(
    "readEmployee",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/employees", { params: { role: "employee" } })
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const handleEmployeeAccount = createAsyncThunk(
    "handleEmployeeAccount",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.patch(`/employees/${userData.id}`, userData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

// createToDo
export const createToDo = createAsyncThunk(
    "createToDo",
    async (toDoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/todos", toDoData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const readToDos = createAsyncThunk(
    "readToDos",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/todos")
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const deleteToDo = createAsyncThunk(
    "deleteToDo",
    async (id, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.delete(`/todos/${id}`)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })