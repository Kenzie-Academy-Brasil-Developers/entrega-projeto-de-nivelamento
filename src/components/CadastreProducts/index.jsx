import { useState } from "react";

const CadastreProducts = ({ setProducts, products }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const addNewProduct = () => {
    setProducts([
      ...products,
      {
        code: id,
        name: name,
        description: description,
        price: price,
        discount: discount,
      },
    ]);
  };

  return (
    <>
      <div>
        <input
          placeholder="id"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
        />
        <input
          placeholder="Nome do produto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <input
          placeholder="Desconto"
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
        />
        <button onClick={addNewProduct}>Adicionar Produtos</button>
      </div>
    </>
  );
};

export default CadastreProducts;
