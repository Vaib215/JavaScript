# Notes API
This API allows you to create, read, update, and delete notes using Node.js, Express, and MongoDB.

## Getting Started
1. Clone the repository.
2. Run `npm install` to install the necessary dependencies.
3. Start the server by running `npm start`.

## Endpoints
- `GET /` - Returns a "Hello World" message
- `POST /notes` - Creates a new note with the given title and content.
- `GET /notes` - Retrieves all notes from the database.
- `GET /notes/:id` - Retrieves a single note by its id.
- `PUT /notes/:id` - Updates a note with the given id.
- `DELETE /notes/:id` - Deletes a note with the given id.

## Note Model
The Note model has the following properties:
- `title` (String) - The title of the note
- `content` (String) - The content of the note

## Error Handling
If an error occurs, the API will return a status code of 500 and the error message.

## Additional Dependencies
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool

## Note
This API does not include authentication or authorization.
