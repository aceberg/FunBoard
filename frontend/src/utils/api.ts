import { Card, Column, ColumnProps } from "./exports";

export const apiPath = 'http://0.0.0.0:8857';

// BOARD
export const apiBoardGetByID = async (id:number) => {

  const url = apiPath+'/api/board/'+id;
  const res = await (await fetch(url)).json();

  return res;
};

// CARD
export const apiCardEdit = async (card: Card) => {
  let data = new FormData();
  
  data.set('card', JSON.stringify(card));

  let request = new XMLHttpRequest();
  request.open("POST", apiPath+'/api/card');
  request.send(data);
};

export const apiCardDel = async (id:number) => {

  const url = apiPath+'/api/card/del/'+id;
  const res = await (await fetch(url)).json();

  return res;
};

// COLUMN
export const apiColumnEdit = async (column: Column) => {
  let data = new FormData();
  
  data.set('column', JSON.stringify(column));

  let request = new XMLHttpRequest();
  request.open("POST", apiPath+'/api/column');
  request.send(data);
};

export const apiColumnPropsEdit = async (column: ColumnProps) => {
  let data = new FormData();
  
  data.set('props', JSON.stringify(column));

  let request = new XMLHttpRequest();
  request.open("POST", apiPath+'/api/column/props');
  request.send(data);
};

export const apiColumnDel = async (id:number) => {

  const url = apiPath+'/api/column/del/'+id;
  const res = await (await fetch(url)).json();

  return res;
};