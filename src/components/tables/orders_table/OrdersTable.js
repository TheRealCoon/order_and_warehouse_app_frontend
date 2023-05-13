import React from 'react';

const OrdersTable = ({orders}) => {
    return (<div className="container">
            <table className="table table-striped table-dark table-hover m-2">
                <thead>
                <tr className="table-secondary">
                    <th>id</th>
                    <th>product id</th>
                    <th>quantity</th>
                    <th>status</th>
                    <th>overdue</th>
                    <th>date received</th>
                    <th>date started</th>
                    <th>date completed</th>
                    <th>deadline</th>
                    <th>completed overdue</th>
                </tr>
                </thead>
                <tbody>
                {
                    orders.map((order) => {
                            return (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.product}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.status}</td>
                                    <td>{order.overDue}</td>
                                    <td>{order.dateReceived}</td>
                                    <td>{order.dateStarted}</td>
                                    <td>{order.dateCompleted}</td>
                                    <td>{order.deadline}</td>
                                    <td>{order.completedOverDue}</td>
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

export default OrdersTable;