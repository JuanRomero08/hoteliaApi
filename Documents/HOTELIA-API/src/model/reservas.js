const {Schema, model} = require("moongose");

const reservaSchema = new Schema({
    frentrada: Date,
    fsalida: Date,
    cantidadNoches: Number,
    freserva: Date,
    totalReserva: Number,

    user:[{
        type:Schema.Types.Number,
        ref: 'User'
    }],

    habitaciones:[{
        type:Schema.Types.Number,
        ref: 'Habitacion'
    }]
})


module.exports=model("Reservas", reservaSchema);