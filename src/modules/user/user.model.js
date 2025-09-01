const mongoose = require('mongoose');

const OtpSchema = new mongoose.Schema({
    code: {type: String, required: false, default: undefined},
    expiresIn: {type: Number, require: false, default: 0}
});

const UserSchema = new mongoose.Schema({
    fullName: {type: String, required: false},
    mobile: {type: String, required: true, unique: true},
    code: {type: OtpSchema},
    verifiedMobile: {type: Boolean, required: true, default: false}
},
{timestamps: true}
);

module.exports = {
    UserModel : mongoose.model('user', UserSchema)
}