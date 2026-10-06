const products = [
  { id: 1, title: "Laptop", price: 80000, rating: { rate: 4.5, count: 120 }, tags: ["tech", "work"] },
  { id: 2, title: "Headphones", price: 3500, rating: { rate: 4.1, count: 80 }, tags: ["music", "tech"] },
  { id: 3, title: "Backpack", price: 2500, rating: { rate: 3.8, count: 45 }, tags: ["bag", "travel"] },
  { id: 4, title: "Keyboard", price: 4000, rating: { rate: 4.7, count: 200 }, tags: ["tech", "gaming"] },
  { id: 5, title: "Water Bottle", price: 600, rating: { rate: 4.0, count: 30 }, tags: ["daily", "travel"] }
];


const a=products.map(({title,price})=>
`${title}-${price}`
)

const b=products.map(({title,rating:{rate,count}})=>
`${title} :${rate} -${count}`
)

const firstTags = products.map(({ tags: [firstTag] }) => firstTag);



console.log("a:",a);
console.log("b",b)
console.log( "firsttag",firstTags);


