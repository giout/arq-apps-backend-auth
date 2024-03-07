import { Schema, model } from 'mongoose';

const roleSchema = new Schema(
    {
        descrip: {
            type: String,
            enum: ['user', 'superuser'],
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model('Role', roleSchema);