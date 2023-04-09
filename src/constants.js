const localUrl = 'http://localhost:4500/base';
const liveUrl = 'https://haus-api-production-e2b9.up.railway.app/base';
const routes = {
    apiEndpoint: liveUrl,
    createOrder: '/create-order',
}

const constants = {
    testing: false,
}

export { routes, constants };