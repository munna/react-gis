"use strict";

function template(title) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  var scripts = '';
  if (content) {
    scripts = " <script>\n                     window.__STATE__ = " + JSON.stringify(initialState) + "\n                  </script>\n                  <script src=\"dist/client.js\"></script>\n                  ";
  } else {
    scripts = " <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js\"></script>\n      <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\"></script>\n      <script src=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.0/js/bootstrap.min.js\" ></script>\n        <script src=\"dist/bundle.js\"> </script> ";
  }
  var page = "<!DOCTYPE html>\n                <html lang=\"en\">\n                <head>\n                  <meta charset=\"utf-8\">\n                  <title> " + title + " </title>\n                  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.0/css/bootstrap.min.css\">\n                  <script src=\"https://use.fontawesome.com/db6c401a9f.js\"></script>\n                  <link href=\"dist/style.css\" rel=\"stylesheet\">\n                </head>\n                <body>\n                  <div class=\"content\">\n                     <div id=\"app\" class=\"wrap-inner\">\n                        <!--- magic happens here -->  " + content + "\n                     </div>\n                  </div>\n                    " + scripts + "\n                </body>\n                </html>\n                ";

  return page;
}

module.exports = template;