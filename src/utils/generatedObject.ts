interface CustomerDetail {
  name: string;
  points: number;
}

type ResultObject = Record<string, { points: string; option: string }[]>;

export function generateObject(
  customerDetails: CustomerDetail[]
): ResultObject {
  const result: ResultObject = {};

  customerDetails.forEach(({ name }) => {
    result[name] = [{ points: '', option: '' }];
  });

  return result;
}
