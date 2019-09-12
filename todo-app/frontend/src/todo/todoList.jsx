import { connect } from 'react-redux'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './todoActions'

class TodoList extends Component {
    renderRows() {
        const list = this.props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style="success" icon="check" hide={todo.done}
                        onClick={() => this.props.markAsDone(todo)}></IconButton>
                    <IconButton style="warning" icon="undo" hide={!todo.done}
                        onClick={() => this.props.markAsPending(todo)}></IconButton>
                    <IconButton style="danger" icon="trash-o" hide={!todo.done}
                        onClick={() => this.props.remove(todo)}></IconButton>
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

const mapStateToProps = state => ({ list: state.todo.list });
const mapDispacthToProps = (dispatch) => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispacthToProps)(TodoList)