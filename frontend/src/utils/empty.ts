import { Board, Card, Column, ColumnProps } from "./models";

export const emptyBoard:Board = {
  ID: 0,
  Name: "",
  Theme: "",
  CardTheme: "",
  Columns: [],
}

export const emptyCard:Card = {
    ID: 0,
    Name: "",
    ColumnID: 0,
    Theme: "",
    Sort: 0,
    DateCreated: "",
    DateUpdated: "",
    DateMoved: "",
    Tasks: []
};

export const emptyColumn:Column = {
    ID: 0,
    BoardID: 0,
    Name: "",
    Cards: [],
    Fold: false,
    Sort: 0,
    Props: {} as ColumnProps,
}