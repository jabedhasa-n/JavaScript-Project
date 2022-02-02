function dataSend(key,value){
    let data=JSON.stringify(value);
    localStorage.setItem(key,data)
  }



  function dataGet(key){
    let data=localStorage.getItem(key)
    JSON.parse(data)
  }
  