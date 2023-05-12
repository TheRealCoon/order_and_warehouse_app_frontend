import './App.css';
import './fonts/argentum-sans.black.ttf';
import './fonts/argentum-sans.semibold.ttf';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import ComponentsTable from './components/tables/components_table/ComponentsTable';

function App() {
    const [orders, setOrders] = useState();
    const [products, setProducts] = useState();
    const [components, setComponents] = useState();
    const [storageUnits, setStorageUnits] = useState();

    const getOrders = async () => {
        try {
            const response = await api.get("/orders");
            setOrders(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const getProducts = async () => {
        try {
            const response = await api.get("/products");
            setProducts(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const getComponents = async  () => {
        try {
            const response = await api.get("/components");
            setComponents(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const getStorageUnits = async () =>{
        try {
            const response = await api.get("/storage");
            setStorageUnits(response.data);
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        getOrders();
        getProducts();
        getComponents();
        getStorageUnits();
    }, [])

    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/orders" element={orders}></Route>
                    <Route path="/products" element={products}></Route>
                    <Route path="/components" element={<ComponentsTable components={components}/>}></Route>
                    <Route path="/storage" element={storageUnits}></Route>
                </Route>
            </Routes>
            <div className="orders" ></div>
        </div>
    );
}

export default App;
