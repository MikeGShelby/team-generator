const generateEmployees = employeesArr => {
    return `
      <section class="row flex-row my-5">
        ${employeesArr
          .filter(({ role }) => role == 'Manager')
          .map(({ name, id, email, officeNumber }) => {
            return `
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="card text-center shadow rounded" style="height: 100%">
                    <div class="card-header bg-primary text-white text-start p-3">
                        <div class="row">
                            <h2 class="display-7">${name}</h2>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-mug-hot fa-2x"></i>
                            </div>
                            <div class="col-10">
                                <h3 class="text-start">Manager</h3>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-start fs-5 p-3">
                        <p><span class="fw-bold">ID: </span> ${id}</p>
                        <p><span class="fw-bold">Email: </span><a href="mailto:${email}">${email}</a></p>
                        <p><span class="fw-bold">Office Number: </span> ${officeNumber}</p>
                    </div>
                </div>
            </div>
          `;
          })
          .join('')}

        ${employeesArr
            .filter(({ role }) => role == 'Engineer')
            .map(({ name, id, email, github }) => {
              return `
            <div class="col-12 col-md-6 col-lg-4 mb-4">
              <div class="card text-center shadow rounded" style="height: 100%">
                  <div class="card-header bg-success text-white text-start p-3">
                      <div class="row">
                          <h2 class="display-7">${name}</h2>
                      </div>
                      <div class="row">
                          <div class="col-2">
                              <i class="fas fa-glasses fa-2x"></i>
                          </div>
                          <div class="col-10">
                              <h3 class="text-start">Engineer</h3>
                          </div>
                      </div>
                  </div>
                  <div class="card-footer text-start fs-5 p-3">
                      <p><span class="fw-bold">ID: </span> ${id}</p>
                      <p><span class="fw-bold">Email: </span><a href="mailto:${email}">${email}</a></p>
                      <p><span class="fw-bold">GitHub: </span><a href="https://github.com/${github}">${github}</a></p>
                  </div>
              </div>
            </div>
            `;
            })
            .join('')}

            ${employeesArr
                .filter(({ role }) => role == 'Intern')
                .map(({ name, id, email, school }) => {
                  return `
                <div class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="card text-center shadow rounded style="height: 100%">
                        <div class="card-header bg-warning text-white text-start p-3">
                            <div class="row">
                                <h2 class="display-7">${name}</h2>
                            </div>
                            <div class="row">
                                <div class="col-2">
                                    <i class="fas fa-user-graduate fa-2x"></i>
                                </div>
                                <div class="col-10">
                                    <h3 class="text-start">Intern</h3>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-start fs-5 p-3">
                            <p><span class="fw-bold">ID: </span> ${id}</p>
                            <p><span class="fw-bold">Email: </span><a href="mailto:${email}">${email}</a></p>
                            <p><span class="fw-bold">School: </span>${school}</p>
                        </div>
                    </div>
                </div>
                `;
                })
                .join('')}
      </section>
    `;
  };


module.exports = teamData => {
    // destructure employees array from teamData
    const { employees } = teamData;

    return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Team Profile</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
  </head>

  <body>
    <header class="header bg-dark shadow-sm text-center">
        <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-white py-2 px-3 center">My Team</h1>
        </div>
      </div>
    </header>

    <main class="container">
        ${generateEmployees(employees)}
    </main>
  </body>
  </html>
  `;
};