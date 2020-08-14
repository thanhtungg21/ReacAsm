import React, { useState ,useEffect} from 'react';
// import Products from './components/Products';
// import Box from './components/Box/Box';
// import Product from './components/Product';
import Routers from './routers'
import apiRequet from './api/productApi';

// import AddProduct from './components/AddProduct';
function App() {


    //danh sach cua san pham
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequet.getAll();
        setProducts(data);

      } catch (error) {
        console.log('loi api', error)
      }
    }
    getProducts()
  }, []);


  // Them san pham
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequet.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

 // xoa san pham
 const onHandleRemove = async (id) => {
  try {
    const {} = await apiRequet.remove(id);
    const newProducts = products.filter(product => product.id !== id);
    setProducts(newProducts);
  } catch (error) {
    console.log('failed to request API: ', error)
  }
      
}

// Cập nhật product 
const onHandleUpdate = async (updateProduct) => {
  try {
    const { data } = await apiRequet.update(updateProduct.id, updateProduct);
    const newProducts = products.map(product => (
      product.id === data.id ? data : product
    ));
    setProducts(newProducts);
  } catch (error) {
    console.log('loi api', error)
  }

}

  return (
    <div className="App">
      <Routers products={products} onRemove={onHandleRemove}  onAdd={onHandleAdd} onUpdate={onHandleUpdate}/>
    </div>
  )

}
export default App;