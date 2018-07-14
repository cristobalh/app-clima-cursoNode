const direccion={
		alias:'d',
		desc:'Direccion d ela ciudad para obtener el clima',
		demand: true
	}
const argv=require('yargs')
	.options({direccion})
	.help()
	.argv;
module.exports=
{
	argv
	
}