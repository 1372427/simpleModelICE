const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let CatModel = {};

const CatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, //remove traling/leading whitespace
        unique: true,
    },

    bedsOwned: {
        type: Number,
        min: 0,
        required: true,
    },

    createdDate: {
        type: Date,
        default: Date.now, //automatically stores system date at created time
    },
});

CatSchema.statics.sayName = (cat) => {
    console.log(cat.name);
};

CatSchema.statics.findByName = (name, callback) => {
    const search = {
      name,  
    };

    return CatModel.findOne(search, callback);
};

CatModel = mongoose.model('Cat', CatSchema);

module.exports.CatModel = CatModel;
module.exports.CatSchema = CatSchema;