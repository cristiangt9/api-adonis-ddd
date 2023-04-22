import { Schema, model } from 'mongoose'

const TaskSchema = new Schema(
  {
    uuid: {
      type: String,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const TaskModel = model('user', TaskSchema)

export default TaskModel
