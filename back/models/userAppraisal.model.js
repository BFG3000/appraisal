const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userAppraisalSchema = new mongoose.Schema({
    goals: {
        financialGoals: [
            {
                requiredTargetValue: {
                    type: Number,
                },
                isTargetRequired: {
                    type: Boolean,
                    default: false,
                },
                requiredTargetAchieved: {
                    type: Number,
                },
                proofDescription: {
                    type: String,
                },
                sort: {
                    type: Number,
                    required: true,
                },
            },
        ],
        customerServiceGoals: [
            {
                requiredTargetValue: {
                    type: Number,
                },
                isTargetRequired: {
                    type: Boolean,
                    default: false,
                },
                requiredTargetAchieved: {
                    type: Number,
                },
                proofDescription: {
                    type: String,
                },
                sort: {
                    type: Number,
                    required: true,
                },
            },
        ],
        operationalPoliciesGoals: [
            {
                requiredTargetValue: {
                    type: Number,
                },
                isTargetRequired: {
                    type: Boolean,
                    default: false,
                },
                requiredTargetAchieved: {
                    type: Number,
                },
                proofDescription: {
                    type: String,
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
                requiredTargetValue: {
                    type: Number,
                },
                isTargetRequired: {
                    type: Boolean,
                    default: false,
                },
                requiredTargetAchieved: {
                    type: Number,
                },
                proofDescription: {
                    type: String,
                },
                sort: {
                    type: Number,
                    required: true,
                },
            },
        ],
        specialCompetencies: [
            {
                requiredTargetValue: {
                    type: Number,
                },
                isTargetRequired: {
                    type: Boolean,
                    default: false,
                },
                requiredTargetAchieved: {
                    type: Number,
                },
                proofDescription: {
                    type: String,
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
        default: new Date().getFullYear(),
    },
    employee_id: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
    },
    form_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Form',
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
    },
    isApproved: {
        type: Boolean,
        default: false,
    },
    approvalDate: {
        type: Date,
    },
});

// JWT TOKEN
// userSchema.methods.getJwtToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRES_TIME,
//   });
// };

module.exports = mongoose.model('UserAppraisal', userAppraisalSchema);
