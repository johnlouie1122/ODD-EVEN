let numbers = [];

function addNumber() {

    let input = document.getElementById("numberInput");
    let number = parseInt(input.value);
    if (!isNaN(number)) {
    numbers.push(number);
    showNumbers();
    showTotalButton();
    } else {
    alert("Please enter a whole number only");
    }
}

function showNumbers() {

    let table = document.createElement("table");

    for (var i = 0; i < numbers.length; i++) {

        let row = document.createElement("tr");
        let numberCell = document.createElement("td");
        let statusCell = document.createElement("td");
        let editCell = document.createElement("td");
        let deleteCell = document.createElement("td");
        
        numberCell.innerHTML = numbers[i];
        statusCell.innerHTML = numbers[i] % 2 === 0 ? "<span style='color: green;'>Even</span>" : "<span style='color: blue;'>Odd</span>";
        editCell.innerHTML = "<button onclick='editNumber(" + i + ")'>Edit</button>";
        deleteCell.innerHTML = "<button onclick='deleteNumber(" + i + ")'>Delete</button>";
        
        row.appendChild(numberCell);
        row.appendChild(statusCell);
        row.appendChild(editCell);
        row.appendChild(deleteCell);  
        table.appendChild(row);
    }

    let list = document.getElementById("numberList");
    list.innerHTML = "";
    list.appendChild(table);
}

function clearInput() {
    let input = document.getElementById("numberInput");
    input.value = "";
}

function editNumber(index) {

    let newNumber = prompt("Enter a new number", numbers[index]);

    if (newNumber !== null && !isNaN(newNumber)) {
        numbers[index] = parseInt(newNumber);
        showNumbers();
        showTotalButton();
    } else if (newNumber !== null) {
        alert("Accepting whole numbers only!");
    }
}

function calculateTotal() {

    let total = 0;

    for (var i = 0; i < numbers.length; i++) {  
        total += numbers[i];
    }

    let totalContainer = document.getElementById("totalContainer");
    totalContainer.innerHTML = "TOTAL " + total;
}


function showTotalButton() {

    let totalButtonContainer = document.getElementById("totalButtonContainer");

    if (numbers.length > 0) {

        var totalButton = document.createElement("button");
        totalButton.innerHTML = "Get Total";
        totalButton.onclick = calculateTotal;
        totalButtonContainer.innerHTML = "";
        totalButtonContainer.appendChild(totalButton);

    } else {
        totalButtonContainer.innerHTML = "";
    }
}

function clearList() {
    numbers = [];
    showNumbers();
    document.getElementById("totalContainer").innerHTML = "";
    //console.log(clearList);
    console.log(numbers);
}