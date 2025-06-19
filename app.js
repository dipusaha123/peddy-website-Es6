const loadcategories = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/peddy/categories")
    const data = await response.json();
   showCategory(data.categories)
}

const showCategory = (categories) => {
    categories.forEach((element) => {
        const categoriesContainer = document.getElementById("category-container");
        
        const div = document.createElement("div");
        div.innerHTML = `
        <button onclick ="loadpats('${element.category}')" class = "btn">${element.category}
         <img class = "w-8 " src="${element.category_icon}" alt="">
        </button>     
        `;

        categoriesContainer.appendChild(div)
        
    });
}


const loadpats = async(categories) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categories}`)

    const data = await response.json();
    dislaypats(data.data)
}

const dislaypats = (pets) => {
    console.log(pets)

    if(pets.length<1){
         document.getElementById("petContainer").style.display = "none";
    }

    pets.forEach((pet) =>{
        
        const petContainer = document.getElementById("petContainer");
        petContainer.innerHTML = " ";
        const div = document.createElement("div");
        div.classList.add("mt-5")
        div.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                    src=${pet.image}
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${pet.breed}</h2>
                    <p>${pet.pet_details.slice(0,100)}</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Select</button>
                    </div>
                </div>
                </div>
        `;
        petContainer.appendChild(div)
        
    })

}
loadpats("dog")
loadcategories()