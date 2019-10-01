// jQuery v3.3.1 is supported

var board = document.getElementById("board");

for(let i=1;i<21;i++){
	let row = document.createElement("div"),
			rowClassName = "row"+i;
	row.setAttribute("class",rowClassName);
	for(let j=1;j<21;j++){
		let rowChild = document.createElement("div"),
			pixelLabel = document.createElement("LABEL"),
			pixelInput = document.createElement("INPUT"),
				
				divClass = "pixel "+"pixel"+j,
				labelName = "pixel",
				labelFor = "pixel"+((i-1)*20+j),
				inputId = "pixel"+((i-1)*20+j);
			rowChild.setAttribute("class",divClass);
			pixelLabel.setAttribute("class","pixel-label");
			pixelLabel.setAttribute("for",labelFor);
			pixelInput.setAttribute("type","checkbox");
			pixelInput.setAttribute("name",labelName);
			pixelInput.setAttribute("id",inputId);
		row.insertAdjacentElement("afterbegin",rowChild);
		rowChild.insertAdjacentElement("afterbegin",pixelLabel);
		rowChild.insertAdjacentElement("afterbegin",pixelInput);
	}
	board.insertAdjacentElement("beforeend",row)
}

let startChecked = () => {
	let checkArray=[207,208,209,210,211,212,213,214
								 ,194,193,191,190,188,187,
								 168,169,170,171,172,173,
								 149,150,151,152,
								 130,131,
								 229,232,
								 248,250,251,253,
								 267,269,272,274]
	checkArray.forEach(item=>{
		let nodeId = 'pixel'+item,
				node = document.getElementById(nodeId);
		node.setAttribute("checked","checked")
	})
}
startChecked()
