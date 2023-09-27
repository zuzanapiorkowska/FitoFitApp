import { render } from "@testing-library/react";
import WorkoutForm from "../WorkoutForm";

describe(WorkoutForm.name, () => {
  it("should pass", () => {
    render(<WorkoutForm />);
    // const heading = screen.getByText(/Hello world! I am using React/i);
    // expect(heading).toBeInTheDocument();
  });
});
