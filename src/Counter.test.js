import { render } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {

    it("displays correct initial count", () => {
        const { getByTestId } = render(<Counter initialCount={0} />)
        const countValue = Number(getByTestId("count").textContent)
        expect(countValue).toEqual(0)
    })

})