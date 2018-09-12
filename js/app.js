let styles = `
	height: 300px;
	width: 300px;
	text-align: center;
	margin: auto;
	padding: auto;
`
let nameStyle = `
	font-size: 5em;
	padding: 30px 0px 30px 0px;
	margin: 0;
`

let sideBar = document.querySelector('.sideBar');
let newCat = document.getElementById('moveCat')
let name = document.getElementById('name')
let count =0

// listening to the clicks on the side bar
sideBar.addEventListener('click', sideBarFun, false);

function sideBarFun(e){
	var clickedTarget = e.target.id;
	

	if (clickedTarget == 'kumar') {
		clearBox('moveCat')
		var catName =  name.innerHTML = 'Kumar'
		catName.style = nameStyle
    	var myImage = new Image(100, 200);
		myImage.src = 'https://i.imgur.com/etBcYI5.jpg';
		newCat.appendChild(myImage).style = styles;

		console.log('kumar')
	}
	if (clickedTarget == 'harold') {
		clearBox('moveCat')
		var catName =  name.innerHTML = 'harold'
		catName.style = nameStyle
		var myImage = new Image(100, 200);
		myImage.src = 'https://i.imgur.com/U0rgzNs.jpg';
		newCat.appendChild(myImage).style = styles;

		console.log('jessica')
	}
	if (clickedTarget == 'jessica') {
		clearBox('moveCat')
		var catName =  name.innerHTML = 'jessica'
		catName.style = nameStyle
		var myImage = new Image(100, 200);
		myImage.src = 'https://i.imgur.com/9iuEDuI.jpg';
		newCat.appendChild(myImage).style = styles;		

		console.log('jessica')
	}
	if (clickedTarget == 'blue') {
		clearBox('moveCat')
		var catName =  name.innerHTML = 'blue'
		catName.style = nameStyle
		var myImage = new Image(100, 200);
		myImage.src = 'https://i.imgur.com/plvMABX.jpg';
		newCat.appendChild(myImage).style = styles;					

		console.log('blue')
	}
	if (clickedTarget == 'albino') {
		clearBox('moveCat')
		var catName =  name.innerHTML = 'albino'
		catName.style = nameStyle
		var myImage = new Image(100, 200);
		myImage.src = 'https://i.imgur.com/Pi3zv7u.jpg';
		newCat.appendChild(myImage).style = styles;					

		console.log('albino')
	}
	e.stopPropagation();
}

//here is to clear the div of moveCat 
function clearBox(elementID)
{
	if (true) {
    	document.getElementById(elementID).innerHTML = "";
    	reset = []
    } if(false){
    	console.log('nothing')
    }
}


// this is to count the clicks 
moveCat.onclick = function(e){
	var catCounter = document.getElementById("clickme")
	  count += 1;
  	catCounter.innerHTML = 'you clicked the cats ' + count + ' times';
	console.log('add')
}



