import { Application, Response, Request } from "express"

export default abstract class BaseRoute {
    public route: string

    constructor(route: string) {
        this.route = route
    }

    get = async (req: Request, res: Response) => {
        res.sendStatus(405)
    }

    list = async (req: Request, res: Response) => {
        res.sendStatus(405)
    }

    update = async (req: Request, res: Response) => {
        res.sendStatus(405)
    }

    updateMany = async (req: Request, res: Response) => {
        res.sendStatus(405)
    }

    delete = async (req: Request, res: Response) => {
        res.sendStatus(405)
    }

    deleteMany = async (req: Request, res: Response) => {
        res.sendStatus(405)
    }

    create = async (req: Request, res: Response) => {
        res.sendStatus(405)
    }

    open = (app: Application) => {
        app.get(`${this.route}/:id`, this.get)
        app.patch(`${this.route}/:id`, this.update)
        app.delete(`${this.route}/:id`, this.delete)

        app.get(`${this.route}`, this.list)
        app.patch(`${this.route}`, this.updateMany)
        app.delete(`${this.route}`, this.deleteMany)

        app.post(`${this.route}`, this.create)
    }
}
