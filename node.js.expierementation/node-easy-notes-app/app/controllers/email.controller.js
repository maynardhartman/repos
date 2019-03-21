const Email = require ('../models/email.model.js');

exports.sendJson = function ( data, response ) {
    response.writeHead(200, {
        'Content-Type': 'application/json'
        
    });
    response.end(JSON.stringify(data));
}

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.text) {
        return res.status(400).send({
            message: "Email Message Required"
        });
    }

    // Create a Note
    const email = new Email({
        name: req.body.name || "Noname Email", 
        email: req.body.email,
        text: req.bode.text
    });

    // Save Note in the database
    email.save()
    .then(data => {
        res.json("done");
        console.log("Note Saved" + '\r' + email);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Email."
        });
    });
};

// Retrieve and return all emails from the database
exports.findAll = (req, res) => {
    Email.find()
    .then(emails => {
        res.json(emails);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Emails."
        });
    });
};

// Find a single email with a email._id
exports.findOne = (req, res) => {
    Email.findById(req.params._id)
    .then(email => {
        if(!email) {
            return res.status(404).send({
                message: "email not found with id " + req.params._id
            });            
        }
        res.send(email);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Email not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params._id
        });
    });
};

// Update an email identified by the email._id in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.text) {
        return res.status(400).send({
            message: "Email text content can not be empty"
        });
    }

    // Find note and update it with the request body
    Email.findByIdAndUpdate(req.params._id, {
        name: req.body.name,
        email: req.body.email,
        text: req.body.text
    }, {new: true})
    .then(email => {
        if(!email) {
            return res.status(404).send({
                message: "Email not found with id " + req.params._id
            });
        }
        res.json(email);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Emaile not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error updating email with id " + req.params._id
        });
    });
};
// Delete a note by email._id
exports.delete = (req, res) => {
    Email.findByIdAndRemove(req.params._id)
    .then(email => {
        if(!email) {
            return res.status(404).send({
                message: "Email not found with id " + req.params._id
            });
        }
        res.json({message: "Email deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Email not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Could not delete email with id " + req.params._id
        });
    });
};
