// Import the necessary modules
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// Create an Express application
const app = express();
// Define the port number
const port = 3000;

// Configure the PostgreSQL client
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "123456",
    port: 5432
});

// Connect to the PostgreSQL database
db.connect();

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Sample items array
let items = [];

// Route to display the list of items
app.get("/", async (req, res) => {
    try {
        // Query the database to get all items ordered by ID
        const result = await db.query("SELECT * FROM items ORDER BY id ASC");
        items = result.rows;

        // Render the index.ejs template with the current date and list of items
        res.render("index.ejs", {
            listTitle: new Date().toLocaleDateString(),
            listItems: items,
        });
    } catch (error) {
        console.error(error);
    }
});

// Route to add a new item
app.post("/add", async (req, res) => {
    const item = req.body.newItem;

    try {
        // Insert the new item into the database
        await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
        // Redirect to the home page
        res.redirect("/");
    } catch (error) {
        console.error(error);
    }
});

// Route to edit an existing item
app.post("/edit", async (req, res) => {
    const item = req.body.newItem;
    const id = req.body.id;

    try {
        // Update the item's title in the database
        await db.query("UPDATE items SET title = $1 WHERE id = $2", [item, id]);
        // Redirect to the home page
        res.redirect("/");
    } catch (error) {
        console.error(error);
    }
});

// Route to delete an item
app.post("/delete", async (req, res) => {
    const id = req.body.deleteItemId;

    try {
        // Delete the item from the database
        await db.query("DELETE FROM items WHERE id = $1", [id]);
        // Redirect to the home page
        res.redirect("/");
    } catch (error) {
        console.error(error);
    }
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
