import mongoose from "mongoose";

const Connection = async (username,password) => {

  const URL =  `mongodb+srv://${username}:${password}@website.i3wgjjn.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL);
    console.log("Database connected succesfully");
  } catch (error) {
    console.log(`Error while connecting database ${error}`);
  }
};

export default Connection;
