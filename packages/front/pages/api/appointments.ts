import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { jdApi } from '../../lib/swr-fetch';

export default withApiAuthRequired(async (req, res) => {
  // If your Access Token is expired and you have a Refresh Token
  // `getAccessToken` will fetch you a new one using the `refresh_token` grant
  const { accessToken } = await getAccessToken(req, res);

  const resApi = await jdApi.get('/appointments', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.status(200).json(resApi.data);
});
