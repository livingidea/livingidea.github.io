var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/circle.png') {
		myImage.setAttribute ('src','images/circle2.png');
	} else {
		myImage.setAttribute ('src','images/circle.png')
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Пожалуйста введите имя.');
	localStorage.setItem('name','myName');
	myHeading.textContent = 'Ты хороший, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Ты хороший, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}