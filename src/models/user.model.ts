import { model, Schema, Document, Model }  from 'mongoose';
import bcrypt from 'bcrypt';
import { mongoosePagination, Pagination } from "mongoose-paginate-ts";

export interface IUser extends Document {
    name: string;
    email: string;
    password : string;
    comparePasswords(candidatePassword: string): Promise<boolean>;
};

const UserSchema: Schema = new Schema<IUser>({
    name: { type: Schema.Types.String, required: true },
    email: { 
        type: Schema.Types.String, 
        required: true
    },
    password : {
        type : Schema.Types.String,
        required : true,
    }
},{
    timestamps: true
});

/**
 * password hash
 */

const saltRounds = 12;

UserSchema.pre('save', function (this: IUser, next: (err?: Error | undefined) => void) {

    if (!this.isModified('password')) {
        next();
    }

    const hashPassword = bcrypt.hashSync(this.password, saltRounds);
    this.password = hashPassword;
    next();
});

UserSchema.methods.comparePasswords = function (candidatePassword: string) {
    return bcrypt.compareSync(candidatePassword, this.password)
};

/**
 * UNIQUE COMPOUND KEY
 */

UserSchema.index({email : 1, role : 1}, {unique : true});

/**
 * pagination
 */
UserSchema.plugin(mongoosePagination);

const UserModel : Model<IUser> & Pagination<IUser>= model<IUser, Pagination<IUser>>('User', UserSchema);

export default UserModel;