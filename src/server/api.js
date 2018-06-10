import ApiBuilder from 'claudia-api-builder'

const api = new ApiBuilder({requestFormat: 'AWS_PROXY'})
export default api
export const ApiResponse = api.ApiResponse
