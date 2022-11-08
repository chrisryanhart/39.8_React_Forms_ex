import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import BoxList from '../BoxList';
import Box from '../Box';

it("renders without crashing", function() {
    render(<BoxList/>);
})

it("renders without crashing", function() {
    const {asFragment} = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
})

// add new box

it("can add a new Box", function() {
    const { getAllByText, getByLabelText, queryByText } = render(<BoxList/>);

    expect(getAllByText('X')).toHaveLength(2);

    expect(getAllByText('X')[1].previousSibling).toHaveStyle(`
    width: 100px;
    height: 100px;
    background-color: yellow;`);

    const colorInput = getByLabelText('BG Color:');
    const widthInput = getByLabelText('Width:');
    const heightInput = getByLabelText('Height:');
    const submitBtn = queryByText('Add Box');

    fireEvent.change(colorInput, {target: {value: "red"}});
    fireEvent.change(widthInput, {target: {value: "200px"}});
    fireEvent.change(heightInput, {target: {value: "200px"}});

    fireEvent.click(submitBtn);

    expect(getAllByText('X')).toHaveLength(3);
})

it("can delete a Box", function() {
    const { getAllByText, getByLabelText, queryByText } = render(<BoxList/>);

    expect(getAllByText('X')).toHaveLength(2);

    const deleteBtn = getAllByText('X')[0];

    fireEvent.click(deleteBtn);

    expect(getAllByText('X')).toHaveLength(1);
})