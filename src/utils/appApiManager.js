// import ky from 'ky'

// const API_PREFIX_URL = 'http://localhost:3000'

// const kyExt = ky.extend({
//   prefixUrl: API_PREFIX_URL,
// })
//
// export const api = async (url, { method = 'GET', params }) => {
//   if (method === 'GET') {
//
//   }
//   const res = await ky[method.toLowerCase()](url).json()
//     .catch(err => {
//       throw new Error(err.message)
//     })
//
//   return res.data
// }
//
// export const useApi = async () => {
//   return api.get('api/v1', {
//     json: {
//       test: 12,
//     },
//   }).json()
// }
