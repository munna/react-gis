function template(title, initialState = {}, content = ""){
    let scripts = '';
    if(content){
      scripts = ` <script>
                     window.__STATE__ = ${JSON.stringify(initialState)}
                  </script>
                  <script src="dist/client.js"></script>
                  `
    } else {
      scripts = ` <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.0/js/bootstrap.min.js" ></script>
        <script src="dist/bundle.js"> </script> `
    }
    let page = `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="utf-8">
                  <title> ${title} </title>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.0/css/bootstrap.min.css">
                  <script src="https://use.fontawesome.com/db6c401a9f.js"></script>
                  <link href="dist/style.css" rel="stylesheet">
                </head>
                <body>
                  <div class="content">
                     <div id="app" class="wrap-inner">
                        <!--- magic happens here -->  ${content}
                     </div>
                  </div>
                    ${scripts}
                </body>
                </html>
                `;
  
    return page;
  }
  
  module.exports = template;