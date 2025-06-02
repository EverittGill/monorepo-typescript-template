// packages/backend/src/server.ts
import express, { Request, Response, Application } from "express";
import dotenv from "dotenv"; // Prettier should add a semicolon here

// Load environment variables from .env file
dotenv.config(); // Prettier should add a semicolon

const app: Application = express(); // Prettier should add a semicolon
const port: number = parseInt(process.env.PORT || "4000", 10); // Prettier should add a semicolon

// Middleware to parse JSON bodies
app.use(express.json()); // Prettier should add a semicolon

// Simple root route for testing if the server is up
// INTENTIONAL Prettier error: single quotes (your config prefers double)
app.get("/", (req: Request, res: Response) => {
  res.send("Kibbitz Backend Server is Alive! Test hooks...");
}); // Prettier should add a semicolon

// Placeholder for GraphQL setup
// INTENTIONAL Prettier error: inconsistent indentation
app.get("/graphql-placeholder", (req: Request, res: Response) => {
  res.json({ data: "Kibbitz Backend server running, placeholder GraphQL" }); // Prettier should fix indentation and add semicolon
});

app.listen(port, () => {
  // INTENTIONAL Prettier error: messy indentation and spacing
  console.log(`Backend server is running on http://localhost:${port}`);
  console.log(
    `GraphQL placeholder endpoint available at http://localhost:${port}/graphql-placeholder`
  ); // Prettier should add semicolon
}); // Prettier should add semicolon
