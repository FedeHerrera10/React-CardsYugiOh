export const getCards = async (name,type,level)=>{
  const url = getBuildUrlAPI(name,level,type);
  try{
    const response = await fetch(url);
    const result = await response.json();
    if(result.error){
      return result
    }
    const data = result.data;
    return data;
  }
  catch(error){
    return [];
  }
}



const getBuildUrlAPI = (name,level,type) => {
  let URL = `${import.meta.env.VITE_URL}?num=30&offset=0&fname=${name}`;

  if(level){
    URL=URL+`&level=${level}`;
  }

  if(type){
    URL=URL+`&type=${type}`
  }

  return URL;
}

export const getBuildUrl = (name,level,type) => {
  let URL = `/cards?name=${name}`;

  if(level !==''){
    URL=URL+`&level=${level}`;
  }

  if(type!==''){
    URL=URL+`&type=${type}`
  }

  return URL;
}

