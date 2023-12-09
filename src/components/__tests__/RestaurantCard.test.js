import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromoted } from "../RestaurantCard";
import MOCK_RESCARD_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


test('Should render Restaurant Card component with props', () => {
    render(<RestaurantCard resData={MOCK_RESCARD_DATA} />);
    const resName = screen.getByText('Meghana Foods');
    expect(resName).toBeInTheDocument();
});

test('Should render Restaurant Card component with promoted label', () => {
    const RestaurantCardPromoted = withPromoted(RestaurantCard);
    render(<RestaurantCardPromoted resData={MOCK_RESCARD_DATA} />);
    const resPromoted = screen.getByText('Promoted');
    expect(resPromoted).toBeInTheDocument();
});