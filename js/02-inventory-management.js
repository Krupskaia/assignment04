/*eslint-env browser*/

function display_menu() {
    "use strict";
    window.console.log("Welcome to the Inventory Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all product");
    window.console.log("update - Update stock");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function getlocalitem(inventory) {
    "use strict";
    if (localStorage.getItem("sku") !== null) {
        var itemNum = parseInt(localStorage.getItem("sku"), 10);
//        window.console.log("itemNum " + itemNum);
        var itemQty = parseInt(localStorage.getItem("qty"), 10);
//        window.console.log("itemQty " + itemQty);
        var i, itemArray = [], position;
        for (i = 0; i < inventory.length; i += 1) {
            itemArray = inventory[i];
//            window.console.log(itemArray);
            var index = itemArray.indexOf(itemNum);
//            window.console.log(index);
            if (index > -1) {
                position = i;
                break;
            }
        }
        inventory[position][2] = "(" + itemQty + ")";
    }
}

function view(inventory) {
    "use strict";
    getlocalitem(inventory);
    var i = 1;
    inventory.sort();
    for (i = 0; i < inventory.length; i += 1) {
        var srtinventory = inventory[i].join(" ");
        window.console.log(srtinventory);
    }
    window.console.log("");
}

function update(inventory) {
    "use strict";
    var itemNum = parseInt(window.prompt("Enter the sku's number"), 10);
    var itemQty = window.prompt("Enter a new stock quantity");
    var position, i, itemArray = [];
    for (i = 0; i < inventory.length; i += 1) {
        itemArray = inventory[i];
//      window.console.log(itemArray);
        var index = itemArray.indexOf(itemNum);
//      window.console.log(index);
        if (index > -1) {
            position = i;
            break;
        } 
    }
    if (position > -1) {
//    window.console.log(position);
    inventory[position][2] = "(" + itemQty + ")";
     localStorage.setItem("localInventory", JSON.stringify(inventory));
    //save new inventory to localstorage
    localStorage.setItem("sku", itemNum);
    localStorage.setItem("qty", itemQty);
    view(inventory);
    } else {
         window.console.log("Sku not founded");
    }
}


function main() {
    "use strict";
    var command;
    var inventory = [];
    
    if (localStorage.getItem("localInventory") === null) {

    var product1 = [2233, "Hat", "(12)", "$14.99"];
    var product2 = [3223, "Socks", "(36)", "$9.99"];
    var product3 = [4824, "Shirt", "(10)", "$15.99"];
    var product4 = [6343, "Jeans", "(22)", "$39.99"];
    var product5 = [9382, "Jacket", "(5)", "$49.99"];
    
    inventory[0] = product1;
    inventory[1] = product2;
    inventory[2] = product3;
    inventory[3] = product4;
    inventory[4] = product5;
    
    localStorage.setItem("localInventory", JSON.stringify(inventory));
    
    } else {
        inventory = JSON.parse(localStorage.getItem("localInventory"));
//        window.console.log(inventory);
    }
    
    display_menu();
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                view(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();






