import React from 'react';

class ComponentsTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            components: []
        };
    }

    setComponents = (components) =>
        this.setState({components: components});

    tableData = this.components.list.map((component) => {
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
    })

    render() {
        return (<div className="container">
                <table className="table table-striped">
                    <thead>
                    <tr>
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
                    {this.tableData}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default ComponentsTable;