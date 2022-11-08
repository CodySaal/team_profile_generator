const generateProfile = (teamArray) => {
    const cards = []

    engCard = (eng) => {
        return `
        <div class="col">
          <div class="card shadow">
            <div class="card-body text-bg-primary">
              <h5 class="card-title">${eng.name}</h5>
              <h5 class="card-title">${eng.role}</h5>
              <ul class="list-group">
                <li class="list-group-item">ID: ${eng.id}</li>
                <a class="list-group-item" href="mailto:${eng.email}">${eng.email}</a>
                <a class="list-group-item" href="https://github.com/${eng.github}" target="_blank">GitHub: ${eng.github}</a>
              </ul>
            </div>
          </div>
        </div>
        `
    }
    intCard = (int) => {
        return `
        <div class="col">
          <div class="card shadow">
            <div class="card-body text-bg-primary">
              <h5 class="card-title">${int.name}</h5>
              <h5 class="card-title">${int.role}</h5>
              <ul class="list-group">
                <li class="list-group-item">ID: ${int.id}</li>
                <a class="list-group-item" href="mailto:${int.email}">${int.email}</a>
                <li class="list-group-item">${int.school}</li>
              </ul>
            </div>
          </div>
        </div>
        `
    }
    manCard = (man) => {
        return `
        <div class="col">
          <div class="card shadow">
            <div class="card-body text-bg-primary">
              <h5 class="card-title ">${man.name}</h5>
              <h5 class="card-title">${man.role}</h5>
              <ul class="list-group">
                <li class="list-group-item">ID: ${man.id}</li>
                <a class="list-group-item" href="mailto:${man.email}">${man.email}</a>
                <li class="list-group-item">${man.office}</li>
              </ul>
            </div>
          </div>
        </div>
        `
    }

    teamArray.forEach(function(teamate) {
        if (teamate.getRole() === "Engineer") {
            cards.push(engCard(teamate))
        } else if (teamate.getRole() === "Intern") {
            cards.push(intCard(teamate))
        } else if (teamate.getRole() === "Manager") {
            cards.push(manCard(teamate))
        }
    })
    return cards.join("")
}

module.exports = (teamArray) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <header class="bg-danger text-white text-center p-5 fs-1 mb-5" >My Team</header>
    <div class="row row-cols-1 row-cols-md-3 g-4 p-3">
        ${generateHTML(teamArray)}
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>
</html>
    `
}