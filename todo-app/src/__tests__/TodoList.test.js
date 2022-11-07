import React from 'react';
import { fireEvent, render } from "@testing-library/react";
import TodoList from '../TodoList';
// import '@testing-library/jest-dom';


it("renders without crashing", function() {
    render(<TodoList/>);
})

it("renders the same output", function() {
    const {asFragment} = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
})

it("can add a new todo", function() {
    const { getByLabelText, queryByText, debug } = render(<TodoList/>);

    expect(queryByText('-Pay Taxes')).not.toBeInTheDocument();

    const textInput = getByLabelText('New Todo:');
    const submitBtn = queryByText('Add Todo');

    fireEvent.change(textInput, {target: {value: "Pay Taxes"}});
    fireEvent.click(submitBtn);

    expect(queryByText('-Pay Taxes')).toBeInTheDocument();
})

it("can delete a todo", function() {
    const { getByLabelText, queryByText, getAllByText } = render(<TodoList/>);

    expect(queryByText('-Cut the grass')).toBeInTheDocument();

    const deleteBtn = getAllByText('X')[0];

    fireEvent.click(deleteBtn);

    expect(queryByText('-Cut the grass')).not.toBeInTheDocument();
})