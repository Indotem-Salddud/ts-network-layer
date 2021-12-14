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
  
  interface EndPoint {
    protocol: Protocols;
    addr: string;
    port: number;
    resourcePath: string;
  }
  
  interface RequesHeaders {
    //TODO
  }
  
  interface APIRequest {
    method?: HTTPMethods;
    headers?: RequesHeaders;
    body?: string;
  }
  
  interface ResponseCache {
    cacheable: boolean;
    maxAge?: number;
    body?: string;
    update(callbacks: APICallbacks): void;
  }
  
  interface APICallbacks {
    // TODO
  }
  
  interface NetworkQuery {
    host: EndPoint;
    request: APIRequest;
    callbacks: APICallbacks;
    cache: ResponseCache;
    send(): void;
  }
  
  /* Aplication examples:
  
  const MapsAPI = new EndPoint("apis.google.com","/maps/");
  const getMaps = new NetworkQuery(MapsAPI);
  getMaps.send();
  
  const StoreAPI =  new EndPoint("api.littleshop.com");
  const postProductRequest = ({method: "POST", body: newProduct, }})
  const postProduct = new NetworkQuery(MapsAPI,postProductRequest)
  
  */
  