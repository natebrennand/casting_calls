
define(['app'], function() {
  window.showResults = function(data, status, headers, config) {
    console.log('Success');
  };
  window.getStatus = function(status) {
    var translation;
    translation = {
      200: "Ok",
      201: "Created",
      202: "Accepted",
      203: "NonAuthoritativeInformation",
      204: "NoContent",
      205: "ResetContent",
      206: "PartialContent",
      207: "MultiStatus",
      301: "MovedPermanently",
      302: "Found",
      303: "SeeOther",
      304: "NotModified",
      307: "TemporaryRedirect",
      400: "BadRequest",
      401: "Unauthorized",
      403: "Forbidden",
      404: "NotFound",
      405: "MethodNotAllowed",
      406: "NotAcceptable",
      408: "RequestTimeout",
      409: "Conflict",
      410: "Gone",
      412: "PreconditionFailed",
      413: "EntityTooLarge",
      414: "UriTooLong",
      415: "UnsupportedMediaType",
      417: "ExpectationFailed",
      422: "UnprocessableEntity",
      423: "Locked",
      424: "FailedDependency",
      429: "TooManyRequest",
      500: "InternalServerError",
      501: "NotImplemented",
      502: "BadGateway",
      503: "ServiceUnavailable",
      504: "GatewayTimeout",
      505: "HttpVersionNotSupported",
      507: "InsufficientStorage"
    };
    translation[status];
  };
  window.refresh = function() {
    location.reload();
  };
  window.showError = function(data, status, headers, config) {
    var message;
    message = 'Failure | ' + getStatus(status);
    if (data && data.reason) {
      message += ' | ' + data.reason;
    }
    console.log(message);
  };
});
