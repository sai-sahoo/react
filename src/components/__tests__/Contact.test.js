import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe('Group all Contact component test cases', () => {

    beforeAll(() => {
        // console.log('Before All');
    });

    beforeEach(() => {
        // console.log('Before Each');
    });

    afterAll(() => {
        // console.log('After All');
    });

    afterEach(() => {
        // console.log('After Each');
    });

    it('Should load contact component', () => {
        render(<Contact />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    });

    test('Should load button in contact component', () => {
        render(<Contact />);
        const button = screen.getByText('Submit');
        expect(button).toBeInTheDocument();
    });

    it('Should input contain placeholder name in contact component', () => {
        render(<Contact />);
        const input = screen.getByPlaceholderText('Name')
        expect(input).toBeInTheDocument();
    });

    test('Should load 2 input elements in Contact component', () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole('textbox');
        expect(inputBoxes.length).toBe(2);
    });
});