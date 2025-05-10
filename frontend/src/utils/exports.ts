import { createStore } from "solid-js/store";
import { apiBoardGetByID } from "./api";

export interface Card {
    ID: number;
    Name: string;
    ColumnID: number;
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

export const [curBoard, setCurBoard] = createStore<Board>(await apiBoardGetByID(1));