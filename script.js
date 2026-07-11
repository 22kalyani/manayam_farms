//================ IMAGE SLIDER =================//

const slides = document.querySelectorAll(".slide");

let index = 0;

setInterval(() => {

    slides[index].classList.remove("active");

    index++;

    if(index >= slides.length){
        index = 0;
    }

    slides[index].classList.add("active");

},3000);


//================ PRODUCTS =================//

const products = {

    millets:{

        "Finger Millet (Ragi)":{
            image:"ragi.png",
            benefits:[
                "Rich in Calcium",
                "High in Fiber",
                "Helps Control Diabetes",
                "Strengthens Bones",
                "Gluten Free"
            ]
        },

        "Pearl Millet (Sajjalu)":{
            image:"sajjalu.jpeg",
            benefits:[
                "Rich in Iron",
                "Improves Digestion",
                "Boosts Energy",
                "Heart Friendly"
            ]
        },

        "Foxtail Millet (Korra)":{
            image:"korru.png",
            benefits:[
                "Low Glycemic Index",
                "Rich in Protein",
                "Supports Weight Loss"
            ]
        },

        "Little Millet (Samalu)":{
            image:"samalu.png",
            benefits:[
                "High in Antioxidants",
                "Good for Digestion",
                "Rich in Minerals"
            ]
        },

        "Sorghum (Jonnalu)":{
            image:"jonnalu.png",
            benefits:[
                "High Fiber",
                "Rich Protein",
                "Improves Heart Health"
            ]
        }

    },

    pulses:{

        "Kandulu (Red Gram)":{
            image:"kandulu.png",
            benefits:[
                "Rich in Protein",
                "Improves Muscle Growth",
                "Good Source of Iron",
                "Supports Heart Health",
                "Boosts Energy"
            ]
        },

        "Pesalu (Moong Dal)":{
            image:"pesalu.png",
            benefits:[
                "Easy to Digest",
                "High in Protein",
                "Rich in Vitamins",
                "Supports Weight Loss",
                "Boosts Immunity"
            ]
        },

        "Minumulu (Urad Dal)":{
            image:"minumulu.png",
            benefits:[
                "Rich in Calcium",
                "Strengthens Bones",
                "Improves Digestion",
                "Good for Skin",
                "High in Protein"
            ]
        },

        "Senagalu (Bengal Gram)":{
            image:"senagalu.png",
            benefits:[
                "High in Fiber",
                "Rich in Protein",
                "Supports Weight Loss",
                "Controls Blood Sugar",
                "Improves Digestion"
            ]
        },

        "Ulavalu (Horse Gram)":{
            image:"ulavalu.png",
            benefits:[
                "Good for Diabetes",
                "Rich in Iron",
                "High in Protein",
                "Helps Weight Loss",
                "Improves Kidney Health"
            ]
        },

        "Alasandalu (Cowpea)":{
            image:"alasandalu.png",
            benefits:[
                "Rich in Fiber",
                "Heart Healthy",
                "Improves Digestion",
                "Good Source of Protein",
                "Supports Healthy Bones"
            ]
        }

    },

    snacks:{

        "Millet Laddu":{
            image:"laddu.png",
            benefits:[
                "Healthy Traditional Sweet",
                "Rich in Fiber",
                "Natural Energy Booster",
                "No Artificial Preservatives",
                "Suitable for All Ages"
            ]
        },

        "Millet Biscuits":{
            image:"biscuit.png",
            benefits:[
                "Whole Grain Snack",
                "Low in Refined Sugar",
                "Rich in Fiber",
                "Healthy Tea-Time Snack",
                "Made with Organic Millets"
            ]
        },

        "Roasted Millets":{
            image:"roasted.png",
            benefits:[
                "Crunchy and Delicious",
                "High in Protein",
                "Rich in Dietary Fiber",
                "Ready-to-Eat Snack",
                "No Artificial Flavors"
            ]
        },

        "Millet Bars":{
            image:"bars.png",
            benefits:[
                "Instant Energy",
                "High in Fiber",
                "Rich in Protein",
                "Perfect for Travel",
                "Ideal for Fitness Lovers"
            ]
        }

    }

};


//================ SHOW CATEGORY =================//

function showCategory(category){

    const list=document.getElementById("product-list");
    const details=document.getElementById("product-details");

    list.innerHTML="";
    details.innerHTML="";

    for(let product in products[category]){

        const card=document.createElement("div");

        card.className="product-card";

        card.innerHTML=`<h3>${product}</h3>`;

        card.onclick=function(){

            showDetails(category,product);

        };

        list.appendChild(card);

    }

}


//================ SHOW DETAILS =================//

function showDetails(category,product){

    const details=document.getElementById("product-details");

    const item=products[category][product];

    let html=`

    <div class="details-container">

        <div class="details-image">
            <img src="images/${item.image}" alt="${product}">
        </div>

        <div class="details-content">

            <h2>${product}</h2>

            <h3>Health Benefits</h3>

            <ul>
    `;

    item.benefits.forEach(function(benefit){

        html+=`<li>✔ ${benefit}</li>`;

    });

    html+=`

            </ul>

        </div>

    </div>

    `;

    details.innerHTML=html;

}


//================ DEFAULT =================//

showCategory("millets");