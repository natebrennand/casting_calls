
define(['app'], function() {
  window.showResults = function(data, status, headers, config) {
    console.log('Success');
  };
  window.getStatus = function(status) {
    var translation;
    translation = {
      202: "Accepted",
      502: "BadGateway",
      400: "BadRequest",
      409: "Conflict",
      201: "Created",
      413: "EntityTooLarge",
      417: "ExpectationFailed",
      424: "FailedDependency",
      403: "Forbidden",
      302: "Found",
      504: "GatewayTimeout",
      410: "Gone",
      505: "HttpVersionNotSupported",
      507: "InsufficientStorage",
      500: "InternalServerError",
      423: "Locked",
      405: "MethodNotAllowed",
      301: "MovedPermanently",
      207: "MultiStatus",
      204: "NoContent",
      203: "NonAuthoritativeInformation",
      406: "NotAcceptable",
      404: "NotFound",
      501: "NotImplemented",
      304: "NotModified",
      200: "Ok",
      206: "PartialContent",
      412: "PreconditionFailed",
      408: "RequestTimeout",
      205: "ResetContent",
      303: "SeeOther",
      503: "ServiceUnavailable",
      307: "TemporaryRedirect",
      429: "TooManyRequest",
      401: "Unauthorized",
      422: "UnprocessableEntity",
      415: "UnsupportedMediaType",
      414: "UriTooLong"
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
