import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost/application", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;

export default mongoose;