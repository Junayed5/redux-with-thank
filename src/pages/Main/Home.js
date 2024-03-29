import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { toggleBrand, toggleStock } from "../../redux/actions/filterAction";
import { loadProducts } from "../../redux/actions/productAction";
import { loadProductData } from "../../redux/thunk/products/loadProducts";

const Home = () => {
  // const [products, setProducts] = useState([]);
  const filterBrand = useSelector(state => state.filter.filters)
  const products = useSelector(state => state.product.products)
  const { brands, stock } = filterBrand;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductData())
  }, []);

  const activeClass = "text-white  bg-indigo-500 border-white";

  let content;

  if (products.length) {
    content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ))
  }

  if (products.length && (stock || brands.length)) {
    content = products
    .filter(product => {
      if (stock) {
        return product.status === true
      }
      return product
    })
    .filter(product => {
      if (brands.length) {
        return brands.includes(product.brand)
      }
      return product
    })
    .map((product) => (
      <ProductCard key={product.model} product={product} />
    ))
  }


  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button onClick={() => dispatch(toggleStock())}
          className={`border px-3 py-2 rounded-full font-semibold ${stock && activeClass} `}
        >
          In Stock
        </button>
        <button onClick={() => dispatch(toggleBrand("amd"))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("amd") && activeClass}`}>
          AMD
        </button>
        <button onClick={() => dispatch(toggleBrand("intel"))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("intel") && activeClass}`}>
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {content}
      </div>
    </div>
  );
};

export default Home;
