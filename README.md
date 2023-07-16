# Social-Network-API

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

This is the README file for the Social-Network-API, which provides functionality for a social network using a NoSQL database. The API allows handling large amounts of unstructured data and supports various operations such as creating users, managing thoughts, adding reactions, and maintaining friend lists.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Insomnia

## Installation

- Clone the repository for the Social Media Startup API.
- Navigate to the project directory in your terminal.
- Run the following command to install the dependencies:

npm install

- Create a database in MongoDB called social-network-API
- Start the server by running the following command:

npm start

Once the server is running, you can use Insomnia to send requests to the API endpoints and interact with the social network.

## Using Insomnia

To interact with the Social-Netowrk-API, use the following API routes:

- User Routes:

  - Get User by Id: GET http://localhost:3001/api/user/:\_id
  - Get All Users : GET http://localhost:3001/api/user
  - Create New User: POST http://localhost:3001/api/user/
    - {
      "username": "new-userame",
      "email": "new-email
      }
  - Update User: PUT http://localhost:3001/api/user/:\_id
  - Delete User: DELETE http://localhost:3001/api/user/:\_id

- Friends Routes:

  - Add New Friend: POST http://localhost:3001/api/user/:\_id/friends/:friendId
  - Delete Friend: DELETE http://localhost:3001/api/user/:\_id/friends/:friendId

- Thought Routes:

  - Get All Thoughts: GET http://localhost:3001/api/thought
  - Get Thought by Id: GET http://localhost:3001/api/thought/:thoughtId
  - Update Thought: PUT http://localhost:3001/api/thought/:thoughtId
  - Post Thought: POST http://localhost:3001/api/thought
    - {
      "thoughtText": "Enter thoughts here",
      "username": "Enter username here"
      }
  - Delete Thought: DELETE http://localhost:3001/api/thought/:thoughtId

- Reaction Routes:

  - New Reaction: POST http://localhost:3001/api/thought/:thoughtId/reactions
    - {
      "reactionBody": "Insert reaction here",
      "username": "Insert username here"
      }
  - Delete Reaction: DELETE http://localhost:3001/api/thought/:thoughtId/reactions/:reactionId

## Credits

Social-Network-API was developed by Leandro Mangubat.

Email: leandromangubat@hotmail.com

Github: [github.com/leandromangubat](https://github.com/leandromangubat)

## License

This project is licensed under the MIT License.
