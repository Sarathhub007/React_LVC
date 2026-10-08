

export default function Demo1() {
  const products = [
    {
      id: 1,
      name: "TV",
      cost: 15000,
      brand: "LG",
      color:"black"
    },
    {
      id: 2,
      name: "iPhone",
      cost: 80000,
      brand: "apple",
       color:"black"
    },
    {
      id: 3,
      name: "Laptop",
      cost: 100000,
      brand: "Dell",
       color:"white"
    },
    {
      id: 4,
      name: "Buds",
      cost: 1000,
      brand: "Boat",
         color:"black"
      
    },
  ];
  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <h2 >{p.name}</h2>
          <h2>{p.cost}</h2>
          <h2>{p.brand}</h2>
          <h2 >{p.color}</h2>
        </div>
      ))
      }
    </div>
  );
}
