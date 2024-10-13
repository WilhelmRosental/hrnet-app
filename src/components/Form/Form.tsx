import { useRef, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Dropdown from "../Dropdown";
import states from "./statesList";
import Datepicker from "../Datepicker";
import Modal from "../Modal";
import { formSlice } from "@/app/store/formSlice";
import { IEmployee } from "../../types";

export default function Form() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const dateOfBirthRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLSelectElement>(null);
  const zipCodeRef = useRef<HTMLInputElement>(null);
  const startDateRef = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getDataInput();
    setShowModal(true);
    setTimeout(() => setShowModal(false), 1000);
  };

  const getDataInput = () => {
    const data: IEmployee = {
      firstName: firstNameRef.current?.value,
      lastName: lastNameRef.current?.value,
      dateOfBirth: dateOfBirthRef.current?.value,
      street: streetRef.current?.value,
      city: cityRef.current?.value,
      state: stateRef.current?.value,
      zipCode: zipCodeRef.current?.value,
      startDate: startDateRef.current?.value,
      department: departmentRef.current?.value,
    };
    dispatch(formSlice.actions.addData(data));
  };

  const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 16px 8px;
  `;

  const Fieldset = styled.fieldset`
    border: none;
    border-top: 1.5px solid ${({ theme }) => theme.colors.primary};
    margin: 8px 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 8px;

    legend {
      color: ${({ theme }) => theme.colors.primary};
      padding: 0 8px;
      font-size: ${({ theme }) => theme.fontSize.paragraph2};

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: ${({ theme }) => theme.fontSize.paragraph2Sm};
      }
    }
  `;

  const Label = styled.label`
    margin-left: 16px;
    text-decoration: underline ${({ theme }) => theme.colors.primary};
    font-style: italic;
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize.paragraph3};

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.fontSize.paragraph3Sm};
    }
  `;

  const Input = styled.input`
    border-radius: 1000px;
    border: 1.5px solid ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.surface};
    padding: 0 8px;
    font-size: ${({ theme }) => theme.fontSize.paragraph3};
    max-width: 70%;
    height: 32px;
    position: relative;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.fontSize.paragraph3Sm};
    }
  `;

  const Button = styled.button`
    margin-left: auto;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 100px;
    width: 30%;
    height: 24px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.surface};
    font-weight: 400;
    transition: all 200ms ease-in-out;
    font-size: ${({ theme }) => theme.fontSize.paragraph3};

    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.fontSize.paragraph3Sm};
    }
  `;

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <Fieldset>
          <legend>Personal Info</legend>

          <Label htmlFor="first-name">First Name :</Label>
          <Input ref={firstNameRef} type="text" id="first-name" />

          <Label htmlFor="last-name">Last Name :</Label>
          <Input ref={lastNameRef} type="text" id="last-name" />

          <Label htmlFor="date-of-birth">Date of Birth :</Label>
          <Datepicker
            style="input"
            refHook={dateOfBirthRef}
            name="date-of-birth"
          />
        </Fieldset>

        <Fieldset>
          <legend>Address</legend>

          <Label htmlFor="street">Street :</Label>
          <Input ref={streetRef} id="street" type="text" />

          <Label htmlFor="city">City :</Label>
          <Input ref={cityRef} id="city" type="text" />

          <Label htmlFor="state">State :</Label>
          <Dropdown name="state" refHook={stateRef}>
            {states.map((element) => (
              <option key={element.abbreviation} value={element.abbreviation}>
                {element.name}
              </option>
            ))}
          </Dropdown>

          <Label htmlFor="zip-code">Zip Code :</Label>
          <Input ref={zipCodeRef} id="zip-code" type="number" />
        </Fieldset>

        <Fieldset>
          <legend>Professional Info</legend>

          <Label htmlFor="start-date">Start Date :</Label>
          <Datepicker style="input" refHook={startDateRef} name="start-date" />

          <Label htmlFor="department">Department :</Label>
          <Dropdown name="department" refHook={departmentRef}>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </Dropdown>
        </Fieldset>

        <Button type="submit">Save</Button>
      </FormContainer>
      <Modal activeModal={showModal} />
    </>
  );
}
