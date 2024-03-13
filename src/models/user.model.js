import 'dotenv/config.js';
import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { toJSON } from './plugins/index.js';

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            private: true,
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            required: true,
            trim: true,
        },
        university: {
            type: Schema.Types.ObjectId,
            ref: 'University',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

userSchema.plugin(toJSON);

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.createToken = function () {
    return jwt.sign(
        { id: this._id, username: this.username, role: this.role },
        process.env.JWT_SECRET || 'secret'
    );
};

export default model('User', userSchema);