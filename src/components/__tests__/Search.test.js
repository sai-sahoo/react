import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body";
import RESLIST_MOCK from "../mocks/resListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESLIST_MOCK);
        }
    })
});

it('Should search res list for burger search input', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const cardsBeforeSearch = screen.getAllByTestId("restCard");
    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole('button', { name: 'Search' });
    const searchInput = screen.getByTestId('searchInput');
    fireEvent.change(searchInput, { target: { value: 'burger' } });
    fireEvent.click(searchBtn);

    //screen should load some cards
    const cardsAfterSearch = screen.getAllByTestId("restCard");
    expect(cardsAfterSearch.length).toBe(3);
});

it('Should filter top rated restaurants', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const cardsBeforeFilter = screen.getAllByTestId("restCard");
    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("restCard");
    expect(cardsAfterFilter.length).toBe(18);
});

