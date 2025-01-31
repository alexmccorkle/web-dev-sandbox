import { Product } from "../../sanity.types";

interface ProductsViewProps {
  products: Product[];
}

const ProductsView = ({ products }: ProductsViewProps) => {
  return (
    <div>
      {/* categories */}
      <div></div>
      {/* products */}
      <div flex-1>
        <div>
          {/* <ProductGrid products={products} /> */}

          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
