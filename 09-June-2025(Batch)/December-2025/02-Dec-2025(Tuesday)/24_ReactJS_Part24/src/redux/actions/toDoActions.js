import { CREATE, DELETE } from "../constants/toDoConstants"
import { reduxStore } from "../store"

export const createToDo = arg => {
    reduxStore.dispatch({ type: CREATE, payload: arg })
}

export const deleteToDo = arg => {
    reduxStore.dispatch({ type: DELETE, payload: arg })
}