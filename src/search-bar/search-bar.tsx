import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { SearchBarProps } from "./search-bar.types";

export const SearchBar: React.FC<SearchBarProps> = ({ searchCategories }) => {
  const [value, setValue] = useState<string>("");
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchCategories(value);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex-grow">
        <div className="input-group relative">
          <input
            type="text"
            className="w-full border border-gray-300 p-2 pr-8 text-md placeholder:text-gray-400 placeholder:font-semibold rounded-md outline-none"
            placeholder="جستجوی فست فود..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <BsSearch className=" absolute top-1/2 mr-2 -translate-y-1/2 text-gray-500" />
        </div>
      </form>
    </>
  );
};
