import { TaskEntity } from 'App/Layers/Domain/Task.entity'
import { TaskRepository } from 'App/Layers/Domain/Task.repository'

const MOCK_TASK = {
  uuid: '0001-001-001',
  title: 'To do example',
  description: 'Descripcion de prueba',
  completed: true,
}

export class MongoRepository implements TaskRepository {
  public async getAll(): Promise<TaskEntity[]> {
    return [MOCK_TASK, MOCK_TASK, MOCK_TASK]
  }

  public async getById(_uuid: number): Promise<TaskEntity | null> {
    return MOCK_TASK
  }

  public async create(_taskIn: TaskEntity): Promise<TaskEntity | null> {
    return MOCK_TASK
  }

  public async update(_uuid: number, _task: TaskEntity): Promise<TaskEntity | null> {
    return MOCK_TASK
  }

  public async delete(_uuid: number): Promise<boolean> {
    return true
  }
}
