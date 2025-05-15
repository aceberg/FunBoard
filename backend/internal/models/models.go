package models

// Conf - web gui config
type Conf struct {
	Host     string `json:"Host"`
	Port     string `json:"Port"`
	DirPath  string `json:"DirPath"`
	ConfPath string `json:"ConfPath"`
	DBPath   string `json:"DBPath"`
}

// Board - one board
type Board struct {
	ID      uint     `json:"ID" gorm:"primaryKey"`
	Name    string   `json:"Name"`
	Columns []Column `json:"Columns" gorm:"foreignKey:BoardID"`
}

// BoardInfo - only IDs and Names of Boards
type BoardInfo struct {
	ID   uint   `json:"ID"`
	Name string `json:"Name"`
}

// Column - one column of the Board
type Column struct {
	ID      uint        `json:"ID" gorm:"primaryKey"`
	Name    string      `json:"Name"`
	Fold    bool        `json:"Fold"`
	BoardID uint        `json:"BoardID"`
	Cards   []Card      `json:"Cards" gorm:"foreignKey:ColumnID"`
	Sort    uint        `json:"Sort"`
	Props   ColumnProps `json:"Props" gorm:"foreignKey:ColumnID"`
}

// ColumnProps - settings for cards in Column
type ColumnProps struct {
	ID          uint `json:"ID" gorm:"primaryKey"`
	ColumnID    uint `json:"ColumnID"`
	GroupByDate bool `json:"GroupByDate"`
	ShowID      bool `json:"ShowID"`
	ShowDateCr  bool `json:"ShowDateCr"`
	ShowDateMv  bool `json:"ShowDateMv"`
}

// Card - one card
type Card struct {
	ID          uint   `json:"ID" gorm:"primaryKey"`
	Name        string `json:"Name"`
	ColumnID    uint   `json:"ColumnID"`
	Theme       string `json:"Theme"`
	Sort        uint   `json:"Sort"`
	DateCreated string `json:"DateCreated"`
	DateMoved   string `json:"DateMoved"`
}
