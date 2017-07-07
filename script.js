
const secondHand=document.querySelector('.second-hand')
const minHand=document.querySelector('.min-hand')
const hourHand=document.querySelector('.hour-hand')
function sdate() {
	// console.log('Hi you :3')

	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();
	const secondsDeg=((seconds/60) * 360)+ 90;
	const minutesDeg=((minutes/60) * 360)+ 90;
	const hoursDeg=((hours/12))+90;

	// console.log(hours);
	// console.log(minutes);
	// console.log(seconds);
	secondHand.style.transform=`rotate(${secondsDeg}deg)`;
	minHand.style.transform=`rotate(${minutesDeg}deg)`;
	hourHand.style.transform=`rotate(${hoursDeg}deg)`;
}


setInterval(sdate, 1000)//message chaque  1 sc