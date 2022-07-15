const User = require('../models/userModel');
const Company = require('../models/companyModel');

exports.getAll = async (request, response) => {
    try {
        const allUsers = await User.find({},{
            __v: 0
        })
        .populate('company', {
            name: 1,
            _id: 0
        });

        if (allUsers.length === 0) {
            throw new Error('The database is empty');
        }

        response.status(200).json(allUsers);
    } catch (e) {
        response.status(500).json({message: e.message});
    }
};

exports.getOne = async (request, response) => {
    try {
        const user = await User.findById(request.params.id);

        if (user === null) {
            throw new Error('User not found');
        }

        response.status(200).json(user);
    } catch (e) {
        response.status(500).json({message: e.message});
    }
};

exports.createUser = async (request, response) => {
    const {
        name,
        username,
        email,
        company
    } = request.body;

    let userCompany = await Company.findById(company);
    let user = {};

    if (userCompany !== null) {
        user = new User({
            name: name,
            username: username,
            email: email,
            company: userCompany
        });
    } else {
        user = new User({
            name: name,
            username: username,
            email: email
        });
    }
    
    try {
        const userToSave = await user.save();
        response.status(200).json(userToSave);  
    } catch (e) {
        response.status(500).json({message: e.message});
    }
};

exports.updateUser = async (request, response) => {
    try {
        const userId = request.params.id;
        const updatedUser = request.body;
        const options = { new : true};
        const user = await User.findByIdAndUpdate(userId, updatedUser, options);
        if (user === null) {
            throw new Error('User not found');
        }
        response.status(200).json(user);
    } catch (e) {
        response.status(500).json({message: e.message});
    }
}

exports.deleteUser = async (request, response) => {
    try {
        const user = await User.findByIdAndDelete(request.params.id);
        if (user === null) {
            throw new Error('User not found');
        }
        response.status(200).json(user);
    } catch (e) {
        response.status(500).json({message: e.message});
    }
}