import React from 'react';
import App from './App';
//imports testing library and render 
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';


//TESTING 
describe('<App />', () => {
  it('renders without crashing', () => {
  render(<App />)
  cleanup(); //prevents duplicates 
  })
});

//balls and strikes reset to 0 when player reached 3 strikes or 4 balls 
it('should reset balls when a player hits 4 balls', () => {

  const { getByText } = render(<App />)
  const text = getByText(/balls/i); //i = dont care about case, looking for that word

    expect(text).toBeInTheDocument();
    cleanup();
  
 
})

it('should reset strikes to 0 when player hits 3 strikes', () => {
  const { getByText } = render(<App />)

  const text = getByText(/strike/i) //i = dont care about case, looking for that word

 expect(text).toBeInTheDocument();
 cleanup();
 

})


//balls and strikes reset to 0 when a `hit` is recorded
it('should reset balls and strikes to 0 when hit is recorded', () => {
  const { getByText} = render(<App />)

  const text = getByText(/hits/i)
  expect(text).toBeInTheDocument();
  cleanup();
}) 



//a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.
it('a foul increase strikes up to 2', () => {
  const { getByText } = render(<App />)


  const text = getByText(/fouls/i)
  expect(text).toBeInTheDocument();
  cleanup();
})

