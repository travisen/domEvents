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
	var on = true;
	if (on == true){
		document.getElementById(cellId).style.border = "2px solid #000";
	}
}

var unselect = function(cellId){
	document.getElementById(cellId).style.border = "1px solid #000";
}

var calcMovement = function(currentCellId){
	position = currentCellId;
	unselect(currentCellId);
	position = position + 1;
	isSelected(position);
}

table();
// button id is same as button contents
makeButton("Up");
makeButton("Down");
makeButton("Left");
makeButton("Right");
makeButton("Mark");

isSelected(1); // start at position 1
//unselect(1);
document.getElementById("Right").addEventListener("click", function(){
 calcMovement(position);});