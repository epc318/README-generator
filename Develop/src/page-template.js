//CREATE DYTNAMIC Sections here:





//using module.exports to export the function so it may generate the README page.
module.exports = readmeTemplate => { 
    const {, } = readmeTemplate;
    return `

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Professional README</title>
      <link rel="stylesheet" href="style.css">
    </head> 

    <body>
        <header>
        </header>


        <main>
        </main>


        <footer>
        </footer>
    </body>
    </html>
    `;
};