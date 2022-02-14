const all_product=document.querySelector('.all_product');
fetch('https://fakestoreapi.com/products').then (data=>data.json()).then( data =>{
let lists;
data.map(list=>{
    lists+=`
    <div class="col-md-3 my-3">
        <div class="card">
         <a onclick="singleproductid(${list.id})" data-bs-toggle="modal" data-bs-target="#product" href="#"> <img src="${list.image}" alt=""></a>
          <div class="card-body">
            <h2>${list.title}</h2>
            <p>$${list.price}</p>
          </div>
        </div>
      </div>
    `
});
all_product.innerHTML=lists;
});


function singleproductid(id){
    const modal_product=document.querySelector('.modal_product');
    fetch('https://fakestoreapi.com/products/'+id).then (datas=>datas.json()).then( datas=>{

        modal_product.innerHTML='';
        let product;
        product=`
        
        <div class="w-50"><img class="w-100 h-100 border-2 shadow" src="${datas.image}" alt="">
        </div>
        <div class="m-lg-2 w-50">
          <h2>${datas.title}</h2>
          <p>${datas.description}</p>
          <h5>$${datas.price}</h5>
          <h5>${datas.category}</h5>
          <button class="btn btn-info btn-lg">Add Cart</button>
        </div>   
        
        `
        modal_product.innerHTML=product;
        // console.log(datas);
    })

}




