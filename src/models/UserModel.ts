import * as mongoose from 'mongoose'

export type UserModel = mongoose.Document & {
    email: string,
    password: string
   // comparePassword: (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => void,
   // gravatar: (size: number) => string
};

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },

    password: String
})
// export const User: UserType = mongoose.model<UserType>('User', userSchema);
const User = mongoose.model("User", UserSchema)
export default User