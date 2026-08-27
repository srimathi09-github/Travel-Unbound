import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDatabase from "./config/database.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173"
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Travel Unbounded API is running"
  });
});

app.use("/api/enquiry", enquiryRoutes);

app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();