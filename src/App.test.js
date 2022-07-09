import { render, screen } from '@testing-library/react';
import App from './App';

describe('github topic explorer', () => {  
  it("should render the header", () => {
    render(<App />);
    const header = screen.getByText("Github topic explorer");
    expect(header).toBeInTheDocument();
  })
  
  it("sould render the search form", () => {
    render(<App />);
    const search = screen.getByRole("search");
    expect(search).toBeInTheDocument();
  })

  it("should render the search results title", () => {
    render(<App />);
    const results = screen.getByText("Search results");
    expect(results).toBeInTheDocument();
  })
})
