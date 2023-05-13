import './App.css';
import './fonts/argentum-sans.black.ttf';
import './fonts/argentum-sans.semibold.ttf';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import ComponentsTable from './components/tables/components_table/ComponentsTable';
import OrdersTable from './components/tables/orders_table/OrdersTable';
import ProductsTable from './components/tables/products_table/ProductsTable';
import StorageUnitsTable from "./components/tables/storage_unit_table/StorageUnitsTable";

function App() {

    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/orders" element={<OrdersTable/>}></Route>
                    <Route path="/products" element={<ProductsTable/>}></Route>
                    <Route path="/components" element={<ComponentsTable/>}></Route>
                    <Route path="/storage" element={<StorageUnitsTable/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
