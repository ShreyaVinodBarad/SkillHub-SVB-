import { createSlice } from "@reduxjs/toolkit";
import { completeToDo, readEmployeeToDo } from "../actions/employee.actions";

const employeeSlice = createSlice({
    name: "employeeSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(readEmployeeToDo.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(readEmployeeToDo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.employeeToDos = payload
        })
        .addCase(readEmployeeToDo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(completeToDo.pending, (state, { payload }) => {
            state.loading = true
            state.updateSuccess = false
        })
        .addCase(completeToDo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.updateSuccess = true
            // state.employeeToDos = payload
        })
        .addCase(completeToDo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = employeeSlice.actions
export default employeeSlice.reducer