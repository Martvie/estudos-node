import { IUser, UserService } from "./UserService";

describe("User Service", () => {
    const mockDB: IUser[] = []
    const userService = new UserService(mockDB);

    it("Deve adicionar um novo usuário", () => {
        const mockConsole = jest.spyOn(global.console, "log");

        userService.createUser("Paulo", "paulo@test.com");

        expect(mockConsole).toBeCalledWith("Banco de dados atualizado");
    });
});
