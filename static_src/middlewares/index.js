import { apiMiddleware } from 'redux-api-middleware';
import messageMiddlewares from './messageMiddlewares';

export default [
    apiMiddleware,
    messageMiddlewares,
];