import { app } from "./app.js";
import { connectDB } from "./config/db.js";

// MongoDB Database
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
