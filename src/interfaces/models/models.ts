//type HTTPMethods =  "GET"|"POST"|"PUT"|"PATCH"|"DELETE";

enum HTTPMethods {
    get = "GET",
    post = "POST",
    put = "PUT",
    patch = "PATCH",
    delete = "DELETE"
}

enum Protocols {
    https = "https",
    mqtt = "mqtt",
}

interface EndPoint {
    proto: Protocols
    addr: string;
    port: number;
    path: string;
}
  
interface RequesHeaders {

}
  
interface Request {
    //method?: HTTPMethods;
    //headers?: Headers;
    body?: string;
    json(): any;
}
  
interface ResponseCache {
    cacheable: boolean;
    maxAge: number;
    body: string;
}

interface APICallbacks {
    // TODO
}

interface NetworkQuery {
    host: EndPoint;
    request?: Request;
    callbacks: APICallbacks;
    cache: ResponseCache;
    send(): void;
}
  
  /* Aplication examples:
  const MapsAPI = new EndPoint("apis.google.com","/maps/");
  const StoreAPI =  new EndPoint("api.littleshop.com");
  const getMaps = new NetworkQuery(MapsAPI).send
  const postProduct = new 
  client = new Client(host,request,responseCallback,errorCallback)
  */
