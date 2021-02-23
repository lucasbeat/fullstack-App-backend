import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost/aplication", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;

export default mongoose;