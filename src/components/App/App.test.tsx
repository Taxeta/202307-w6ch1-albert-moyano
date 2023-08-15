import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FilmsContextProvider from "../../store/films/context/FilmsContextProvider";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Películas' inside a heading", () => {
      const title = "Películas";

      render(
        <FilmsContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FilmsContextProvider>,
      );

      const headingTitle = screen.getByRole("heading", { name: title });

      expect(headingTitle).toBeInTheDocument();
    });
  });
});
