import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Box from '../Box';

it("renders without crashing", function() {
    render(<Box/>);
})

it("renders without crashing", function() {
    const {asFragment} = render(<Box/>);
    expect(asFragment()).toMatchSnapshot();
})
