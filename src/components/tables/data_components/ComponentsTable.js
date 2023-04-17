import React from 'react';

const ComponentsTable = ({components}) => {
    return (<div className="container">
            <table className="table table-striped table-dark table-hover m-2">
                <thead>
                <tr className="table-secondary">
                    <th>ID</th>
                    <th>name</th>
                    <th>type</th>
                    <th>primary value</th>
                    <th>primary unit</th>
                    <th>secondary value</th>
                    <th>secondary unit</th>
                    <th>tolerance</th>
                    <th>length (mm)</th>
                    <th>width (mm)</th>
                    <th>height (mm)</th>
                    <th>weight (g)</th>
                    <th>manufacturer ID</th>
                    <th>trader ID</th>
                </tr>
                </thead>
                <tbody>
                {
                    components.map((component) => {
                            return (
                                <tr key={component.id}>
                                    <td>{component.id}</td>
                                    <td>{component.name}</td>
                                    <td>{component.type}</td>
                                    <td>{component.primaryValue}</td>
                                    <td>{component.primaryUnit}</td>
                                    <td>{component.secondaryValue}</td>
                                    <td>{component.secondaryUnit}</td>
                                    <td>{component.tolerance}</td>
                                    <td>{component.packageDimensions.length}</td>
                                    <td>{component.packageDimensions.width}</td>
                                    <td>{component.packageDimensions.height}</td>
                                    <td>{component.weightInGrammes}</td>
                                    <td>{component.manufacturerId}</td>
                                    <td>{component.traderComponentId}</td>
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

export default ComponentsTable;