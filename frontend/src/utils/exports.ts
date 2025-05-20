import { createStore } from "solid-js/store";

export type Card = {
    ID: number;
    Name: string;
    ColumnID: number;
    Theme: string;
    Sort: number;
    DateCreated: string;
    DateUpdated: string;
    DateMoved: string;
};

export const emptyCard:Card = {
    ID: 0,
    Name: "",
    ColumnID: 0,
    Theme: "",
    Sort: 0,
    DateCreated: "",
    DateUpdated: "",
    DateMoved: "",
};

export type Column = {
    ID: number;
    Name: string;
    Cards: Card[];
    Fold: boolean;
};

export type Board = {
	ID:   number;
    Name: string;
    Columns: Column[];
};

export type ColumnProps = {
	ID:          number;
	ColumnID:    number;
	GroupByDate: boolean;
	ShowID:      boolean;
	ShowDateCr:  boolean;
	ShowDateMv:  boolean;
    ShowSubtasks: boolean;
}

export type Subtask = {
    ID: number;
    CardID: number;
    Name: string;
    Checked: boolean;
}

const emptyBoard:Board = {
    ID: 0,
    Name: "",
    Columns: [],
}

export const [curBoard, setCurBoard] = createStore<Board>(emptyBoard);
