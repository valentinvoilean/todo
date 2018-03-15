import { connect } from 'react-redux';
import { TodoActions } from '../../ducks/toDo';

const mapStateToProps = (state: any) => ({
  todos: state.todos
});

const mapDispatchToProps = {
  handleDelete: TodoActions.deleteTodo,
  handleSelect: TodoActions.selectTodo
};

export const withRedux =  connect(mapStateToProps, mapDispatchToProps);
