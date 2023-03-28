const localUrl = 'http://localhost:4500/base';
const liveUrl = 'https://haus-api-production-e2b9.up.railway.app/base';
const routes = {
    apiEndpoint: localUrl,
    createOrder: '/create-order',
}

const constants = {
    testing: true
}

export { routes, constants };