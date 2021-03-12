function calculateCartTotal(items, decimalPlace){
  let total = 0;
  for(let item of items){
    console.log(`[calculateCartTotal] item: ${item.name} | qty: ${item.count} , price: ${item.price}`);
    let qty = (item.count || 1);
    total += (item.price * qty);
  }
  if(total !== 0){
    total = Math.round(total * (10**decimalPlace))/100;
  }
  console.log(`[CartPage] total: £${total}`);
  return total;
}

export {calculateCartTotal};
