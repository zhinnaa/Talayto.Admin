import React, { useState } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { StepperContext } from '../../../Contexts/StepperContext';
import { Novalidate, RowForm, FormGroup, FormLabel, FormInput } from '../../../StyleComponent/AddProducts';
// import { useStepperContext } from '../../../Contexts/StepperContext';
import FormSelect from '../FormSelect';


export default function Details() {
  const { userData, setUserData } = useContext(StepperContext);


  const handleWeightChange = (selectedWeight) => {
    // Here, you can handle the selected category
    setUserData((prevUserData) => ({
      ...prevUserData,
      weight: selectedWeight,
    }));
  };
 

  const dropdownOptionsWeight = [
    { label:'0.1gr', value: "option1" },
    { label: '0.2gr', value: "option2" },
    { label: '0.3gr', value: "option3" },
    { label:  '0.4gr', value: "option4" },
    { label:  '0.5gr', value: "option5" },
    { label:  '0.6gr', value: "option6" },
    { label:  '0.7gr', value: "option7" },

  ];
  const handleWeightUnitChange = (selectedWeightUnit) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      weightUnit: selectedWeightUnit,
    }));
  };


  const dropdownOptionsWeightUnit = [
    { label: "۱۸ گرم", value: "option1" },
    { label: "۲۴ گرم", value: "option2" },
 

  ];

  const handleWageChange = (selectedWage) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      wage: selectedWage,
    }));
  };


  const dropdownOptionsWage = [
    { label: "1.", value: "option1" },
    { label: "2.", value: "option2" },
    { label: "3.", value: "option3" },
    { label: "4.", value: "option4" },
    { label: "5.", value: "option5" },
    { label: "6.", value: "option6" },
    { label: "7.", value: "option7" },

  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Novalidate>
   
      <RowForm>
      <FormGroup>
          <FormLabel>وزن</FormLabel>
          <FormSelect
          options={dropdownOptionsWeight}
          onChange={(selectedOption) => handleWeightChange(selectedOption.value)}
          value={userData.weight }
          name="weight"
        />
        </FormGroup>
        <FormGroup>
          <FormLabel>وزن واحد</FormLabel>
          <FormSelect
          options={dropdownOptionsWeightUnit}
          onChange={(selectedOption) => handleWeightUnitChange(selectedOption.value)}
          value={userData.weightUnit}
          name="weightUnit"
        />
        </FormGroup>
        <FormGroup>
          <FormLabel>اجرت</FormLabel>
          <FormSelect
          options={dropdownOptionsWage}
          onChange={(selectedOption) => handleWageChange(selectedOption.value)}
          value={userData.wage }
          name="wage"
        />
        </FormGroup>
       
      </RowForm>
      <RowForm>
      <FormGroup>
          <FormLabel>تعداد</FormLabel>
          <FormInput  type="text"
            onChange={handleChange}
            value={userData.quantity }
            name="quantity"
            placeholder="" />
        </FormGroup>
        <FormGroup>
          <FormLabel>تخفیف</FormLabel>
          <FormInput  type="text"
            onChange={handleChange}
            value={userData.discount }
            name="discount"
            placeholder="" />
        </FormGroup>
       
      </RowForm>
    </Novalidate>
  );
}
