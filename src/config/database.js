const mongoose = require('mongoose');
const connectDB = async () => {
    await mongoose.connect("mongodb+srv://DevTinder:A3GrFYGPKQZm3UbQ@devtinder.5bfksth.mongodb.net/")
};

connectDB().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
}
);
