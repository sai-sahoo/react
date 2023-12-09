import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test('Should load header component with login btn', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginBtn = screen.getByRole('button', { name: 'Login'});
    expect(loginBtn).toBeInTheDocument();
});

it('Should load header component with cart items', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
});

it('Should Login text to Logout onclick', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginBtn = screen.getByRole('button', { name: 'Login'});
    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByRole('button', { name: 'Logout'});
    expect(logoutBtn).toBeInTheDocument();
});