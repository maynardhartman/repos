module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new message
    app.post('/notes', notes.create);

    // Retrieve all messages
    app.get('/notes', notes.findAll);

    // Retrieve a single message with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a message with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a message with noteId
    app.delete('/notes/:noteId', notes.delete);
}