import mongoose from 'mongoose';

try {
    mongoose.connect("mongodb://localhost:27017/application", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
})}catch(err){
    console.error(err);
}

export default mongoose;
