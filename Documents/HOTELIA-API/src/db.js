const moongose =require('moongose')

const conexionDB=async ()=>{
    const url= `mongodb+srv://${process.env.USER}:<password>@cluster0.nqswzvi.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
    try{
        const DB= await moongose.connect(url);
        console.log("conexion satisfactoria", DB.connection.name);
    } catch(error){
        console.log(error);
    }
}

module.exports = conexionDB;
