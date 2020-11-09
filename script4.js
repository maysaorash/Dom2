
document.querySelector('#add_item').onclick = function () {
  
    // Grab the todo item value
    let inputBox = document.querySelector('#input_box');
    
    // Chck if its not empty
    
    if(inputBox.value){
      
      // Create a li item for ul element (<li></li>)
      let listItem = document.createElement('li');
      
      // Add todo item value in between li tags (<li>asjkdfhakh</li>)
      listItem.innerHTML = inputBox.value;
      
      // Add created li item to the ul element
      document.querySelector('#ul_list').appendChild(listItem);
      
      // Empty the input box after creating list item
      inputBox.value = "";
    }
    
  }