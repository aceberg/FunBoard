import { Card } from "./exports";

export const apiPath = 'http://0.0.0.0:8857';

export const apiBoardGetByID = async (id:number) => {

  const url = apiPath+'/api/board/'+id;
  const res = await (await fetch(url)).json();

  return res;
};

export const apiCardEdit = async (card: Card) => {
  let data = new FormData();
  
  data.set('card', JSON.stringify(card));

  let request = new XMLHttpRequest();
  request.open("POST", apiPath+'/api/card', true);
  request.send(data);
};