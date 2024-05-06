const products = [
  {
    id: 1001,
    title: "Remera Basic™ Negra",
    type: "shirt",
    description:
      "Remera estilo Oversize fabricada en tela de algodón hilado 30. Lavar a no mas de 60° con ciclos de centrifugados cortos. Industria Argentina.",
    image:
      "https://images.pexels.com/photos/1482414/pexels-photo-1482414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stock: 10,
    price: 8000,
  },
  {
    id: 1002,
    title: "Remera Basic™ Blanca",
    type: "shirt",
    description:
      "Remera estilo Oversize fabricada en tela de algodón hilado 30. Lavar a no mas de 60° con ciclos de centrifugados cortos. Industria Argentina.",
    image:
      "https://images.pexels.com/photos/8317648/pexels-photo-8317648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stock: 7,
    price: 8000,
  },
  {
    id: 1003,
    title: "Remera Basic™ Roja",
    type: "shirt",
    description:
      "Remera estilo Oversize fabricada en tela de algodón hilado 30. Lavar a no mas de 60° con ciclos de centrifugados cortos. Industria Argentina.",
    image:
      "https://images.pexels.com/photos/15006487/pexels-photo-15006487/free-photo-of-portrait-of-a-man-in-a-red-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stock: 4,
    price: 8000,
  },
  {
    id: 4001,
    title: "Musculosa Basic™ Negra",
    type: "tanktop",
    description:
      "Musculosa de algodon 100% hipoalergénico. Lavar con agua fria. Industria Argentina.",
    image:
      "https://images.pexels.com/photos/17489386/pexels-photo-17489386/free-photo-of-dark-photo-of-a-man-wearing-black-clothing-standing-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stock: 7,
    price: 6700,
  },
  {
    id: 4002,
    title: "Musculosa Basic™ Blanca",
    type: "tanktop",
    description:
      "Musculosa de algodon 100% hipoalergénico. Lavar con agua fria. Industria Argentina.",
    image:
      "https://images.pexels.com/photos/6550861/pexels-photo-6550861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stock: 8,
    price: 6700,
  },
  {
    id: 2001,
    title: "Buzo Basic™ Negro",
    type: "hoodie",
    description:
      "Buzo fabricada en poliester semi-impermeable. Lavar entre 40° y 60°. Dejar secar al aire libre. Industria Argentina.",
    image:
      "https://images.pexels.com/photos/19799420/pexels-photo-19799420/free-photo-of-woman-in-black-hoodie-sitting-on-rocks-by-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stock: 4,
    price: 11000,
  },
  {
    id: 2002,
    title: "Buzo Basic™ Blanco",
    type: "hoodie",
    description:
      "Buzo fabricada en poliester semi-impermeable. Lavar entre 40° y 60°. Dejar secar al aire libre. Industria Argentina.",
    image:
      "https://images.pexels.com/photos/6698732/pexels-photo-6698732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stock: 6,
    price: 11000,
  },
  {
    id: 3001,
    title: "Campera Basic™ Negra",
    type: "jacket",
    description:
      "Campera fabricada en algodon hilado y lino. Lavar entre 40° y 60°, modo lavado prenda delicada. Evitar blanqueadores. Industria Argentina.",
    image:
      "https://images.pexels.com/photos/8114208/pexels-photo-8114208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stock: 3,
    price: 12500,
  },
  {
    id: 3002,
    title: "Campera Basic™ Blanca",
    type: "jacket",
    description:
      "Campera fabricada en algodon hilado y lino. Lavar entre 40° y 60°, modo lavado prenda delicada. Evitar blanqueadores. Industria Argentina.",
    image:
      "https://images.pexels.com/photos/6991316/pexels-photo-6991316.jpeg?auto=compress&cs=tinysrgb&w=600",
    stock: 5,
    price: 12500,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 800);
  });
};

export const prodByType = (type) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(
        (product) => product.type === type
      );
      resolve(filteredProducts);
    }, 800);
  });
};

export const itemById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const numId = parseInt(id);
      const newProduct = products.find((item) => item.id === numId);
      resolve(newProduct);
    }, 800);
  });
};
