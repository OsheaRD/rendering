const { directive } = require("@babel/types");

function renderNametags(nametags) {
    let names =[];
    nametags.forEach(function(name) {
        let html = 
        <div>
            <div class=
        </div>
        names.push(name);
    });
    return `
        ${names.join("")}
            <div class="text-center mt-5">
          
        </div>
    `
}

// nametags is array

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}
