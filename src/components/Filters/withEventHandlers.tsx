import { withHandlers } from 'recompose';

export const withEventHandlers = withHandlers({
  updateFilters: ({ history }: any) => (value: string) => {
    history.push(value);
  }
});
