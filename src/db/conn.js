const mongoose = require("mongoose");
mongoose
  .connect(
    // 'mongodb://127.0.0.1:27017/cricket-api'
    "mongodb+srv://sumitkapase1280:sumii2000@cluster0.fdqt8ft.mongodb.net/CPL_db",
    {
      // useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MONGO connection is successfull"))
  .catch((err) => console.log(`no connection ${err}`));
