import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Todo from '../Todo';


it("renders without crashing", function() {
    render(<Todo/>);
})

it("renders without crashing", function() {
    const {asFragment} = render(<Todo/>);
    expect(asFragment()).toMatchSnapshot();
})

it("clicks the delete btn", function(){
    const deleteMock = jest.fn();
    const { getByText } = render(<Todo id="1" text="new todo" remove={deleteMock}/>);

    const deleteBtn = getByText("X");

    fireEvent.click(deleteBtn);

    expect(deleteMock).toHaveBeenCalled();

})