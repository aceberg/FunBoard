import { createStore } from "solid-js/store";
import { Board, Card, ColumnProps, Subtask } from "./models";
import { apiBoardGetByID, apiCardDel, apiCardEdit, apiCardGetByID, apiColumnPropsEdit, apiSubtaskDel, apiSubtaskEdit } from "./api";
import { emptyBoard } from "./empty";

export const [curBoard, setCurBoard] = createStore<Board>(emptyBoard);

export async function updateColumnProps(colProps: ColumnProps) {
    
  setCurBoard(
    "Columns",
    col => col.ID === colProps.ColumnID,
    "Props",
    props => ({ ...props, ...colProps })
  );

  await apiColumnPropsEdit(colProps);
}

export async function updateCard(card: Card) {
    
  setCurBoard(
    "Columns",
    col => col.ID === card.ColumnID,
    "Cards",
    c => c.ID === card.ID,
    c => ({ ...c, ...card })
  );

  await apiCardEdit(card);
  
  if (card.ID === 0) {
    setCurBoard(await apiBoardGetByID(curBoard.ID.toString()));
  }
}

export async function deleteCard(card: Card) {
  
  await apiCardDel(card.ID);
  setCurBoard(await apiBoardGetByID(curBoard.ID.toString()));
}

export async function updateSubtask(colID: number, task: Subtask) {
    
  await apiSubtaskEdit(task);
  
  const card = await apiCardGetByID(task.CardID);

  setCurBoard(
    "Columns",
    col => col.ID === colID,
    "Cards",
    c => c.ID === task.CardID,
    "Tasks", {...card.Tasks}
  );
}

export async function deleteSubtask(colID: number, task: Subtask) {
  
  setCurBoard(
    "Columns",
    col => col.ID === colID,
    "Cards",
    c => c.ID === task.CardID,
    "Tasks",
    tasks => tasks.filter(t => t.ID !== task.ID)
  );

  await apiSubtaskDel(task.ID);
}