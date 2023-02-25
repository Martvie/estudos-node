import { UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { Request } from "express";
import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";



describe("UserControler", () => {
    const mockUserService: Partial<UserService> = {
        createUser : jest.fn(),
        getAllUsers: jest.fn(),
        deleteUser: jest.fn()
    };

    const userControler = new UserController(mockUserService as UserService);

    it("Deve adicionar um novo usuário", () => {
        const mockRequest = {
            body:{
                name: "Dio",
                email: "konodioda@dio.com"
            }
        } as Request
        const mockResponse = makeMockResponse();
        userControler.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({ message: "Usuário Criado" });
    });

    it("Deve retornar um erro caso o nome não seja informado", () => {
        const mockRequest = {
            body:{
                name: "",
                email: "konodioda@dio.com"
            }
        } as Request
        const mockResponse = makeMockResponse();
        userControler.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: "Bad request: name invalid" });
    });

    it("Deve retornar um erro caso o email não seja informado", () => {
        const mockRequest = {
            body:{
                name: "DIO",
                email: ""
            }
        } as Request
        const mockResponse = makeMockResponse();
        userControler.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: "Bad request: email is invalid" });
    });

    it("Deve retornar um erro caso o email não seja válido", () => {
        const mockRequest = {
            body:{
                name: "DIO",
                email: "zonodiodaarrobadio.com"
            }
        } as Request
        const mockResponse = makeMockResponse();
        userControler.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: "Bad request: email is invalid" });
    });

    it("A função getAllUsers deve ser chamada", () => {
        const mockRequest = {
            body:{
            }
        } as Request
        const mockResponse = makeMockResponse();
        userControler.getAllUsers(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(200);
    });

    it('A função deleteUser não deve ser chamada caso nome ou email sejam inválios', ()=>{
        const mockRequest = {
            body:{
                name: "",
                email: "konodioda@dio.com"
            }
        } as Request
        const mockResponse = makeMockResponse();
        userControler.deleteUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: "Bad request: name or email invalid" });
    })

    it('A função deleteUser deve deletar normalmente se as informações fornecidas forem corretas', ()=>{
        const mockRequest = {
            body:{
                name: "DIO",
                email: "konodioda@dio.com"
            }
        } as Request
        const mockResponse = makeMockResponse();
        userControler.deleteUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(202);
        expect(mockResponse.state.json).toMatchObject({message: "usuário deletado"});
    })
});