import React, {useEffect, useState} from 'react';
import api from "../../../api/axiosConfig";

const ProductsTable = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await api.get("/products");
            setProducts(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (<div className="container table-responsive-xxl">
            <table className="table table-striped table-dark table-hover m-2">
                <thead>
                <tr className="table-secondary">
                    <th>id</th>
                    <th>name</th>
                    <th>version</th>
                    <th>dimensions (LLxWWxHH) [cm]</th>
                    <th>weight [g]</th>
                    <th>date added</th>
                    <th>date modified</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.version}</td>
                                    <td>{product.dimensions}</td>
                                    <td>{product.weightInGrammes}</td>
                                    <td>{product.dateAdded}</td>
                                    <td>{product.dateModified}</td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default ProductsTable;