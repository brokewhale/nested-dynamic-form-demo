import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface UserDetail {
  points: number;
  option: string;
}
type UserDetailArray = UserDetail[];
type State = {
  fData: Record<string, UserDetailArray>;
};

type Actions = {
  addFdata: (id: string, data: UserDetailArray) => void;
};

export const useFormStore = create<State & Actions>()(
  immer((set) => ({
    fData: {},
    addFdata: (id: string, data: UserDetailArray) => {
      set((state) => {
        const key = id;
        state.fData[key] = data;
      });
    },
  }))
);

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
