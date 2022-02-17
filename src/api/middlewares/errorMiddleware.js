const statusCodes = require('../utils/statusCodes');

module.exports = (error, _request, response, _next) => {
  if (error.status) {
    return response.status(error.status).json({ message: error.message });
  }

  console.error(error);
  return response.status(statusCodes.serverError).json({ message: 'Internal Server Error' });
};
