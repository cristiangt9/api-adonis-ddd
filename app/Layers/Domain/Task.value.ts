import { v4 as uuid } from 'uuid'
import { TaskEntity } from './Task.entity'

export class TaskValue implements TaskEntity {
  public readonly title: string
  public readonly description: string
  public readonly completed: boolean
  public readonly uuid: string

  constructor({
    title,
    completed,
    description,
  }: {
    title: string
    description: string
    completed?: boolean
  }) {
    this.uuid = uuid()
    this.title = title
    this.description = description
    this.completed = completed ?? false
  }
}
