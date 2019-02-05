const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    name:  { type: String, required: true },
    email: { type: String, required: true, index:{ unique:true } },
    text:  { type: String, required: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);