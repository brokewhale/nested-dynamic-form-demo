/* eslint-disable @typescript-eslint/no-explicit-any */

import './App.css';
import { useFormStore } from './useFormStore';
import { useForm, useFieldArray } from 'react-hook-form';
import { AccountForm } from './AccountForm';
import { generateObject } from './utils/generatedObject';
import React from 'react';

function App() {
  const { fData, addFdata } = useFormStore();
  interface CustomerDetail {
    name: string;
    points: number;
  }
  const customerDetails: CustomerDetail[] = [
    { name: 'John', points: 500 },
    { name: 'Jane', points: 600 },
  ];
  const { register, control, getValues, watch } = useForm({
    defaultValues: generateObject(customerDetails),
  });

  // const handleAddFdata = () => {
  //   console.log('click');

  //   addFdata({
  //     John: [
  //       {
  //         points: '12',
  //         option: 'A',
  //       },
  //       {
  //         points: '33',
  //         option: 'C',
  //       },
  //     ],
  //     Jane: [
  //       {
  //         points: '23322',
  //         option: 'A',
  //       },
  //       {
  //         points: '233242',
  //         option: 'A',
  //       },
  //     ],
  //   });
  // };
  // watch((data, { name, type }) => addFdata(data));
  return (
    <div className=" min-h-screen flex justify-center items-center flex-col gap-6">
      {customerDetails.map((customerDetail, index) => (
        <div
          className="w-full flex justify-center items-center"
          key={index + Math.random()}
        >
          <AccountForm
            details={customerDetail}
            register={register}
            control={control}
            getValues={getValues}
          />
        </div>
      ))}

      <div onClick={() => console.log(fData)}>sds</div>
      {/* <div onClick={() => handleAddFdata()}>add</div> */}
    </div>
  );
}

export default App;
