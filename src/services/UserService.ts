const db: Array<object> = [
    {
        name: "Marcus",
        email: "marcus@dio.com",
    },
];

export class UserService {
    createUser = (userName: string, userEmail: string): void => {
        const user = {
            name: userName,
            email: userEmail,
        };
        db.push(user);

        console.log('Banco de dados atualizado')
    };

    getAllUsers = () =>{
        return db;
    }
}
