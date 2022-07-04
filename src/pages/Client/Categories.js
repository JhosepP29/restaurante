import React, { useEffect } from "react";
import { useCategory } from "../../hooks";
import { ListCategories } from "../../components/Client";
import "./Categories.scss";

export function Categories() {
  const { loading, categories, getCategories } = useCategory();

  useEffect(() => getCategories(), []);

  return (
    <div>
      <h3 className="titulo">CATEGORIA</h3>
      <hr></hr>
      {loading ? <p>Cargando</p> : <ListCategories categories={categories} />}
    </div>
  );
}
