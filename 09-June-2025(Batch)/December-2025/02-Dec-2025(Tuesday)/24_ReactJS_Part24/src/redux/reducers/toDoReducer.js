import { CREATE, DELETE } from "../constants/toDoConstants"
//                                                        👇 from toDoAction 
export const toDoReducer = (state = { notes: [] }, { type, payload }) => {
    if (type === CREATE) {
        return { notes: [...state.notes, payload] }
    } else if (type === DELETE) {
        return { notes: state.notes.filter(item => item !== payload) }
    }
    else {
        return state
    }
}