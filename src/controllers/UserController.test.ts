import { UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { Request } from "express";
import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";



describe("UserControler", () => {
    const mockUserService: Partial<UserService> = {
        createUser : jest.fn()
    };

    const userControler = new UserController(mockUserService as UserService);

    it("Deve adicionar um novo usuário", () => {
        const mockRequest = {
            body:{
                name: 'Dio',
                email: "konodioda@dio.com"
            }
        } as Request
        const mockResponse = makeMockResponse();
        userControler.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({ message: "Usuário Criado" });
    });
});