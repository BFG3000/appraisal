const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    goals: {
        financialGoals: [
            {
                goal: {
                    type: String,
                },
                description: {
                    type: String,
                },
                weight: {
                    type: Number,
                    required: true,
                },
                duration: {
                    type: String,
                },
                hasInput: {
                    type: Boolean,
                    default: true,
                },
                sort: {
                    type: Number,
                    required: true,
                },
            },
        ],
        customerServiceGoals: [
            {
                goal: {
                    type: String,
                },
                description: {
                    type: String,
                },
                weight: {
                    type: Number,
                    required: true,
                },
                duration: {
                    type: String,
                },
                hasInput: {
                    type: Boolean,
                    default: false,
                },
                sort: {
                    type: Number,
                    required: true,
                },
            },
        ],
        operationalPoliciesGoals: [
            {
                goal: {
                    type: String,
                },
                description: {
                    type: String,
                },
                weight: {
                    type: Number,
                    required: true,
                },
                duration: {
                    type: String,
                },
                hasInput: {
                    type: Boolean,
                    default: false,
                },
                sort: {
                    type: Number,
                    required: true,
                },
            },
        ],
        employeeTotal: {
            type: Number,
        },
    },

    competencies: {
        mainCompetencies: [
            {
                goal: {
                    type: String,
                },
                description: {
                    type: String,
                },
                weight: {
                    type: Number,
                },
                duration: {
                    type: String,
                },
                hasInput: {
                    type: Boolean,
                    default: false,
                },
                sort: {
                    type: Number,
                    required: true,
                },
            },
        ],
        specialCompetencies: [
            {
                goal: {
                    type: String,
                },
                description: {
                    type: String,
                },
                weight: {
                    type: Number,
                    required: true,
                },
                duration: {
                    type: String,
                },
                hasInput: {
                    type: Boolean,
                    default: false,
                },
                sort: {
                    type: Number,
                    required: true,
                },
            },
        ],
        employeeTotal: {
            type: Number,
        },
    },
    year: {
        type: Number,
        required: true,
    },
    //in minutes
    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Form', formSchema);
