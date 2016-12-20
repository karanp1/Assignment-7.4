function outerFunction(someArg){
	var x = "Hello World";
	var y = " from Inner Function";
	var z = someArg(x,y);
	console.log(z)
}



outerFunction(function innerFunction(a,b){
	return a + b
})

