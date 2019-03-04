const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let DogModel = {};

const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, //remove traling/leading whitespace
        unique: true,
    },

    breed: {
        type: String,
        required: true,
        trim: true, //remove traling/leading whitespace
        unique: false,
    },

    age: {
        type: Number,
        min: 0,
        required: true,
    },

    createdDate: {
        type: Date,
        default: Date.now, //automatically stores system date at created time
    },
});

DogSchema.statics.sayName = (dog) => {
    console.log(dog.name);
};

DogSchema.statics.findByName = (name, callback) => {
    const search = {
      name,  
    };

    return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('Dog', DogSchema);

module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;