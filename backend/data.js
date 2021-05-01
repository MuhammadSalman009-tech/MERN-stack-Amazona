const { hashSync } = require("bcrypt");

module.exports.users=[
    {
        name:'Muhammad Salman',
        email:'salmansumra009@gmail.com',
        password:hashSync("salman009",12),
        isAdmin:true,
    },
    {
        name:'Adeel Yaqoob',
        email:'adeelyaqoob009@gmail.com',
        password:hashSync("adeel009",12),
        isAdmin:false,
    },
];
module.exports.products=[
    {
        name:"Nike Shirt",
        shortDescription:"This is nike shirt description.",
        description:"This is nike shirt description.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ducimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ducimus.",
        image:"/assets/images/uthappizza.png",
        quantity:0,
        price:123,
        rating:4.5,
        numReviews:10,
        brand:"Nike",
        category:"shirt"
    },
    {
        name:"Nike shoes",
        shortDescription:"This is nike shoes description",
        description:"This is nike shoes description.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ducimus.",
        image:"/assets/images/buffet.png",
        quantity:20,
        price:24,
        rating:4.0,
        numReviews:10,
        brand:"Nike",
        category:"shoes"
    },
    {
        name:"Nike bag",
        shortDescription:"This is nike bag description.",
        description:"This is nike bag description.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ducimus.",
        image:"/assets/images/vadonut.png",
        quantity:2,
        price:140,
        rating:3.5,
        numReviews:13,
        brand:"Nike",
        category:"bag"
    },
    {
        name:"Puma shirt",
        shortDescription:"This is puma shirt description.",
        description:"This is puma shirt description.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ducimus.",
        image:"/assets/images/zucchipakoda.png",
        quantity:0,
        price:12,
        rating:4.5,
        numReviews:17,
        brand:"Puma",
        category:"shirt"
    },
    {
        name:"Puma Slim Pant",
        shortDescription:"This is puma pant description.",
        description:"This is puma pant description.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ducimus.",
        image:"/assets/images/elaicheesecake.png",
        quantity:110,
        price:110,
        rating:2,
        numReviews:13,
        brand:"Puma",
        category:"pant"
    },
    {
        name:"Addidas Shirt",
        shortDescription: "This is addidas shirt description.",
        description:"This is addidas shirt description.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ducimus.",
        image:"/assets/images/uthappizza.png",
        quantity:10,
        price:76,
        rating:4.5,
        numReviews:10,
        brand:"Addidas",
        category:"shirt"
    },
]