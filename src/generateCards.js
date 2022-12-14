const generateProfile = (teamArray) => {
    const cards = []
    // Creates engineer card
    engCard = (eng) => {
        console.log(eng)
        return `
        <div class="col">
          <div class="card shadow">
            <div class="card-body text-bg-primary">
              <h5 class="card-title">${eng.name}</h5>
              <h5 class="card-title">${eng.role}</h5>
              <ul class="list-group">
                <li class="list-group-item">ID: ${eng.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${eng.email}"> ${eng.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${eng.github}" target="_blank">${eng.github}</a></li>
              </ul>
            </div>
          </div>
        </div>
        `
    }
    // Creates intern card
    intCard = (int) => {
        console.log(int)
        return `
        <div class="col">
          <div class="card shadow">
            <div class="card-body text-bg-primary">
              <h5 class="card-title">${int.name}</h5>
              <h5 class="card-title">${int.role}</h5>
              <ul class="list-group">
                <li class="list-group-item">ID: ${int.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${int.email}"> ${int.email}</a></li>
                <li class="list-group-item">School: ${int.school}</li>
              </ul>
            </div>
          </div>
        </div>
        `
    }
    // Creates manager card
    manCard = (man) => {
        console.log(man)
        return `
        <div class="col">
          <div class="card shadow">
            <div class="card-body text-bg-primary">
              <h5 class="card-title ">${man.name}</h5>
              <h5 class="card-title">${man.role}</h5>
              <ul class="list-group">
                <li class="list-group-item">ID: ${man.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${man.email}"> ${man.email}</a></li>
                <li class="list-group-item">Office number: ${man.officeNumber}</li>
              </ul>
            </div>
          </div>
        </div>
        `
    }
    // Loops through teamArray and generates a card based on role for each teamate
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
// Generates actual HTML page with cards
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
        ${generateProfile(teamArray)}
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>
</html>
    `
}