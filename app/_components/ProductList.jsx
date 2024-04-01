import ProductItem from "./ProductItem";

const ProductList = ({ productList }) => {
  return (
    <div className="mt-10">
      <h2 className="text-green-600 font-bold text-2xl">
        Our Popular Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
        {productList.length === 0 ? (
          <div className="flex flex-col gap-10 items-center justify-center w-[100vw]">
            <h1 className="text-primary font-bold text-5xl">Oops!</h1>
            <p className="text-gray-400 text-2xl ">
              It seems that this category does not have products!
            </p>
          </div>
        ) : (
          productList.map(
            (product, index) =>
              index < 8 && <ProductItem product={product} key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default ProductList;
