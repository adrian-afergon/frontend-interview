import { fireEvent, render, screen } from "@testing-library/react";
import { TablePagination } from "./TablePagination";
describe("TablePagination", () => {
  const clickPreviousButton = () => {
    fireEvent.click(screen.getByRole("button", { name: "Previous" }));
  };

  it.todo("is being displayed");
  it.todo("should displayed total pages when not exceed max displayed pages"); //TODO Add more cases

  it("call onPaginate with previous page number when clicks on previous button", () => {
    const onPaginate = jest.fn();
    const givenTotalPages = 2;
    render(
      <TablePagination
        currentPage={2}
        totalPages={givenTotalPages}
        onPage={onPaginate}
      />
    );

    clickPreviousButton();

    expect(onPaginate).toHaveBeenCalledWith(1);
  });

  it("previous button is disabled when there is not previous pages", () => {
    const onPaginate = jest.fn();
    render(
      <TablePagination currentPage={1} totalPages={1} onPage={onPaginate} />
    );

    clickPreviousButton();

    expect(onPaginate).not.toHaveBeenCalled();
    expect(screen.getByRole("button", { name: "Previous" })).toBeDisabled();
  });

  it.todo("call onPaginate with next page number when clicks on next button");
  it.todo("click next button when current page is last page");
  it.todo("click on number page");
  it.todo("click on number page when it is current page");
  it.todo("given a current page greater than total pages number");
  it.todo("given a current page lower than 1");
  it.todo("total pages should be min 1");
});
