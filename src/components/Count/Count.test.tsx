import { render, screen } from "@testing-library/react";
import { filmsMock } from "../../mocks/films";
import FilmsContext from "../../store/films/context/FilmsContext";
import Count from "./Count";

describe("Given a Count component", () => {
  describe("When it's rendered", () => {
    test("Then it should show '' as heading", () => {
      const numberOfFilms = filmsMock.length;
      const countText = `Listando ${numberOfFilms} películas`;
      const loadFilms = vi.fn();

      render(
        <FilmsContext.Provider value={{ loadFilms, films: filmsMock }}>
          <Count />
        </FilmsContext.Provider>,
      );

      const spanElement = screen.getByText(countText);

      expect(spanElement).toBeInTheDocument();
    });
  });
});
