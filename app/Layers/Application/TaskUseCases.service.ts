import { TaskEntity } from '../Domain/Task.entity'
import { TaskRepository } from '../Domain/Task.repository'

// aqui se implementa la lógica de los casos de uso como servicios
export class TaskUseCases {
  constructor(private readonly taskRepository: TaskRepository) {}

  public async getAllTasks(): Promise<TaskEntity[]> {
    return this.taskRepository.getAll()
  }

  public async getTaskById(id: number): Promise<TaskEntity | null> {
    return this.taskRepository.getById(id)
  }

  public async createTask(task: TaskEntity): Promise<TaskEntity | null> {
    return this.taskRepository.create(task)
  }

  public async updateTask(id: number, task: TaskEntity): Promise<TaskEntity | null> {
    return this.taskRepository.update(id, task)
  }

  public async deleteTask(id: number): Promise<boolean> {
    return this.taskRepository.delete(id)
  }
}
