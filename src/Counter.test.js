import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {

    it("displays correct initial count", () => {
        const { getByTestId } = render(<Counter initialCount={0} />)
        const countValue = Number(getByTestId("count").textContent)
        expect(countValue).toEqual(0)
    })
    it("increments count by 1 if the increment button is clicked", () => {
        const { getByRole, getByTestId } = render(<Counter initialCount={0} />)
        const incrementButton = getByRole("button", { name: "Increment" })
        fireEvent.click(incrementButton)
        const countValue = Number(getByTestId("count").textContent)
        expect(countValue).toEqual(1)
    })
})