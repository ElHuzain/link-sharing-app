import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Link = {
    platform: string,
    url: string,
}

export type User = {
    username: string,
    imageSrc: string,
    description: string,
    email: string,
    links: Link[]
}

export interface IDataState {
    user: User,
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

        setUserDetails: (state, aciton: { payload: User }) => {
            state.user = aciton.payload
        },

        addLink: (state, action: PayloadAction) => {
            state.user.links = [...state.user.links, action.payload] as Link[];
        },
        removeLink: (state, action: { payload: string }) => {
            state.user.links = state.user.links.filter(link => link.platform !== action.payload);
        },

        setUsername: (state, action: { payload: string }) => {
            state.user.username = action.payload;
        },

        setUserProfileURL: (state, action: { payload: string }) => {
            state.user.profileURL = action.payload;
        },

        setUserDescription: (state, action: { payload: string }) => {
            state.user.description = action.payload;
        },

    }
});

export const { setUserDetails, addLink, removeLink, setUsername, setUserProfileURL, setUserDescription } = dataSlice.actions;
export const dataReducer = dataSlice.reducer