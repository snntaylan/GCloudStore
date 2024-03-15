import create from "zustand";

export const useCompanyStore = create((set) => ({
  companies: [],
  setCompanies: (companies) => set(() => ({ companies: companies })),
  addCompany: (company) => set((state) => ({ companies: [...state.companies, company] })),
  updateCompanyById: (company, id) => set((state) => {
    let companies = [...state.companies];
    let foundCompanyIndex = companies.findIndex(x => x.id == id);
    companies[foundCompanyIndex] = {
        ...company,
        id: id,
    }
    return { companies: companies };
  }),
  deleteCompanyById: (id) => set((state) => {
    let companies = [...state.companies];
    let companyIndex = companies.findIndex(x => x.id === id);
    if (companyIndex != -1) {
        companies.splice(companyIndex, 1);
    }
    return { companies: companies };
  }),
}));