// hook used to store the current page state of main page

import {create} from "zustand";

// could add more pages
type PageType="main"|"game"|"feedback";

interface PageStore{
  page: PageType,
  setPage: (page:PageType)=>void
}

export const usePage= create<PageStore>((set) => ({
    page: "main",
    setPage: (newPage:PageType) => set({ page: newPage }),
  }))