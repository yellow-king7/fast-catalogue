import React from "react";

export type CategoryListType = {
  id: number;
  name: string;
};
export type CategoryListProps = {
  filterCategories: (categoryId?: number) => void;
  children: React.ReactNode;
};
