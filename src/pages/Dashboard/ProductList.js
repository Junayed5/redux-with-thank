import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProductData } from "../../redux/thunk/products/loadProducts";
import removeProductData from "../../redux/thunk/products/removeProduct";
import { useNavigate } from "react-router-dom";

const ProductList = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.product.products)
  // useEffect(() => {
  //   fetch("products.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // });
  useEffect(() => {
    dispatch(loadProductData())
  });

  return (
    <div class='flex flex-col justify-center items-center h-full w-full '>
      <div class='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
        <header class='px-5 py-4 border-b border-gray-100'>
          <div class='font-semibold text-gray-800'>Products</div>
        </header>

        <div class='overflow-x-auto p-3'>
          <table class='table-auto w-full'>
            <thead class='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
              <tr>
                <th></th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Product Name</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Brand</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>In Stock</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Price</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-center'>Action</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-center'>update</div>
                </th>
              </tr>
            </thead>

            <tbody class='text-sm divide-y divide-gray-100'>
              {products.map(({ model, brand, price, status, _id }) => (
                <tr>
                  <td class='p-2'>
                    <input type='checkbox' class='w-5 h-5' value='id-1' />
                  </td>
                  <td class='p-2'>
                    <div class='font-medium text-gray-800'>{model}</div>
                  </td>
                  <td class='p-2'>
                    <div class='text-left capitalize'>{brand}</div>
                  </td>
                  <td class='p-2'>
                    <div class='text-left'>
                      {status ? (
                        <p className='text-green-500 font-medium'>Available</p>
                      ) : (
                        <p className='text-red-500 font-medium'>Stock out</p>
                      )}
                    </div>
                  </td>
                  <td class='p-2'>
                    <div class='text-left font-medium text-indigo-500'>
                      {price}
                    </div>
                  </td>
                  <td class='p-2'>
                    <div class='flex justify-center'>
                      <button onClick={() => dispatch(removeProductData(_id))}>
                        <svg
                          class='w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td class='p-2'>
                    <div class='flex justify-center'>
                      <button onClick={() => navigate(`/dashboard/update-product/${_id}`)}>
                        <svg
                          class='w-8 h-8 hover:text-blue-600 rounded-md hover:bg-gray-100 p-1 bi bi-pen'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 16 16'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                         <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // </section>
  );
};

export default ProductList;
