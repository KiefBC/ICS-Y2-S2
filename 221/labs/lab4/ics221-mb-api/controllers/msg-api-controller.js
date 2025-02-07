import messageSchema from '../models/message-schema.js';

let messages = [];

// GET Request Handler
const getAllMessages = (req, res) => {
    try {
        res.status(200).json(messages);
    } catch (err) {
        res.status(400).send('Unknown Error GET');
    }

    console.log(messages);
};

// POST Request Handler
const addNewMessage = (req, res) => {
    try {
        let message = messageSchema.parse(req.body);
        message.id = messages.length + 1;
        messages.unshift(message);
        res.status(201).json(message);
    } catch (err) {
        console.error('Error adding message:', err);
        res.status(400).send('Bad Request. The message in the body of the \
            Request is either missing or malformed.');
    }

    console.log(messages);
};

// PATCH Request Handler
const updateMessageById = (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;
        const message = messages.find(msg => msg.id === parseInt(id));
        if (!message) {
            return res.status(404).send('Message not found');
        }
        message.text = text;
        res.status(200).json(message);
    } catch (err) {
        res.status(400).send('Unknown Error PATCH');
    }

    console.log(messages);
};

// DELETE Request Handler
const deleteMessageById = (req, res) => {
    try {
        const { id } = req.params;
        const messageIndex = messages.findIndex(msg => msg.id === parseInt(id));
        if (messageIndex === -1) {
            return res.status(404).send('Message not found');
        }
        const deletedMessage = messages.splice(messageIndex, 1)[0];
        res.status(200).json(deletedMessage);
    } catch (err) {
        res.status(400).send('Unknown Error DELETE');
    }

    console.log(messages);
};

export default { getAllMessages, addNewMessage, updateMessageById, deleteMessageById };