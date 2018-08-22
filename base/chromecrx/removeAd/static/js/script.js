// setInterval(function(){
	removeAd();
//}, 6000);

setTimeout(function(){
	removeAd();
}, 10000);

function removeAd(){
	// console.log(document.getElementsByTagName("iframe"), 'before');
	while (document.getElementsByTagName("iframe").length > 0) {
		document.getElementsByTagName("iframe")[0].remove();
	}
	// console.log(document.getElementsByTagName("iframe"), 'end');
}