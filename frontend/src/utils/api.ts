export const apiPath = 'http://0.0.0.0:8857';

export const apiGetBoardByID = async (id:string) => {

    const url = apiPath+'/api/board/'+id;
    const res = await (await fetch(url)).json();
  
    return res;
  };