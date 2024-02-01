import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface UserDetail {
  points: number;
  option: string;
}

type State = {
  fData: Record<string, UserDetail[]>;
};

type Actions = {
  addFdata: (data: Record<string, UserDetail[]>) => void;
};

export const useFormStore = create<State & Actions>()((set) => ({
  fData: {},

  addFdata: (data: Record<string, UserDetail[]>) =>
    set((state) => (state.fData = data)),
}));

// export const useFormStore = create<State & Actions>()(
//     immer((set) => ({
//       fData: {},
//       addFdata: (data: UserDetail) => {
//         set((state) => {
//           const { points, option } = data;
//           const { fData } = state;
//           const key = option;
//           if (fData[key]) {
//             fData[key].push({ points, option });
//           } else {
//             fData[key] = [{ points, option }];
//           }
//         });
//       },
//     }))
//   );
