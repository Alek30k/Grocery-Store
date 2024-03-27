import GlobalApi from "@/app/_utils/GlobalApi";
import TopCategoryList from "../_components/TopCategoryList";
import ProductList from "@/app/_components/ProductList";

const ProductCategory = async ({ params }) => {
  const productList = await GlobalApi.getAllProductsByCategory(
    params.categoryName
  );

  const categoryList = await GlobalApi.getCategoryList();

  return (
    <div className="">
      <h2 className="p-2 bg-primary text-white text-2xl font-bold text-center">
        {params.categoryName}
      </h2>
      <TopCategoryList
        categoryList={categoryList}
        selectedCategory={params.categoryName}
      />
      <div className="p-5 md:p-10">
        <ProductList productList={productList} />
      </div>
    </div>
  );
};

export default ProductCategory;
