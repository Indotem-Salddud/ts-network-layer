//DONT REMOVE THIS LINE
console.log('Try npm run lint/fix!');

//Please make general request
interface ModelRequestHeaders {
    key: string;
    value: string;
}

interface APIClient {
    performRequest<T>(request: T, callback: Function): void;
}

class ExampleAPIClient implements APIClient {



    performRequest<T>(request: T, callback: Function): void {

    }

}

interface APIRequestT {
    resourcePath: string;
    method?: HTTPMethods;
    cors?: RequestModes;
    headers?(): ModelRequestHeaders[];
    body?(): string;
}

class UserLoginRequest implements APIRequestT {

    resourcePath: string = "/user";
    method?: HTTPMethods = HTTPMethods.post;

    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    headers(): ModelRequestHeaders[] {
        return [
            {key: "Accept", value: "application/json"}
        ]
    }

    body(): string {
        return JSON.stringify({username: this.username, password: this.password});
    }

}

class UserDataProvider {

    client: APIClient;

    constructor(client: APIClient) {
        this.client = client;
    }

    login(username: string, password: string, callback: Function) : void {
        const loginRequest = new UserLoginRequest(username, password);
        this.client.performRequest(loginRequest, callback);
    }

}   

const dp = new UserDataProvider(new ExampleAPIClient());