import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { api } from "../../shared/utility";
export const signin = createAsyncThunk(
    "signin",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get(`/employees`, { params: userData })
            if (data.length === 0) {
                return rejectWithValue("Invalid Credentials!")
                // 👆 Will trigger rejected
            }
            else {
                if (data[0].role === "admin") {
                    localStorage.setItem("local-admin", JSON.stringify(data[0]))
                } else {
                    localStorage.setItem("local-employee", JSON.stringify(data[0]))
                }
                return data[0]
            }
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })