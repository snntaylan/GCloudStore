import create from "zustand";

export const useCompanyStore = create((set) => ({
  companies: [],
  setCompanies: (companies) => set(() => ({ companies: companies })),
  addCompany: (company) => set((state) => ({ companies: [...state.companies, company] })),
  updateCompanyById: (company, id) => set((state) => {
    let foundCompany = state.companies.find(x => x.id === id);
    foundCompany = {
        ...foundCompany,
        ...company,
        id: foundCompany.id,
    }
    return { companies: companies };
  }),
}));