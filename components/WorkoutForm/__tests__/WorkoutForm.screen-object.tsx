import { fireEvent, render, screen } from "@testing-library/react";
import WorkoutForm from "../WorkoutForm";
import userEvent from "@testing-library/user-event";
import { WorkoutType } from "../../WorkoutsList/WorkoutsList.interface";

export const onFormSubmitMock = jest.fn();
export class WorkoutFormPageObject {
  get dateInput() {
    return screen.getByLabelText("Date");
  }
  get workoutTypeSelect() {
    return screen.getByLabelText("Choose workout type");
  }
  get notesTextArea(): HTMLTextAreaElement {
    return screen.getByLabelText("Notes");
  }
  get distanceInput() {
    return screen.getByLabelText("Distance");
  }
  get durationInput() {
    return screen.getByLabelText("Duration");
  }
  get hoursInput() {
    return screen.getByPlaceholderText("hr");
  }
  get minutesInput() {
    return screen.getByPlaceholderText("min");
  }
  get secondsInput() {
    return screen.getByPlaceholderText("sec");
  }
  get submitButton() {
    return screen.getByRole("button", { name: "Add workout" });
  }
  get allRequiredErrors() {
    return screen.queryAllByText(/is required/i);
  }
  addWorkoutPartButton(part: WorkoutType): HTMLButtonElement {
    return screen.getByRole("button", { name: `add new ${part} workout` });
  }
  workoutTypeSelectItem(part: WorkoutType) {
    return screen.getByRole("button", { name: part });
  }
  clickWorkoutTypeSelectItem(part: WorkoutType) {
    userEvent.click(this.workoutTypeSelectItem(part));
  }
  clickWorkoutTypeSelect() {
    userEvent.click(this.workoutTypeSelect);
  }
  partForm(part: WorkoutType): HTMLDivElement {
    return screen.getByTestId(`${part}-form`);
  }
  clickAddWorkoutPartButton(part: WorkoutType): void {
    userEvent.click(this.addWorkoutPartButton(part));
  }
  chooseDate(date: string) {
    //userEvent.type() doesn't support input with type "date"
    fireEvent.change(this.dateInput, { target: { value: date } });
  }
  typeInDistanceInput(text: string) {
    userEvent.type(this.distanceInput, text);
  }
  typeInHoursInput(hours: string) {
    userEvent.type(this.hoursInput, hours);
  }
  typeInMinutesInput(minutes: string) {
    userEvent.type(this.minutesInput, minutes);
  }
  typeInSecondsInput(seconds: string) {
    userEvent.type(this.secondsInput, seconds);
  }
  typeInNotesTextArea(notes: string) {
    userEvent.type(this.notesTextArea, notes);
  }
  clickSubmitButton() {
    userEvent.click(this.submitButton);
  }
  render() {
    render(<WorkoutForm onFormSubmit={onFormSubmitMock} />);

    return this;
  }
}
