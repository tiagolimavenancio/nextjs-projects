import React from "react";
import { GetStaticProps } from "next";

import api from "../service/api";

interface ICategories {
  id: number;
  title: string;
}

interface CategoriesProps {
  categories: ICategories[];
}

function Categories({ categories }: CategoriesProps) {
  return (
    <div>
      <h1>Categories</h1>

      <section>
        <ul>
          {categories.map((categorie) => {
            return <li key={categorie.id}>{categorie.title}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<CategoriesProps> = async () => {
  const response = await api.get("http://localhost:3001/categories");
  const categories = await response.data;

  return {
    props: {
      categories,
    },
    revalidate: 5,
  };
};

export default Categories;
