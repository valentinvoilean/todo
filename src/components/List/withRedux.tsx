import { connect } from 'react-redux';
import { TodoActions } from '../../ducks/toDo';

import { RootState } from '../../store/state';

const mapStateToProps = (state: RootState) => ({
  todos: state.todos,
  pathname: state.router.location && state.router.location.pathname
});

const mapDispatchToProps = {
  handleDelete: TodoActions.deleteTodo,
  handleSelect: TodoActions.selectTodo
};

export const withRedux =  connect(mapStateToProps, mapDispatchToProps);
