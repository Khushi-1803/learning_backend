
const app = require("./src/app");
const connectDB = require("./src/config/db");

async function start() {
  try {
    await connectDB();

    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  } catch (err) {
    console.error(err);
  }
}

start();