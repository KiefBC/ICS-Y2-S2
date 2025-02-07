let messages = [];

// GET Request Handler
const getAllMessages = (req, res) => {
    try {
        res.status(200).json(messages);
    } catch (err) {
        res.status(400).send('Unknown Error GET');
    }
};

// POST Request Handler
const addNewMessage = (req, res) => {
    try {
        messages.push(req.body);
        res.status(200).json(messages);
    } catch (err) {
        res.status(400).send('Unknown Error POST');
    }
};

export default { getAllMessages, addNewMessage };