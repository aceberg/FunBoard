import { Card, Column, ColumnProps, Subtask } from "./exports";

export const apiPath = 'http://0.0.0.0:8857';

// BOARD
export const apiBoardGetByID = async (id:number) => {

  const url = apiPath+'/api/board/'+id;
  const res = await (await fetch(url)).json();

  return res;
};

// CARD
export const apiCardEdit = async (card: Card) => {
  
  const res = await fetch(apiPath+'/api/card', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  });

  const result: boolean = await res.json();
  return result;
};

export const apiCardDel = async (id:number) => {

  const url = apiPath+'/api/card/del/'+id;
  const res = await (await fetch(url)).json();

  return res;
};

// Subtask
export const apiSubtaskEdit = async (subtask: Subtask) => {
  
  const res = await fetch(apiPath+'/api/subtask', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(subtask),
  });

  const result: boolean = await res.json();
  return result;
};

// COLUMN
export const apiColumnEdit = async (column: Column) => {
  
  const res = await fetch(apiPath+'/api/column', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(column),
  });

  const result: boolean = await res.json();
  return result;
};

export const apiColumnPropsEdit = async (column: ColumnProps) => {
  
  const res = await fetch(apiPath+'/api/column/props', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(column),
  });

  const result: boolean = await res.json();
  return result;
};

export const apiColumnDel = async (id:number) => {

  const url = apiPath+'/api/column/del/'+id;
  const res = await (await fetch(url)).json();

  return res;
};