const axios=require('axios');


const getClima= async (lat,lng)=>
{
	
	//let encodeURL = encodeURI(direccion);
	let resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=01cd37ed98ed2aa7c7ee67e368ac4e3d&units=metric`);
	return resp.data.main.temp;
	
	
}


module.exports=
{
	getClima
	
}

