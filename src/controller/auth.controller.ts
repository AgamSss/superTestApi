import request from 'supertest';

export class AuthController {
    url: any;
    private _response: any;

    constructor(url: any) {
        this.url = url;
    }

    signIn(user: any) {
        console.log('Sign In');
    }

    async signUp(user: any, url?: any) {
        const response = await request(url ?? this.url)
            .post('/auth/signup')
            .send(user)
            .expect('Content-Type', /json/)
            .expect(201);
        return response;
    }

    async getSighUpCookie(user: any, url?: any, signUp: boolean = true) {
        let response: any;
        if (signUp) {
            response = await this.signUp(user, url);
        } else {
            response = await this.signIn(user);
        }
        
        return response.headers['set-cookie'][0];
    }

    async chainSignUp(user: any, url?: any): Promise<this>{
        this._response = await request(url ?? this.url)
        .post('/auth/signup')
        .send(user)
        .expect('Content-Type', /json/)
        .expect(201);
        
        return this
    }

    async getCookies() {
        return this._response.headers['set-cookie'][0];
    }
    
}