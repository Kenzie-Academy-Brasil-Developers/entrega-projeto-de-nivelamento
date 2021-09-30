import "./styles.css";

const DisplayProducts = ({ products }) => {
  return (
    <>
      <div className="container">
        {products.map((item, index) => (
          <div className="product" key={index}>
            <div>{item.name}</div>
            <div> {item.description}</div>{" "}
            <div>
              Preço: R${item.price}, Desconto: R$
              {item.discount}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayProducts;
