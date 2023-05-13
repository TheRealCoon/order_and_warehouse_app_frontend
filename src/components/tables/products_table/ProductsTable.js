import React from 'react';

const ProductsTable = ({products}) => {
    return (<div className="container">
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