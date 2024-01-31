import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useFormStore } from './useFormStore';
import { useForm, useFieldArray } from 'react-hook-form';

function App() {
  const { fData, addFdata } = useFormStore();

  const { register, control, watch } = useForm({
    defaultValues: {
      inputs: [
        // Include a default field
        { points: '', option: '' },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'inputs',
  });

  const handleAddFdata = () => {
    console.log('click');

    addFdata('John', [
      {
        points: 340,
        option: 'C',
      },
      {
        points: 30,
        option: 'C',
      },
      {
        points: 42,
        option: 'C',
      },
    ]);
  };
  watch((data) => console.log(data));

  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className=" max-w-[50vw] w-full min-h-24 bg-cyan-200 rounded-md">
        <form className="flex flex-col p-6 gap-3">
          <h1 className=" text-3xl">Name</h1>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="w-full flex justify-between gap-8 items-center "
            >
              <div className="flex flex-col">
                <span>Points</span>
                <input
                  {...register(`inputs.${index}.points`)}
                  type="number"
                  placeholder={`Points ${index + 1}`}
                  className=" border-gray-400 border rounded-lg text-black text-center"
                />
              </div>
              <div className="flex flex-col flex-1">
                <span>Option</span>
                <select
                  {...register(`inputs.${index}.option`)}
                  className=" border-gray-400 border rounded-lg text-black text-center"
                >
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
              </div>
              <div className="flex gap-2 self-end">
                <div
                  onClick={() => append({ points: '', option: '' })}
                  className=" cursor-pointer bg-cyan-400 rounded-lg w-8 h-8 text-white font-bold flex justify-center items-center"
                >
                  +
                </div>

                <div
                  // disabled={index === 0}
                  onClick={() => (index === 0 ? '' : remove(index))}
                  className=" cursor-pointer bg-cyan-400 rounded-lg w-8 h-8 text-white font-bold flex justify-center items-center"
                >
                  -
                </div>
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default App;
