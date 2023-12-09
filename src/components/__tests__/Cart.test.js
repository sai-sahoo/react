import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
});

it('Should load Restaurant Menu component', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ));

    const accordionHeader = screen.getByText(/Recommended/);
    fireEvent.click(accordionHeader);

    const foodItems = screen.getAllByTestId('foodItems');
    expect(foodItems.length).toBe(20);

    expect(screen.getByText('Cart - 0')).toBeInTheDocument();

    const addBtns = screen.getAllByRole('button', { name: "ADD +" });
    fireEvent.click(addBtns[0]);
    expect(screen.getByText('Cart - 1')).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    expect(screen.getByText('Cart - 2')).toBeInTheDocument();

    
});