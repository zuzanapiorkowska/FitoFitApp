import WorkoutForm from "../WorkoutForm";
import "@testing-library/jest-dom";
import { WorkoutType } from "../../WorkoutsList/WorkoutsList.interface";
import { waitFor } from "@testing-library/react";
import { onFormSubmitMock, WorkoutFormPageObject } from "./WorkoutForm.screen-object";

describe(WorkoutForm.name, () => {
  it("should display dateInput, wokoutTypeSelect and noteTextArea by defult", () => {
    const { dateInput, workoutTypeSelect, notesTextArea } = new WorkoutFormPageObject().render();
    expect(dateInput).toBeInTheDocument();
    expect(workoutTypeSelect).toBeInTheDocument();
    expect(notesTextArea).toBeInTheDocument();
  });
  it("allows to add date", async () => {
    const form = new WorkoutFormPageObject().render();

    form.chooseDate("2020-05-12");

    await waitFor(() => expect(form.dateInput).toHaveValue("2020-05-12"));
  });
  it("allows to add chosen workout type", async () => {
    const form = new WorkoutFormPageObject().render();

    form.clickWorkoutTypeSelect();
    form.clickWorkoutTypeSelectItem(WorkoutType.SWIMMING);
    await waitFor(() => form.clickAddWorkoutPartButton(WorkoutType.SWIMMING));

    await waitFor(() => expect(form.partForm(WorkoutType.SWIMMING)).toBeInTheDocument());
  });
  it("allows to add distance", async () => {
    const form = new WorkoutFormPageObject().render();

    form.clickWorkoutTypeSelect();
    await waitFor(() => form.clickAddWorkoutPartButton(WorkoutType.CYCLING));

    await waitFor(() => form.typeInDistanceInput("123"));

    await waitFor(() => expect(form.distanceInput).toHaveValue(123));
  });
  it("allows to add duration", async () => {
    const form = new WorkoutFormPageObject().render();

    form.clickWorkoutTypeSelect();
    await waitFor(() => form.clickAddWorkoutPartButton(WorkoutType.CYCLING));

    await waitFor(() => form.typeInHoursInput("1"));
    await waitFor(() => form.typeInMinutesInput("1"));
    await waitFor(() => form.typeInSecondsInput("1"));

    await waitFor(() => expect(form.durationInput).toHaveValue(3661));
  });
  it("allows to add notes", async () => {
    const form = new WorkoutFormPageObject().render();

    form.typeInNotesTextArea("notes");

    await waitFor(() => expect(form.notesTextArea).toHaveValue("notes"));
  });
  it("allows to submit form when all required inputs are filled", async () => {
    const form = new WorkoutFormPageObject().render();

    form.chooseDate("2020-05-12");

    form.clickWorkoutTypeSelect();
    await waitFor(() => form.clickAddWorkoutPartButton(WorkoutType.CYCLING));

    await waitFor(() => form.typeInDistanceInput("123"));

    await waitFor(() => form.typeInHoursInput("1"));

    form.clickSubmitButton();

    await waitFor(() => expect(onFormSubmitMock).toBeCalled());
  });
  it("shows errors after subitting empty form", async () => {
    const form = new WorkoutFormPageObject().render();

    form.clickWorkoutTypeSelect();
    await waitFor(() => form.clickAddWorkoutPartButton(WorkoutType.CYCLING));

    form.clickSubmitButton();

    await waitFor(() => expect(form.allRequiredErrors).toHaveLength(3));
  });
  it("shows date error when date is not correct", async () => {
    const form = new WorkoutFormPageObject().render();

    form.chooseDate("2020-05");

    form.clickSubmitButton();

    await waitFor(() => expect(form.allRequiredErrors).toHaveLength(1));
  });
});
