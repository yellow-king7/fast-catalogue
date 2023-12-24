import { useState } from "react";
import "./App.css";
import { CategoryList } from "./catgeory-list/category-list";
import { FastFoodList } from "./fastfood-list/fastfood-list";
import { Header } from "./header/header";
import { Loading } from "./loading/loading";
import { SearchBar } from "./search-bar/search-bar";
import { useAxios } from "./core/useAxios";

function App() {
  // const [loading, setLoading] = useState<boolean>(false);
  // const [fastFoods, setFastFoods] = useState<FastfoodType[]>([]);
  // const fetchData = async (categoryId?: number) => {
  //   setLoading(true);
  //   const response = await axios.get(
  //     `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
  //   );
  //   setFastFoods(response.data);
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const [url, setUrl] = useState("/FastFood/list");
  const { data: fastFoods, loading } = useAxios({
    url: url,
  });

  const filterCategories = (categoryId?: number | undefined) => {
    setUrl(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`);
  };

  const searchCategories = async (term?: string | undefined) => {
    setUrl(`/FastFood/search/${term ? "?term=" + term : ""}`);
  };
  const renderedContent = () => {
    if (loading) return <Loading theme="red" />;
    return <FastFoodList fastfoods={fastFoods} />;
  };
  return (
    <div className="bg-black/10 min-h-screen">
      <Header />
      <CategoryList filterCategories={filterCategories}>
        <SearchBar searchCategories={searchCategories} />
      </CategoryList>
      <div className="container mx-auto mt-6">{renderedContent()}</div>
    </div>
  );
}

export default App;
