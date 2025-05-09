import { createStore } from "solid-js/store";

export interface Card {
    ID: number;
    Name: string;
    Color: string;
    Font: string;
};

export interface Column {
    ID: number;
    Name: string;
    Cards: string[];
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
            Cards: ["Card 1", "Card 2"],
            Fold: false,
        },
        {
            ID: 1,
            Name: "Projects",
            Cards: ["Card 11", "Card 12"],
            Fold: false,
        },
        {
            ID: 2,
            Name: "Now",
            Cards: ["Card 21", "Card 22"],
            Fold: false,
        },
        {
            ID: 3,
            Name: "Done",
            Cards: ["Card 31", "Card 32"],
            Fold: false,
        },
        {
            ID: 4,
            Name: "Other",
            Cards: ["Card 41", "Card 42"],
            Fold: false,
        },
    ],
}

export const [curBoard, setCurBoard] = createStore<Board>(myBoard);