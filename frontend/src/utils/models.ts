export type Card = {
    ID: number;
    Name: string;
    ColumnID: number;
    Theme: string;
    Sort: number;
    DateCreated: string;
    DateUpdated: string;
    DateMoved: string;
    Tasks: Subtask[];
};

export type Column = {
    ID: number;
    BoardID: number;
    Name: string;
    Cards: Card[];
    Fold: boolean;
    Sort: number;
    Props: ColumnProps;
};

export type Board = {
	ID:   number;
    Name: string;
    Theme: string;
    CardTheme: string;
    Columns: Column[];
};

export type BoardInfo = {
	ID:   number;
    Name: string;
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
