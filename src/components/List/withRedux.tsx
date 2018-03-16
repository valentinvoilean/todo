import { connect } from 'react-redux';
import { TodoActions } from '../../ducks/toDo';

const mapStateToProps = (state: any) => ({
  todos: state.todos,
  pathname: state.router.location.pathname
});

const mapDispatchToProps = {
  handleDelete: TodoActions.deleteTodo,
  handleSelect: TodoActions.selectTodo
};

export const withRedux =  connect(mapStateToProps, mapDispatchToProps);
