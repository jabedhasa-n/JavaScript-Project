const addproduct=document.getElementById('add-product');
const productbox=document.querySelector('.product-add-box');
const closeBtn=document.getElementById('sess');
const plist=document.getElementById('plist');
const product=document.getElementById('product');

addproduct.addEventListener('click',function(){
  productbox.style.display='block';

});


closeBtn.addEventListener('click',function(){
  productbox.style.display='none';
});

product.addEventListener('submit',function(e){
  e.preventDefault();

  let nameProduct=this.querySelector('input[name="name"]').value;
  let price=this.querySelector('input[name="price"]').value;
  let sale_price=this.querySelector('input[name="sale_price"]').value;
  let photo=this.querySelector('input[name="photo"]').value;

  // console.log(nameProduct + price + sale_price + photo)  

  /**
   * create an arry to keep data from local storage
   */
  let product_arr;

  if(dataGet('products')){
    product_arr=dataGet('products');
  }

  else{
    product_arr=[]
  }

  product_arr.push({
    name  :nameProduct,
    price :price,
    sale  :sale_price,
    photo :photo

  });

  console.log(product_arr);

  datasend('products',product_arr)

  allProduct();
});

allProduct();
function allProduct(){

  let all_products=dataGet('products');
  let alldata='';
  all_products.map( data =>{
    alldata+=`
    <div class="col-md-4 my-3">
            <div class="card">
              <img class="card-img" src="${data.photo}" alt="">
              <div class="card-body">
                <h3>${data.name}</h3>
                <p><span class="regular-price">${data.price}</span><span class="sale-price">${data.sale}</span></p>
                <br>
                <button class="btn btn-success">Add to cart</button>
              </div>
            </div>
          </div>
    `
  })

  plist.innerHTML=alldata;
} 
