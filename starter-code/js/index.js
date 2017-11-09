function deleteItem(e){
}
function getPriceByProduct(itemNode){
}
function updatePriceByProduct(productPrice, index){
}
function getTotalPrice() {
  var quantity = document.getElementsByTagName('input')[0].value;
  var productCost = document.getElementsByClassName('product-cost')[0].innerHTML;
  var totalPrice = quantity*productCost;
  document.getElementsByClassName('total-price')[0].innerHTML = totalPrice;
}
function createQuantityInput(){
}
function createDeleteButton(){
}
function createQuantityNode(){
}
function createItemNode(dataType, itemData){
}
function createNewItemRow(itemName, itemUnitPrice){
}
function createNewItem(){
}
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
