const TotalValue = ({ products }) => {
  const totalShop = products.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);

  const totalDiscount = products.reduce((accumulator, item) => {
    return accumulator + item.discount;
  }, 0);
  return (
    <>
      <div>Valor Total: R${totalShop - totalDiscount}</div>
      <div>Total de Descontos: R${totalDiscount.toFixed(2)}</div>
    </>
  );
};

export default TotalValue;
