import { expect } from 'chai';


export class Asserts {

    validateStatusCode(response: any, statusCode: number) {
        expect(response.status).to.equal(statusCode);
    }
}