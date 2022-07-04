import React, { useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import { useProduct } from "../../hooks";
import { ListProducts } from "../../components/Client";
import { Button } from "semantic-ui-react";

export function Products() {
  const { tableNumber, idCategory } = useParams();
  const { loading, products, getProductsByCategory } = useProduct();

  useEffect(() => getProductsByCategory(idCategory), [idCategory]);

  return (
    <div>
    
      <Button><Link to={`/client/${tableNumber}`}>Volver a categorias</Link></Button>
    
      {loading ? <p>Cargando...</p> : <ListProducts products={products} />}
    </div>
  );
}
