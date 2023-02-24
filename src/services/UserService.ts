export interface IUser {
    name: string;
    email: string;
}

const db: Array<IUser> = [
    {
        name: "Marcus",
        email: "marcus@dio.com",
    },
];

export class UserService {
    db: IUser[];

    constructor(dataBase = db) {
        this.db = dataBase
        }
    createUser = (userName: string, userEmail: string): void => {
        const user = {
            name: userName,
            email: userEmail,
        };

        this.db.push(user);

        console.log("Banco de dados atualizado");
    };

    getAllUsers = () => {
        return this.db;
    };
}