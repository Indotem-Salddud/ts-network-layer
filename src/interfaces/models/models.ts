enum HTTPMethods {
    get = 'GET',
    post = 'POST',
    put = 'PUT',
    patch = 'PATCH',
    delete = 'DELETE',
    options = 'OPTIONS',
  }
  
  enum Protocols {
    http = 'http',
    https = 'https',
    mqtt = 'mqtt',
  }
  
enum RequestModes {
  sameOrigin = 'same-origin',
  noCors = 'no-cors',
  cors = 'cors',
}

  interface EndPoint {
    protocol: Protocols;
    addr: string;
    port: number;
    resourcePath: string;
  }
  
  interface RequesHeaders {
    //TODO
  }

  interface ResponseCache {
    cacheable: boolean;
    maxAge?: number;
    body?: string;
    update(responseCallback: Function, errorCallback: Function): void;
  }
  
  interface APIRequest {
    method?: HTTPMethods;
    headers?: RequesHeaders;
    body?: string;
    cors?: RequestModes;
  }
  
  interface NetworkQuery {
    host: EndPoint;
    request: APIRequest;
    responseCallback: Function;
    errorCallback: Function;
    cache: ResponseCache;
    set method(method: HTTPMethods);
    set headers(headers: RequesHeaders);
    set body(body: string);
    fetch(): void;
  }
  
interface NetworkParallelQueries {
  queries: NetworkQuery[];
  fetch(): void;
}

  /* Aplication examples:
  
  const MapsAPI = new EndPoint("apis.google.com","/maps/");
  const getMaps = new NetworkQuery(MapsAPI);
  getMaps.fetch();
  
  const StoreAPI =  new EndPoint("api.littleshop.com");
  const postProduct = new NetworkQuery(MapsAPI);
  postProduct.method='POST';
  postProduct.body=newProduct;

  */
  