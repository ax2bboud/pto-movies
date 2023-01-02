import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from "react-router-dom";
import Movies from './Movies';

const container = document.createElement('div');

it('renders without crashing', () => {
  render(<Movies />, container);
  unmountComponentAtNode(container);
});

it('displays a list a movies', () => {
  const fakeMovies = [
    {
      name: "testmovie1",
      id:"1",
      thumbnail:"http://dummyimage.com/100x100.png",
    },
    {
      name: "testmovie1",
      id:"2",
      thumbnail:"http://dummyimage.com/100x100.png",
    },
  ]

  act(() => {
    render(<BrowserRouter> <Movies movies={fakeMovies} /> </BrowserRouter>, container)
  });

  expect(container.querySelectorAll(".Movies-list-item").length).toBe(fakeMovies.length);

});
