var his = document.getElementById("history");
var vis = document.getElementById("vision");
var goa = document.getElementById("goals");

his.addEventListener("click",() => {
    his.classList.remove("btn-secondary");
    his.classList.add("btn-white");
    vis.classList.remove("btn-white");
    goa.classList.remove("btn-white");
    vis.classList.add("btn-secondary");
    goa.classList.add("btn-secondary");

    document.getElementById("description").innerText="";

    let text = `
    <h5>History</h5>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate modi sit, recusandae, nulla possimus voluptatem illum voluptatibus distinctio optio aspernatur illo consequatur expedita natus reiciendis molestias doloremque! Accusantium aperiam vitae at explicabo nihil iure dolorem, consequatur deleniti? Aspernatur, harum?</p>
    `;

    document.getElementById("description").insertAdjacentHTML("beforeend",text);
})

vis.addEventListener("click",() => {
    vis.classList.remove("btn-secondary");
    vis.classList.add("btn-white");
    his.classList.remove("btn-white");
    goa.classList.remove("btn-white");
    his.classList.add("btn-secondary");
    goa.classList.add("btn-secondary");

    document.getElementById("description").innerText="";
    
    let text = `
    <h5>Vision</h5>
    <p>Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.

    list item
    list item
    list item</p>
    `;

    document.getElementById("description").insertAdjacentHTML("beforeend",text);
})

goa.addEventListener("click",() => {
    goa.classList.remove("btn-secondary");
    goa.classList.add("btn-white");
    his.classList.remove("btn-white");
    vis.classList.remove("btn-white");
    his.classList.add("btn-secondary");
    vis.classList.add("btn-secondary");

    document.getElementById("description").innerText="";

    let text = `
    <h5>Goals</h5>
    <p>Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.</p>
    `;

    document.getElementById("description").insertAdjacentHTML("beforeend",text);
})

let myMediaQuery = window.matchMedia('(min-width: 600px)');
 
function widthChangeCallback(myMediaQuery) {
  if(myMediaQuery.matches) {
    document.querySelector("#container").classList.add("container");
    document.querySelector(".row").children[2].classList.remove("col-12");
    document.querySelector(".row").children[2].classList.add("col-6");
    document.querySelector(".row").children[3].classList.remove("col-12");
    document.querySelector(".row").children[3].classList.add("col-6");
   } else {
    document.querySelector(".container").classList.remove("container");
    document.querySelector(".row").children[2].classList.remove("col-6");
    document.querySelector(".row").children[2].classList.add("col-12");
    document.querySelector(".row").children[3].classList.remove("col-6");
    document.querySelector(".row").children[3].classList.add("col-12");
   }
}
 
myMediaQuery.addEventListener('change', widthChangeCallback);