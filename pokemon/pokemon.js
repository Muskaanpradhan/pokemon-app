let select = document.querySelector("#poketype");
let input = document.querySelector("input");
let button = document.querySelector("button");
let div = document.querySelector(".show");
let load = document.querySelector(".more");
let limit = 20;
let offset = 0;
// console.log(offset)

select.addEventListener("change", () => {
    // div.innerHTML = ""
})

com();

function com() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset)
    .then((response) => {
      return response.json();
    })
    .then(showResult);
    console.log(offset)

  function showResult(rs) {
    // console.log(rs);

    for (i = 0; i <= rs.results.length - 1; i++) {
      let img = document.createElement("img");
      let names = document.createElement("h4");
      let type = document.createElement("h5");
      let div2 = document.createElement("div");
      let url = rs.results[i].url;
      fetch(url)
        .then((output) => {
          return output.json();
        })
        .then((x) => {
       //   if (x.types[0].type.name == select.value) {
            img.src = x.sprites.other.dream_world.front_default;
            // console.log(x);
            let type2 = x.types[0].type.name;
            type.innerHTML = type2;
            // console.log(type2);
        //  }
        });

      let data = rs.results[i].name;
    //   console.log(data);

      names.innerHTML = data;
      div.append(div2);
      div2.classList.add("black");
      div2.append(img, names, type);
    }
  }
}

load.addEventListener("click", () => {
  offset += limit;
//   console.log(offset);
  com();
});
