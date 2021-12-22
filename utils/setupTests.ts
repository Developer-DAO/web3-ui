import '@testing-library/jest-dom';
import { server } from './server';
require('whatwg-fetch');

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
