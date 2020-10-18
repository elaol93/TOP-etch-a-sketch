createGrid(16);
changeColor(16);


function createGrid (numberFields) {
    //create grid
    document.querySelector('.container').style.gridTemplateRows = `repeat(${numberFields}, 1fr)`;
    document.querySelector('.container').style.gridTemplateColumns = `repeat(${numberFields}, 1fr)`;

    //create grid items and place them in the grid
    for (let row = 1; row < numberFields + 1; row++) {
        for (let column = 1; column < numberFields + 1; column++) {
            //add to .container
            let newDiv = document.createElement('div');
            newDiv.classList.add('gridPart');
            document.querySelector('.container').appendChild(newDiv);
    
            //position the element in the grid
            newDiv.style.gridArea = `${row} ${column} ${row + 1} ${column + 1}`;
            
        }
    }
}

function customFields () {
    //asks for input and creates that many fields
    let customFields = prompt("How many fields per side would you like (max. 100)?");
    customFields = Math.round(customFields); //in case the input is float
    customFields = parseInt(customFields);

    if (isNaN(customFields)) {
        alert('Please enter a number!');
        return;
    }

    if (customFields > 100) {
        customFields = 100
        alert("Limit reached. Setting the number of fields to 100.")
    }

    //deletes all fields
    let existingFields = document.querySelectorAll('.gridPart');

    for (let i= 0; i < existingFields.length; i++) {
        existingFields[i].remove();
    }

    createGrid(customFields);
    changeColor(customFields);
}

function changeColor() {
    //changes the color of the field on hover
    let allFields = document.querySelectorAll('.gridPart');

    for (let i = 0; i < allFields.length; i++) {
        allFields[i].addEventListener('mouseover', function () {
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            allFields[i].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        })
    }

    //only white
    // for (let i = 0; i < allFields.length; i++) {
    //     allFields[i].addEventListener('mouseover', function () {
    //         allFields[i].style.backgroundColor = 'rgba(255, 255, 255, 1)';
    //     })
    // }
}
