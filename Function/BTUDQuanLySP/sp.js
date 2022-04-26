let products = [
    "Sony Xperia",
    "Samsung Galaxy",
    "Nokia 6",
    "Xiaomi Redmi Note 4"
]
const key_enter = 13;
let count = 0;

function renderProduct() {
    let tableProducts = document.querySelector('.table>tbody');
    let htmls = products.map(function (product, index) {
        return `
            <tr>
                <td>${product}</td>
                <td><button class="btn" onclick="editProduct(${index})">Edit</button></td>
                <td><button class="btn" onclick="deleteProduct(${index})">Delete</button></td>
            </tr>
            `
    })
    tableProducts.innerHTML = htmls.join("");
}
renderProduct();
function clearInput() {
    document.querySelector("#namePro").value = "";
}

function addProduct() {
    let productName = document.querySelector("#namePro").value;
    if (productName != null && productName.trim() != "") {
        products.push(productName);
        renderProduct();
        clearInput();
        countProduct();
    } else {
        alert('Please enter the product name!');
        document.querySelector("#namePro").focus()
    }
}
function pressEnter(e) {
    if (e.keyCode == key_enter) {
        addProduct();
    }
}

function deleteProduct(index) {
    let confirmed = window.confirm(`Are you sure to want to delete ${products[index]}?`);
    if (confirmed) {
    products.splice(index, 1);
    renderProduct();
    }   
}

function editProduct(index) {
    document.querySelector('#editProduct').classList.remove('d-none');
    document.querySelector('#new_ProductName').value = products[index];
    document.querySelector('#btnUpdate').onclick = function () {
        let new_Productname = document.querySelector('#new_ProductName').value;
        if (new_Productname != null && new_Productname.trim() != "") {
            products[index] = new_Productname;
            renderProduct();
            clearEdit();
        }
        else {
            alert("Enter product name to edit!")
            document.querySelector("#new_ProductName").focus();
        }
    }
}
function clearEdit() {
    document.querySelector('#editProduct').classList.add('d-none');
}

function countProduct() {
count = products.length;
document.querySelector('#countProduct').innerHTML = `${count} products`;
}
countProduct();
function ascending() {
    products.sort();
    renderProduct();
}
function descending() {
    products.reverse();
    renderProduct();
}