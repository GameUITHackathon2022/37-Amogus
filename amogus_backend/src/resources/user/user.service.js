import { User } from './user.model'

const getAllUsers = async () => {
    const doc = await User.find({})
    console.log(doc)
    return doc
}

const createUser = async (data, uid) => {
    const check = await User.find({ userId: uid })
    if (check.length > 0) return "User exist"
    const doc = await User.create({
        email: data.email,
        userId: uid,
        name: data.name,
        role: "USER",
        rank: "None",
        point: 0
    })
    return doc
}

export const userService = {
    getAllUsers: getAllUsers,
    createUser: createUser,
}
