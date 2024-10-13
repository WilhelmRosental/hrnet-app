import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IEmployeeData, IEmployee } from '../../types'

const initialState: IEmployeeData = {
    data: [],
}

export const formSlice = createSlice({
    name: 'employeeData',
    initialState,
    reducers: {
        addData: (state, action: PayloadAction<IEmployee>) => {
            state.data?.push(action.payload)
        },
    },
})
