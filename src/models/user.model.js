import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema(
    {
        username: {
            type: String,
            minlength: 1,
            maxlength: 20,
            unique: true,
            trim: true,
            lowercase: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 20,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
        }
    },

    { timestamps: true }

);

//hash password
// userSchema.pre("save", async function () {
//     if (!this.isModified("password")) return

//     this.password = await bcrypt.hash(this.password, 10);

// });

userSchema.pre("save", async function () {
    if (!this.isModified("password")) { return };
    this.password = await bcrypt.hash(this.password, 10);
});

//compare passowrd
// userSchema.methods.comparePassword = async function (password) {
//     return await bcrypt.compare(password, this.password)
// }

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};



export const User = mongoose.model("User", userSchema)