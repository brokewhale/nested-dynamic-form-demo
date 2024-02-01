/* eslint-disable @typescript-eslint/no-explicit-any */

import { Key } from 'react';
import { useFieldArray } from 'react-hook-form';
import { useFormStore } from './useFormStore';

export function AccountForm({
  details,
  register,
  control,
  getValues,
}: {
  details: any;
  register: any;
  control: any;
  getValues: any;
}) {
  const { addFdata } = useFormStore();

  const fieldName: string = details?.name;
  const { fields, append, remove } = useFieldArray({
    control,
    name: fieldName,
  });
  const handleGetValuesAndCallAddFdata = () => {
    const values = getValues();
    addFdata(values);
  };

  return (
    <div className=" max-w-[50vw] w-full min-h-24 bg-cyan-200 rounded-md">
      <form className="flex flex-col p-6 gap-3">
        <h1 className=" text-3xl">{fieldName}</h1>
        {fields.map((field: { id: Key | null | undefined }, index: number) => (
          <div
            key={field.id}
            className="w-full flex justify-between gap-8 items-center "
          >
            <div className="flex flex-col">
              <span>Points: {details.points}</span>
              <input
                {...register(`${fieldName}.${index}.points`, {
                  onChange: () => handleGetValuesAndCallAddFdata(),
                })}
                type="number"
                placeholder={`Points ${index + 1}`}
                className=" border-gray-400 border rounded-lg text-black text-center"
              />
            </div>
            <div className="flex flex-col flex-1">
              <span>Option</span>
              <select
                {...register(`${fieldName}.${index}.option`, {
                  onChange: () => handleGetValuesAndCallAddFdata(),
                })}
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
  );
}
