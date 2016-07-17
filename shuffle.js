function shuffle(array){
	for(var i = array.length-1; i > 0; i--) {
		var random = Math.floor(Math.random() * (array.length-1));
		var temp = array[random];
		array[random] = array[i];
		array[i] = temp;
	}
	return array;
}
