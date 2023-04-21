import { TaskEntity } from './Task.entity'

export interface TaskRepository {
  getAll(): Promise<TaskEntity[]>
  getById(id: number): Promise<TaskEntity | null>
  create(task: TaskEntity): Promise<TaskEntity>
  update(id: number, task: TaskEntity): Promise<TaskEntity | null>
  delete(id: number): Promise<boolean>
}
