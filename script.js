// your code here
const form= document.getElementById("form");
const url= document.getElementById("url");
form.addEventListener("submit", (e)=>{
	e.preventDefault();
	const name= form.name.value;
	const year= form.year.value;

	if(name && year){
		url.innerHTML="";
		url.innerHTML= `https://localhost:8080/?name=${name}&year=${year}`
	}
	else if(name){
		url.innerHTML="";
		url.innerHTML= `https://localhost:8080/?name=${name}`
	}
	else if(year){
		url.innerHTML="";
		url.innerHTML= `https://localhost:8080/?year=${year}`
	}
	console.log('submitted',name,year)
})