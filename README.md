Here's a `README.md` file for your Todo List application, including setup instructions and the SQL command to create the necessary table:


# Todo List Application

This is a simple Todo List application built with Node.js, Express, and PostgreSQL. The application allows users to add, edit, and delete items from a todo list.

## Features

- Add new items to the todo list
- Edit existing items
- Delete items from the list
- View the list of items

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js
- PostgreSQL

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/MomoG221/Todo-List
   cd Todo-list
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Set up the PostgreSQL database:

   - Create a new PostgreSQL database (if you haven't already).

   - Create a table named `items` using the following SQL command:

     ```sql
     CREATE TABLE items (
       id SERIAL PRIMARY KEY,
       title VARCHAR(100) NOT NULL
     );
     ```

4. Update the database connection settings in `index.js`:

   ```javascript
   const db = new pg.Client({
       user: "postgres",
       host: "localhost",
       database: "world",
       password: "123456",
       port: 5432
   });
   ```

## Running the Application

1. Start the server:

   ```sh
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

### Adding a New Item

- Enter the new item in the input field and click the "Add" button. The item will be added to the list and displayed on the homepage.

### Editing an Item

- Click the "Edit" button next to the item you want to edit. Modify the item and submit the form to update the item in the database.

### Deleting an Item

- Click the "Delete" button next to the item you want to remove. The item will be deleted from the database and removed from the list.

## Dependencies

- express
- body-parser
- pg
- ejs
