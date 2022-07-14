class CustomErrors extends Error {
  statusCode = '';

  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = CustomErrors;
