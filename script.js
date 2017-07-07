function sdate() {
	// console.log('Hi you :3')

	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();
	console.log(hours);
	console.log(minutes);
	console.log(seconds);
	

}

setInterval(sdate, 1000)//message chaque  1 sc