import { useEffect, useState } from "react";
import axios from "axios";
import { CategoryListType } from "../catgeory-list/category-list.types";
import { FastfoodType } from "../types/fastfood.type";

export type DataType = CategoryListType | FastfoodType;
const instance = axios.create({
  baseURL: "https://react-mini-projects-api.classbon.com",
});
export const useAxios = (axiosParams: { url: string }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | unknown>("");
  const [data, setData] = useState<DataType[] | undefined>();
  const fetchData = async () => {
    try {
      const response = await instance.request(axiosParams);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [axiosParams.url]);
  return { loading, error, data };
};
