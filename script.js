
var makeTable = function(){

	var body = document.body;
	tbl = document.createElement("table");

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
				tbl.appendChild(tContent);
				tContent.style.border = "1px solid #000";
			}
		}
	}
	tbl.style.border = "1px solid #000"
	body.appendChild(tbl);
}

makeTable();
