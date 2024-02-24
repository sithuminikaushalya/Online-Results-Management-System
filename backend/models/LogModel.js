const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
    action: String, // "add", "edit", or "delete"
    userId: String, // User responsible for the action
    data: Object, // The data that was added, edited, or deleted
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Logs", LogSchema);
