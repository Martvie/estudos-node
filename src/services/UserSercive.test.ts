import { IUser, UserService } from "./UserService";

describe("User Service", () => {
    const mockDB: IUser[] = []
    const userService = new UserService(mockDB);
    const mockConsole = jest.spyOn(global.console, "log");

    it("Deve adicionar um novo usuário", () => {
    
        userService.createUser("Dio", "konodioda@test.com");

        expect(mockConsole).toBeCalledWith("Banco de dados atualizado");
    });

    it("Deve deletar um usuário", () =>{
        
        userService.deleteUser("Dio", "konodioda@test.com");

        expect(mockConsole).toBeCalledWith("Usuário Deletado!");
    })
});
