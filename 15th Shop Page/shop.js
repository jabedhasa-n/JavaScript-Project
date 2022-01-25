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

  console.log(nameProduct + price + sale_price + photo)  
  let product_arr;

  if(dataGet('products')){
    product_arr=dataGet('product');
  }

  else{
    product_arr=[]
  }

  product_arr.push({
    name:name,
    price:price,
    sale:sale,
    photo:photo

  })

  console.log(product_arr);


});


let products=dataGet('products');


products.map( data =>{
  plist.innerHTML+=`
  <div class="col-md-4 my-3">
          <div class="card">
            <img class="card-img" src="https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png" alt="">
            <div class="card-body">
              <h3>Product Name</h3>
              <p><span class="regular-price">$200</span><span class="sale-price">$200</span></p>
              <br>
              <button class="btn btn-success">Add to cart</button>
            </div>
          </div>
        </div>
  `
})