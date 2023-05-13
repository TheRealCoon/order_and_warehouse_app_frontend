import React, {useEffect, useState} from 'react';
import api from "../../../api/axiosConfig";

const StorageUnitsTable = () => {
    const [storageUnits, setStorageUnits] = useState([]);

    const getStorageUnits = async () => {
        try {
            const response = await api.get("/storage");
            setStorageUnits(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getStorageUnits();
    }, [])

    return (<div className="container table-responsive-xxl">
            <table className="table table-striped table-dark table-hover m-2">
                <thead>
                <tr className="table-secondary">
                    <th>id</th>
                    <th>row</th>
                    <th>column</th>
                    <th>shelf</th>
                    <th>component id</th>
                    <th>component name</th>
                    <th>quantity</th>
                    <th>isFull</th>
                    <th>isEmpty</th>
                    <th>dateModified</th>
                </tr>
                </thead>
                <tbody>
                {
                    storageUnits.map((storageUnit) => {
                            return (
                                <tr key={storageUnit.id}>
                                    <td>{storageUnit.id}</td>
                                    <td>{storageUnit.row}</td>
                                    <td>{storageUnit.column}</td>
                                    <td>{storageUnit.shelf}</td>
                                    <td>{storageUnit.component}</td>
                                    <td>{storageUnit.componentName}</td>
                                    <td>{storageUnit.quantity}</td>
                                    <td>{storageUnit.full}</td>
                                    <td>{storageUnit.empty}</td>
                                    <td>{storageUnit.dateModified}</td>
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

export default StorageUnitsTable;