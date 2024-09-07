import request from 'supertest';
import { expect } from 'chai';
import { randomUUID } from 'crypto';
import { AuthController } from '../controller/auth.controller';
import { user } from '../data/user';
import { get } from 'http';
import { Asserts } from '../asserts/asserts';

const apiUrl = 'https://qauto.forstudy.space/api';
const auth = new AuthController(apiUrl);
const assert = new Asserts();
let cookie: any;

describe('QAAUTO API Tests', () => {

    // before(async () => {
    //     cookie = await auth.getSighUpCookie(user);
    // });

    it('POST should create a new user', async () => {
        const response = await auth.signUp(user);
        // cookie = getCookie(response); add to helpers
        cookie = response.headers['set-cookie'][0];
        assert.validateStatusCode(response, 201);
        console.log(response);
    });

    it('POST /cars', async () => {
        const car = {
            "carBrandId": 1,
            "carModelId": 1,
            "mileage": 122
          }

        const response = await request(apiUrl)
            .post('/cars')
            .send(car)
            .set({
                'Cookie': cookie
            })
            .expect('Content-Type', /json/)
            .expect(201);
            
        expect(response.body).to.be.an('object');
        expect(response.status).to.equal(201);
    });


    after(async () => {
        // delete created test data
    });   

});


////////////////////////////////////
// Звичайні АРІ коли
// 1. Дивимось документацію по API
// 2. Виконуємо АРІ запит, як нам зрозуміло, щоб він виконався успішно
// 3. Додаєш прості перевірки
// 4. Адаптуеш дані до тесту. Робиш дані гнучкими, створюєш моделі
// 5. Додаєш більше перевірок. Негативні сценарії


////////////////////////////////////
// Інтеграцій АРІ коли
// 1. Дивимось документацію по API
// 2. Визначаємо залежність даних між АРІ колами
// 3. Виконуємо АРІ запити з урахуванням залежностей
// 4. Додаєш перевірки
// 5. Адаптуеш дані до тесту. Робиш дані гнучкими, створюєш моделі
// 6. Додаєш більше перевірок. Негативні сценарії


