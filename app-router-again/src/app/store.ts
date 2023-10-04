import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {state} from "sucrase/dist/types/parser/traverser/base";


export const appStore = create(immer((set) => {
  return {
    note: {
      id: "" as string | null,
      title: "" as string,
      body: "" as string,
    },
  }
}))

export const appStoreActions = {
  clearNote: () => {
    appStore.setState((state: any) => {
      state.note.id = null;
      state.note.title = "";
      state.note.body = "";
    })
  }
}
