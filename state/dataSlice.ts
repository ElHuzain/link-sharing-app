import { link, user } from "@/globalTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface IDataState {
    user: user,
}

const initialState: IDataState = {
    user: {
        username: "",
        imageSrc: "",
        description: "",
        email: "",
        links: []
    }
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {

        setUserDetails: (state, aciton: { payload: user }) => {
            state.user = aciton.payload
        },

        addLink: (state, action: PayloadAction) => {
            state.user.links = [...state.user.links, action.payload] as link[];
        },
        removeLink: (state, action: { payload: string }) => {
            state.user.links = state.user.links.filter((link: link) => link.platform !== action.payload);
        },

        setUsername: (state, action: { payload: string }) => {
            state.user.username = action.payload;
        },

        setUserProfileURL: (state, action: { payload: string }) => {
            state.user.imageSrc = action.payload;
        },

        setUserDescription: (state, action: { payload: string }) => {
            state.user.description = action.payload;
        },

    }
});

export const { setUserDetails, addLink, removeLink, setUsername, setUserProfileURL, setUserDescription } = dataSlice.actions;
export const dataReducer = dataSlice.reducer