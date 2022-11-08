import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from '../NewBoxForm';

it("renders without crashing", function() {
    render(<NewBoxForm/>);
})

it("renders without crashing", function() {
    const {asFragment} = render(<NewBoxForm/>);
    expect(asFragment()).toMatchSnapshot();
})


// add box function works
it("runs the addBox function on form submit", function() {
    const addBoxMock = jest.fn();
    const { getByText } = render(<NewBoxForm addBox={addBoxMock} />);
    const addBoxButton = getByText("Add Box");
    fireEvent.click(addBoxButton);
    expect(addBoxMock).toHaveBeenCalled();
  });