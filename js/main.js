var nameInput = document.getElementById("ProductName")
var priceInput = document.getElementById("ProductPrice")
var categoryInput = document.getElementById("ProductCategory")
var desInput = document.getElementById("productDescraption")
var serachInput = document.getElementById("serachInput")
var imgInput = document.getElementById("ProductImage")
var saleInput = document.getElementById("productSale")
var addButton = document.getElementById("addButton")
var updateButton = document.getElementById("updateButton")

var productList = []
if (JSON.parse(localStorage.getItem("dataList")) != null) {
  productList = JSON.parse(localStorage.getItem("dataList"))
  disPlay()
}



function addProduct() {
  var product = {
    name: nameInput.value,
    price: priceInput.value,
    category: categoryInput.value,
    des: desInput.value,
    imgsrc: imgInput.files[0]?.name,
    sale: saleInput.checked
  }

  productList.push(product)

  localStorage.setItem("dataList", JSON.stringify(productList))


  disPlay()
}







function disPlay() {

  var temp = ''

  for (i = 0; i < productList.length; i++) {

    temp += `  <div class="col-md-3 ">
    <div class="item border border-3 text-center pb-3">
 <img src="imgs/` + productList[i].imgsrc + `" class="w-100" alt="">
  <h5>index : ` + i + `</h5>
  <h5>Name : ` + productList[i].name + `</h5>
  <h5>Price : ` + productList[i].price + `</h5>
  <h5>Category : ` + productList[i].category + `</h5>
  <p>` + productList[i].des + `</p>
  <p>Sale :` + productList[i].sale + `</p>
  <button onclick = "setFormForUpdate(`+ i + `)" class="btn btn-outline-warning">Update</button>
  <button onclick = "deleteProduct(`+ i + `)" class="btn btn-outline-danger">Delete </button>
    </div>
  </div>`
  }

  document.getElementById("myRow").innerHTML = temp


}





function deleteProduct(x) {

  productList.splice(x, 1)
  disPlay()

  localStorage.setItem("dataList", JSON.stringify(productList))

}



function serachProduct() {

  var searchValue = serachInput.value.toLowerCase()
  var temp = ''
  for (var i = 0; i < productList.length; i++) {

    if (productList[i].name.toLowerCase().includes(searchValue) == true) {

      temp += `  <div class="col-md-3 ">
    <div class="item border border-3 text-center pb-3">
 <img src="imgs/` + productList[i].imgsrc + `" class="w-100" alt="">
  <h5>index : ` + i + `</h5>
  <h5>Name : ` + productList[i].name + `</h5>
  <h5>Price : ` + productList[i].price + `</h5>
  <h5>Category : ` + productList[i].category + `</h5>
  <p>` + productList[i].des + `</p>
  <p>Sale :` + productList[i].sale + `</p>
  <button onclick = "setFormForUpdate(`+ i + `)" class="btn btn-outline-warning">Update</button>
  <button onclick = "deleteProduct(`+ i + `)" class="btn btn-outline-danger">Delete </button>
    </div>
  </div>`

    }



  }

  document.getElementById("myRow").innerHTML = temp

  console.log(temp);

}

var index;
function setFormForUpdate(i) {

  index = i

  addButton.classList.add("d-none")
  updateButton.classList.remove("d-none")
  nameInput.value = productList[i].name
  priceInput.value = productList[i].price
  categoryInput.value = productList[i].category
  desInput.value = productList[i].des
  saleInput.value = productList[i].sale
  nameInput.value = productList[i].name


}




function updateProduct() {
  addButton.classList.remove("d-none")
  updateButton.classList.add("d-none")
  productList[index].name = nameInput.value
  productList[index].price = priceInput.value
  productList[index].category = categoryInput.value
  productList[index].des = desInput.value



  disPlay()
  localStorage.setItem("dataList", JSON.stringify(productList))
  clearForm()


}


function clearForm() {
  nameInput.value = null;
  priceInput.value = null;
  categoryInput.value = null;
  desInput.value = null;
 
    saleInput.checked = fales;

}













































// `  <div class="col-md-3 ">
//     <div class="item border border-3 text-center pb-3">
//  <img src="imgs/` + productList[i].imgsrc + `" class="w-100" alt="">
//   <h5>index : ` + i + `</h5>
//   <h5>Name : ` + productList[i].name + `</h5>
//   <h5>Price : ` + productList[i].price + `</h5>
//   <h5>Category : ` + productList[i].category + `</h5>
//   <p>` + productList[i].des + `</p>
//   <p>Sale :` + productList[i].sale + `</p>
//   <button class="btn btn-outline-warning">Update</button>
//   <button onclick = "deleteProduct(`+ i + `)" class="btn btn-outline-danger">Delete </button>
//     </div>
//   </div>`