import React, { Component } from 'react'
import IconButton from '../template/iconButton'

export default class TodoList extends Component {
    renderRows() {
        const list = this.props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style="success" icon="check" hide={todo.done}
                        onClick={() => this.props.handleMarkAsDone(todo)}></IconButton>
                    <IconButton style="warning" icon="undo" hide={!todo.done}
                        onClick={() => this.props.handleMarkAsPending(todo)}></IconButton>
                    <IconButton style="danger" icon="trash-o" hide={!todo.done}
                        onClick={() => this.props.handleRemove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th className="tableActions">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}