import Image from "next/image";
import Link from "next/link";

const TopCategoryList = ({ categoryList }) => {
  return (
    <div className="flex gap-5 mt-2">
      {categoryList.map((category, index) => (
        <Link
          href={"/products-category/" + category.attributes.name}
          className="flex flex-col items-center bg-green-50 gap-2 p-4 rounded-lg group cursor-pointer hover:bg-green-200"
          key={index}
        >
          <Image
            src={
              process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
              category?.attributes?.icon?.data[0]?.attributes?.url
            }
            width={50}
            height={50}
            alt="icon"
            className="group-hover:scale-125 transition-all ease-in-out pointer-events-none"
          />
          <h2 className="text-green-800">{category.attributes.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default TopCategoryList;
