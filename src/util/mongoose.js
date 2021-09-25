module.exports = {
    // multiple mongoose to object
    multipleMongooseToObject: function (mongoose) {
        return mongoose.map(mongoose => mongoose.toObject());
    },

    mongooseToOject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};