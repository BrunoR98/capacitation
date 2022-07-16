const Company = require('../models/companyModel');

exports.getAll = async (request, response) => {
    try {
        const allCompanies = await Company.find({}, { __v: 0 });

        if (allCompanies.length === 0) {
            throw new Error('The database is empty.');
        }

        response.status(200).json(allCompanies);
    } catch (e) {
        response.status(500).json({message: e.message});
    }
};

exports.getOne = async (request, response) => {
    try {
        const company = await Company.findById(request.params.id, { __v: 0 });

        if (company === null) {
            throw new Error('Company not found.');
        }

        response.status(200).json(company);
    } catch (e) {
        response.status(500).json({message: e.message});
    }
};

exports.createCompany = async (request, response) => {
    const {
        name
    } = request.body;

    const company = new Company({
        name: name
    });
    
    try {
        const companyToSave = await company.save();
        response.status(200).json(companyToSave);  
    } catch (e) {
        response.status(500).json({message: e.message});
    }
};

exports.updateCompany = async (request, response) => {
    try {
        const companyId      = request.params.id;
        const updatedCompany = request.body;
        const options        = { new : true};

        const company = await Company.findByIdAndUpdate(companyId, updatedCompany, options);

        if (company === null) {
            throw new Error('Company not found.');
        }

        response.status(200).json(company);
    } catch (e) {
        response.status(500).json({message: e.message});
    }
}

exports.deleteCompany = async (request, response) => {
    try {
        const company = await Company.findByIdAndDelete(request.params.id);

        if (company === null) {
            throw new Error('Company not found.');
        }

        response.status(200).json(company);
    } catch (e) {
        response.status(500).json({message: e.message});
    }
}