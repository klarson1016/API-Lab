import mongoose from 'mongoose'

export {
  Tea
}
const Schema = mongoose.Schema

const teaSchema = new Schema({
  brand: {
    type: String,
    required: true
  },
  flavor: {
    type: String,
  },
})

const Tea = mongoose.model("Tea", teaSchema)