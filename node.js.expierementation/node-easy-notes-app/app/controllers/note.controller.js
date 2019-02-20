const Note = require('../models/note.model.js');

exports.sendJson = function ( data, response ) {
    response.writeHead(200, {
        'Content-Type': 'application/json'
        
    });
    response.end(JSON.stringify(data));
}

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.email) {
        return res.status(400).send({
            message: "Email can not be empty",    
        });    
    }
    if (!req.body.name){
        return res.status(400).send ({
            message: "Name can not be empty",
            
        }); 
    }

    // Create a Note
    const note = new Note({
        name: req.body.name,
        email: req.body.email,
        text: req.body.text,
    });

    // Save Note in the database
    note.save()
    .then(data => {
        res.json("done");
        console.log("Note Saved:" + note);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};


// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Note.find()
    .then(notes => {
       res.json(notes);
    }).catch(err => {
        res.status(500).send({
            message:` ${err.message} || "Some error occurred while retrieving notes."`
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Note.findById(req.params.noteId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });   
        }
        res.json({note});
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });         
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.text) {
        return res.status(400).send({
            message: "Text can not be empty"
        });
    }

    // Find note and update it with the request body
    Note.findByIdAndUpdate(req.params.noteId, {
        name: req.body.name || "No Name",
        text: req.body.text
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Message not found with id " + req.params.noteId 
            });
        }
        res.json({note});
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Message not found with id " + req.params.noteId
            });            
        }
        return res.status(500).send({
            message: "Message updating note with id " + req.params.noteId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Note.findByIdAndRemove(req.params.noteId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.json({data: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });               
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    });
};