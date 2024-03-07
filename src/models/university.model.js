import { Schema, model } from 'mongoose';

const universitySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        locale: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

universitySchema.virtual('numSubjects', {
    ref: 'Subject',
    localField: '_id',
    foreignField: 'university',
    count: true,
});

universitySchema.virtual('numUsers', {
    ref: 'User',
    localField: '_id',
    foreignField: 'university',
    count: true,
});

universitySchema.statics.isNameTaken = function (name) {
    return this.findOne({ name });
};
export default model('University', universitySchema);