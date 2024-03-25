const ProductList = ({ productList }) => {
  return (
    <div className="mt-10">
      <h2 className="text-green-600 font-bold text-2xl">
        Our Popular Products
      </h2>
      <div className=''>
        {productList.map((product, index) =>(

        ))}
      </div>
    </div>
  );
};

export default ProductList;
