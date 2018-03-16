import { connect } from 'react-redux';
import { TodoActions } from '../../ducks/toDo';

const mapStateToProps = (state: any) => ({
  todos: state.todos
});

const mapDispatchToProps = {
  clearSelected: TodoActions.clearSelected
};

export const withRedux =  connect(mapStateToProps, mapDispatchToProps);
