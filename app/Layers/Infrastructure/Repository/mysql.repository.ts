import { TaskEntity } from 'App/Layers/Domain/Task.entity'
import { TaskRepository } from 'App/Layers/Domain/Task.repository'
import TaskModel from './Mysql/Models/Task.schema'

export class MysqlRepository implements TaskRepository {
  public async getAll(): Promise<TaskEntity[]> {
    return await TaskModel.all()
  }

  public async getById(uuid: number): Promise<TaskEntity | null> {
    return await TaskModel.findBy('uuid', uuid)
  }

  public async create(taskIn: TaskEntity): Promise<TaskEntity | null> {
    return await TaskModel.create({ ...taskIn })
  }

  public async update(uuid: number, task: TaskEntity): Promise<TaskEntity | null> {
    const taskOriginal = await TaskModel.findBy('uuid', uuid)
    if (taskOriginal) {
      for (const property in task) {
        taskOriginal[property] = task[property]
      }
      return await taskOriginal.save()
    }
    return null
  }

  public async delete(uuid: number): Promise<boolean> {
    const task = await TaskModel.findBy('uuid', uuid)
    if (task) {
      await task.delete()
      return !(await TaskModel.findBy('uuid', uuid))
    }
    return false
  }
}
