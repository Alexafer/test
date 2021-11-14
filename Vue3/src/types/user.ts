export interface IUser {
        firstName: string,
        lastName: string,
        position: string,
        notification: number,
        task: {
          complitedTask: number,
          openTasks: number
        }
}