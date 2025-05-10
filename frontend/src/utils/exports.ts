import { createStore } from "solid-js/store";
import { apiGetBoardByID } from "./api";

export interface Card {
    ID: number;
    Name: string;
    // Color: string;
    // Font: string;
};

export interface Column {
    ID: number;
    Name: string;
    Cards: Card[];
    Fold: boolean;
};

export interface Board {
	ID:   number;
    Name: string;
    Columns: Column[];
};

export const myBoard:Board = {
    ID: 1,
    Name: "My temp board",
    Columns: [
        {
            ID: 0,
            Name: "Backlog",
            Cards: [],
            Fold: false,
        },
        {
            ID: 1,
            Name: "Projects",
            Cards: [],
            Fold: false,
        },
        {
            ID: 2,
            Name: "Now",
            Cards: [],
            Fold: false,
        },
        {
            ID: 3,
            Name: "Done",
            Cards: [],
            Fold: false,
        },
        {
            ID: 4,
            Name: "Other",
            Cards: [],
            Fold: false,
        },
    ],
}

export const [curBoard, setCurBoard] = createStore<Board>(await apiGetBoardByID("1"));