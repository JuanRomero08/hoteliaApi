const {Schema, model} = require("moongose");

const userSchema = new Schema({
    _id: Number,
    tipodoc: Number,
    nombre: String,
    apellido: String,
    fnacimiento: Date,
    genero: String,

    email: [{
            type: String,
            unique: true,
            required: true
        }],

    telefono: Number,
    paisorigen: String,
    password: String,
    tipouser: String,
    img: String,

    reservas:[{
        type: Schema.Types.ObjectId,
        ref: 'Reservas'
    }]
})


module.exports=model("User", userSchema);