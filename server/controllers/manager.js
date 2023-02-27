import manager from "../models/manager"



export const getManager = async (req, res) => {
    try{
        const managers = await manager.find();
        console.log(managers);
        res.status(200).json(managers);
    } catch (error)  {
        res.status(404).json({message: 'error.message'});
    }
};

export const createManager = (req, res) => {
    const manage = req.body;

    const newManager = new events(manage);

    try {
        newManager.save();
        res.status(201).json(newManager);

    } catch (error) {
        res.status(409).json({message: 'error.message'});

    }
}