"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"
import User from "@/models/User"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()
        //fetch the secret of the user who is getting to user
        let user = await User.findOne({username: to_username})
        const secret = user.razorpaysecret

    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })

    let option = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }
    let x = await instance.orders.create(option)

    // Create a payment object which shows a pending payment in the database
    await Payment.create({oid: x.id, amount: amount/100, to_user: to_username, name: paymentform.name, message: paymentform.message})

    return x;
}

export const fetchuser =async (username) => {
    await connectDb()
    let u = await User.findOne({username: username})
    let user = u.toObject({flattenObjectIds: true})
    return user
}

export const fetchpayments = async (username)=>{
    await connectDb()
    // Find All Payments sorted by decressing order of amount add flatten id
    let p = await Payment.find({to_user: username, done: true}).sort({amount: -1}).limit(10).lean()
    return p
}

export const updateProfile = async (data, oldusername)=>{
    await connectDb()
    let ndata = Object.fromEntries(data)
    //If the username is being updated, check if username is availabe
    if (oldusername !== ndata.username){
    let u = await User.findOne({username: ndata.username})
    if(u){
        return {error: "Username Already Exist"}
    }
    await User.updateOne({email: ndata.email}, ndata)
    // Now update all the username in the Payments table
    await Payment.updateMany({to_user: oldusername}, {to_user: ndata.username})
    }

    else{

        await User.updateOne({email: ndata.email}, ndata)
    }

}