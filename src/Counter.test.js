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
    it("decrements count by 1 if the decrement button is clicked", () => {
        const { getByRole, getByTestId } = render(<Counter initialCount={0} />)
        const decrementButton = getByRole("button", { name: "Decrement" })
        fireEvent.click(decrementButton)
        const countValue = Number(getByTestId("count").textContent)
        expect(countValue).toEqual(-1)
    })
    it("resets count to 0 if the reset button is clicked", () => {
        const { getByRole, getByTestId } = render(<Counter initialCount={50} />)
        const resetButton = getByRole("button", { name: "Restart" })
        fireEvent.click(resetButton)
        const countValue = Number(getByTestId("count").textContent)
        expect(countValue).toEqual(0)
    })
    it("switches the sign of the count if the switch button is clicked", () => {
        const { getByRole, getByTestId } = render(<Counter initialCount={50} />)
        const switchButton = getByRole("button", { name: "Switch Signs" })
        fireEvent.click(switchButton)
        const countValue = Number(getByTestId("count").textContent)
        expect(countValue).toEqual(-50)
    })
})