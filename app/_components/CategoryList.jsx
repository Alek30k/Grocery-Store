import Image from "next/image";

const CategoryList = ({ categoryList }) => {
  return (
    <div className="mt-5">
      <h2 className="text-green-600 font-bold text-2xl">Shop by Category</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
        {categoryList.map((category, index) => (
          <div className="" key={index}>
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                category?.attributes?.icon?.data[0]?.attributes?.url
              }
              width={50}
              height={50}
              alt="icon"
            />
            <h2 className="">{category.attributes.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
