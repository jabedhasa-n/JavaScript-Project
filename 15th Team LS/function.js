
/**
 * Data send to Ls
 * @param {*} key 
 * @param {*} arr 
 */
function datasend(key,arr){
    let data=JSON.stringify(arr);
    localStorage.setItem(key,data)
}

/**
 * Data get from LS
 * @param {*} key 
 * @returns 
 */
function dataGet(key){
    let data=localStorage.getItem(key);
    return JSON.parse(data);
}