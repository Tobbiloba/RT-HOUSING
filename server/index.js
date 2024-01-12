import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import userRouter from "./routes/user.routes.js";
import propertyRouter from "./routes/property.routes.js";
import adminRouter from "./routes/admin.routes.js"
import orderRouter from "./routes/order.routes.js"
import ratingRouter from "./routes/rating.routes.js"
import companyRouter from "./routes/company.routes.js"
import couponRouter from "./routes/coupon.routes.js"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
    res.send({ message: "Hello World!" });
});


app.use("/api/v1/users", userRouter);
app.use("/api/v1/properties", propertyRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/rating", ratingRouter);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/coupon", couponRouter);
const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);

        app.listen(8080, () =>
            console.log("Server started on port http://localhost:8080"),
        );
    } catch (error) {
        console.log(error);
    }
};

startServer();
