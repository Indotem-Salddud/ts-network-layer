interface NetworkClient {
}

interface HomeRouter {
    gotoDetailView(): void
}

class Home {
    client: NetworkClient;
    router: HomeRouter;
    constructor(client: NetworkClient, router: HomeRouter){
        this.client = client;
        this.router = router;
    }
}

// abstract factory
class RootFactory {
    static home (client: NetworkClient, router: HomeRouter): Home {
        const scene = new Home(client, router);
        return scene;
    }
}

// RootFactory.home()
