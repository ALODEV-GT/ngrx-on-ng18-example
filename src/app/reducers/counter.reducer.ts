import { createReducer, on } from "@ngrx/store"
import { decrement, increment, reset } from "../counter.acrtions"

export const initialState = 0

export const couterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1 ),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0),
)