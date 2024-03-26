import GlobalApi from "@/app/_utils/GlobalApi";
import TopCategoryList from "../_components/TopCategoryList";

const ProductCategory = async ({ params }) => {
  const productList = await GlobalApi.getAllProductsByCategory(
    params.categoryName
  );

  const categoryList = await GlobalApi.getCategoryList();

  return (
    <div className="">
      <h2 className="p-4 bg-primary text-white font-bold text-center">
        {params.categoryName}
      </h2>
      <TopCategoryList categoryList={categoryList} />
    </div>
  );
};

export default ProductCategory;
