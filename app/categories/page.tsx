import CategoryBox from "@/components/CategoryBox";
import GameHeader from "@/components/GameHeader";
import { getCategories } from "@/lib";

const page = () => {
  const categories = getCategories();

  return (
    <div className="w-full lg:w-[90vw] min-h-screen max-lg:w-[90vw] text-white py-15 text-center mx-auto">
      <GameHeader title="Pick a Category" position="absolute" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-30">
        {categories?.map((c, index) => (
          <CategoryBox
            key={index}
            title={c.label}
            wait={index * 0.3}
            icon={c.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
