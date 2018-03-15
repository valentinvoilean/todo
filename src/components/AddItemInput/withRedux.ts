import { connect } from 'react-redux';
import { TodoActions } from '../../ducks/toDo';

const mapDispatchToProps = {
  addTodo: TodoActions.addTodo
};

export const withRedux =  connect(null, mapDispatchToProps);
