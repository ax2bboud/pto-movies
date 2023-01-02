import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from "react-router-dom";
import Movie from './Movie';

const container = document.createElement('div');

it('renders without crashing', () => {
    render(<Movie />, container);
    unmountComponentAtNode(container);
});

it('displays the movie details', () => {
    const fakeMovie = {
        name: "name1",
        genre:"genre1",
        market_price:"price1",
        image:"http://dummyimage.com/400x400.png",
        owner:"owner1"
    }

    act(() => {
        render(<BrowserRouter> <Movie movie={fakeMovie} /> </BrowserRouter>, container)
    });

    expect(container.querySelector(".Movie-name").innerHTML).toBe(`Name: ${fakeMovie.name}`)
    expect(container.querySelector(".Movie-genre").innerHTML).toBe(`Genre(s): ${fakeMovie.genre}`)
    expect(container.querySelector(".Movie-market-price").innerHTML).toBe(`Price: ${fakeMovie.market_price}`)
    expect(container.querySelector(".Movie-image").src).toBe(fakeMovie.image)
    expect(container.querySelector(".Movie-owner").innerHTML).toBe(`Owner: ${fakeMovie.owner}`)
});
