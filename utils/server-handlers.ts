// File with API handlers shared across all tests.
// See https://kentcdodds.com/blog/stop-mocking-fetch for more details

import { rest } from 'msw';
import { MOCK_IMAGE_NFT, MOCK_OPENSEA_ASSETS_RESPONSE } from './mocks';

const handlers = [
  rest.get('https://api.opensea.io/api/v1/assets', async (req, res, ctx) => {
    if (req.url.searchParams.get('owner') === 'bad_address') {
      return res(ctx.text('Not valid address'), ctx.status(400));
    }
    return res(ctx.json(MOCK_OPENSEA_ASSETS_RESPONSE));
  }),
  rest.get(
    'https://api.opensea.io/api/v1/asset/:contractId/:id',
    async (_, res, ctx) => {
      return res(ctx.json(MOCK_IMAGE_NFT));
    }
  ),
];

export { handlers };
