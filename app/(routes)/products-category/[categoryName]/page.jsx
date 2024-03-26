import GlobalApi from "@/app/_utils/GlobalApi";

const ProductCategory = async ({ params }) => {
  const productList = await GlobalApi.getAllProductsByCategory(
    params.categoryName
  );

  return (
    <div className="">
      <h2 className="p-4 bg-primary text-white font-bold text-center">
        {params.categoryName}
      </h2>
    </div>
  );
};

export default ProductCategory;
