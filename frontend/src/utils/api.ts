import { Board, Card, Column, ColumnProps, Subtask } from "./models";

export const apiPath = 'http://0.0.0.0:8857';

// LOGIN
export const apiLogin = async (username: string, password: string) => {
  
  const res = await fetch(apiPath+'/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({username, password}),
  });

  const result: boolean = await res.json();
  return result;
};

// THEME
// export const apiThemeGet = async (path: string, name: string) => {

//   const url = apiPath+'/theme/'+path+'/'+name;
//   const res = await (await fetch(url)).json();

//   return res;
// };

// BOARD
export const apiBoardGetByID = async (id:string) => {

  const url = apiPath+'/api/board/'+id;
  const res = await (await fetch(url)).json();

  return res;
};

export const apiBoardGetAll = async () => {

  const url = apiPath+'/api/boards';
  const res = await (await fetch(url)).json();

  return res;
};

export const apiBoardEdit = async (board: Board) => {
  
  const res = await fetch(apiPath+'/api/board', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(board),
  });

  const result: boolean = await res.json();
  return result;
};

// CARD
export const apiCardGetByID = async (id:number) => {

  const url = apiPath+'/api/card/'+id;
  const res = await (await fetch(url)).json();

  return res;
};

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

// SUBTASK
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

export const apiSubtaskDel = async (id:number) => {

  const url = apiPath+'/api/subtask/del/'+id;
  const res = await (await fetch(url)).json();

  return res;
};

// COLUMN
// export const apiColumnGetByID = async (id:number) => {

//   const url = apiPath+'/api/column/'+id;
//   const res = await (await fetch(url)).json();

//   return res;
// };

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