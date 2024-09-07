import { randomUUID } from "crypto";


export const user = {
    "name": "John",
    "lastName": "Dou",
    "email": `test+${randomUUID()}@test.com`,
    "password": "Qwerty12345",
    "repeatPassword": "Qwerty12345"
}