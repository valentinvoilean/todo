import * as React from 'react';
import { Form, FormGroup, FormControl } from 'react-bootstrap';

export interface AddItemInputProps {
  addTodo: (text: string) => any;
  createTodo: () => any;
  updateText: (text?: string) => any;
  text: string;
}

export const AddItemInput: React.SFC<AddItemInputProps> = ({ createTodo, updateText, text }) => (
  <Form onSubmit={createTodo}>
    <FormGroup>
      <FormControl
        type="text"
        placeholder="New ToDo Item"
        value={text}
        onChange={(e: any) => {
          updateText(e.target.value);
        }}
      />
    </FormGroup>
  </Form>
);
