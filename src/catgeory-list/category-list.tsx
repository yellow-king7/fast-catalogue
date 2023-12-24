import { CategoryListProps } from "./category-list.types";
import "./category-list.css";
import { Loading } from "../loading/loading";
import { useAxios } from "../core/useAxios";
export const CategoryList: React.FC<CategoryListProps> = ({
  filterCategories,
  children,
}) => {
  const { loading, data: categories } = useAxios({
    url: "/FoodCategory/categories",
  });

  const renderedContent = () => {
    if (loading) return <Loading />;
    return (
      <div className="h-full flex items-center justify-between gap-8">
        <ul className="flex items-center  h-full gap-10 ms-5">
          <li
            className="nav-item cursor-pointer"
            onClick={() => filterCategories()}
          >
            <a className="nav-link">همه فست فودها</a>
          </li>
          {categories?.map((category) => (
            <li
              className="nav-item cursor-pointer"
              key={category.id}
              onClick={() => filterCategories(category.id)}
            >
              <a className="nav-link">{category.name}</a>
            </li>
          ))}
        </ul>
        {children}
      </div>
    );
  };

  return (
    <nav className="container mx-auto">
      <div className=" bg-white rounded-md shadow-sm h-20 -mt-10 px-2">
        {renderedContent()}
      </div>
    </nav>
  );
};
