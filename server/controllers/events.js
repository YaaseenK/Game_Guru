import events from "../models/events"


export const getEvents = async (req, res) => {
    try{
        const events = await events.find();
        console.log(events);
        res.status(200).json(events);
    } catch (error)  {
        res.status(404).json({message: 'error.message'});
    }
};

export const createEvent = (req, res) => {
    const event = req.body;

    const newEvent = new events(event);

    try {
        newEvent.save();
        res.status(201).json(newEvent);

    } catch (error) {
        res.status(409).json({message: 'error.message'});

    }
}