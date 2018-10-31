// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...haha: any[]) {
	console.log(haha);
}

printParams(1, 'haha', false, 2);