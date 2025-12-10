import { createSlice } from "@reduxjs/toolkit";
import { createToDo, deleteToDo, handleEmployeeAccount, readEmployee, readToDos, registerEmployee } from "../actions/admin.actions";

const adminSlice = createSlice({
    name: "adminSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(registerEmployee.pending, (state, { payload }) => {
            state.loading = true
            state.success = false
        })
        .addCase(registerEmployee.fulfilled, (state, { payload }) => {
            state.loading = false
            state.success = true
        })
        .addCase(registerEmployee.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(readEmployee.pending, (state, { payload }) => {
            state.loading = true
            // state.success = false
        })
        .addCase(readEmployee.fulfilled, (state, { payload }) => {
            state.loading = false
            state.allEmployees = payload
        })
        .addCase(readEmployee.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(handleEmployeeAccount.pending, (state, { payload }) => {
            state.loading = true
            state.updateSuccess = false
            // state.success = false
        })
        .addCase(handleEmployeeAccount.fulfilled, (state, { payload }) => {
            state.loading = false
            state.updateSuccess = true
        })
        .addCase(handleEmployeeAccount.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(createToDo.pending, (state, { payload }) => {
            state.loading = true
            state.createToDoSuccess = false
        })
        .addCase(createToDo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.createToDoSuccess = true
        })
        .addCase(createToDo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(deleteToDo.pending, (state, { payload }) => {
            state.loading = true
            state.deleteSuccess = false
        })
        .addCase(deleteToDo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.deleteSuccess = true
        })
        .addCase(deleteToDo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(readToDos.pending, (state, { payload }) => {
            state.loading = true
            // state.deleteSuccess = false
        })
        .addCase(readToDos.fulfilled, (state, { payload }) => {
            state.loading = false
            state.allToDos = payload
        })
        .addCase(readToDos.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


})

export const { invalidate } = adminSlice.actions
export default adminSlice.reducer