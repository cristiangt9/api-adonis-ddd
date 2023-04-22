import { TaskEntity } from 'App/Layers/Domain/Task.entity'
import { TaskRepository } from 'App/Layers/Domain/Task.repository'
import TaskModel from './Mongo/Models/Task.schema'

export class MongoRepository implements TaskRepository {
  public async getAll(): Promise<TaskEntity[]> {
    return await TaskModel.find()
  }

  public async getById(uuid: number): Promise<TaskEntity | null> {
    const task = await TaskModel.findOne({ uuid })
    return task
  }

  public async create(taskIn: TaskEntity): Promise<TaskEntity | null> {
    return await TaskModel.create(taskIn)
  }

  public async update(uuid: number, task: TaskEntity): Promise<TaskEntity | null> {
    if ((await TaskModel.updateOne({ uuid }, { $set: { ...task } })).modifiedCount > 0) {
      return await TaskModel.findOne({ uuid })
    }
    return null
  }

  public async delete(uuid: number): Promise<boolean> {
    return (await TaskModel.deleteOne({ uuid })).deletedCount > 0
  }
}
