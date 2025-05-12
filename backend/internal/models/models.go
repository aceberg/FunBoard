package models

// Conf - web gui config
type Conf struct {
	Host     string
	Port     string
	DirPath  string
	ConfPath string
	DBPath   string
}

// Board - one board
type Board struct {
	ID      uint `gorm:"primaryKey"`
	Name    string
	Columns []Column `gorm:"foreignKey:BoardID"`
}

// Column - one column of the Board
type Column struct {
	ID      uint `gorm:"primaryKey"`
	Name    string
	Fold    bool
	BoardID uint
	Cards   []Card `gorm:"foreignKey:ColumnID"`
}

// Card - one card
type Card struct {
	ID          uint `gorm:"primaryKey"`
	Name        string
	ColumnID    uint
	Theme       string
	Sort        uint
	DateCreated string
	DateUpdated string
	DateMoved   string
}
