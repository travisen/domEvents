var body = document.body;

var position = 1;

var table = function(){

	tbl = document.createElement("table");
	var cellId = 1; 

	for (var row = 1; row <= 4; ++row) {	
		var tRow =document.createElement("tr");
		tbl.appendChild(tRow);

		for (var col = 1; col <= 4; ++col){
			if (row == 1){
				var hContent = document.createElement("th");
				hContent.textContent = "Header " + col;
				tbl.appendChild(hContent);
				hContent.style.border = "1px solid #000";
			}
			else{
				var tempVal = row; // used to correct row label
				tempVal = tempVal - 1;
				var tContent = document.createElement("td");
				tContent.textContent = col + ", " + tempVal;
				tContent.id = cellId;
				++cellId;
				tbl.appendChild(tContent);
				tContent.style.border = "1px solid #000";
			}
		}
	}
	body.appendChild(tbl);
}

var makeButton = function(buttonName) {
	var newButton = document.createElement("button");
	newButton.textContent = buttonName;
	newButton.id = buttonName;
	body.appendChild(newButton);
}

var isSelected = function(cellId){
	document.getElementById(cellId).style.border = "2px solid #000";
	
}

var unselect = function(cellId){
	document.getElementById(cellId).style.border = "1px solid #000";
}

var calcMovement = function(currentCellId, id){
	switch(id) {
		case 1: // UP
			if (position - 4 > 0) {
			position = currentCellId;
			unselect(currentCellId);
			position = position - 4;
			isSelected(position);
		}
		break;

		case 2: // DOWN
			if (position + 4 < 13) {
			position = currentCellId;
			unselect(currentCellId);
			position = position + 4;
			isSelected(position);
		}
		break;

		case 3: // LEFT
			if (position - 1 != 0 && position - 1 != 4 && position - 1 != 8){
			position = currentCellId;
			unselect(currentCellId);
			position = position - 1;
			isSelected(position)
		}
		break;

		case 4: // RIGHT
			if (position + 1 <= 12 && position + 1 != 9 && position + 1 != 5){
			position = currentCellId;
			unselect(currentCellId);
			position = position + 1;
			isSelected(position);
		}
		break;

		case 5: // MARK
		break;
	}
}

table();
// button id is same as button contents
makeButton("Up");
makeButton("Down");
makeButton("Left");
makeButton("Right");
makeButton("Mark");
//console.log(document.getElementById("Right"));
isSelected(1); // start at position 1

document.getElementById("Right").addEventListener("click", function(){
 calcMovement(position, 4);});
document.getElementById("Left").addEventListener("click", function(){
 calcMovement(position, 3);});
document.getElementById("Down").addEventListener("click", function(){
 calcMovement(position, 2);});
document.getElementById("Up").addEventListener("click", function(){
 calcMovement(position, 1);});