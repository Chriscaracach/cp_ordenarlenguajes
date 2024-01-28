import { create } from "zustand";

const useStore = create((set) => ({
  languages: [
    "C",
    "C++",
    "Java",
    "JavaScript",
    "Ruby",
    "Python",
    "Perl",
    "PHP",
    "Swift",
    "Kotlin",
    "TypeScript",
    "Rust",
    "Go",
  ],
  setLanguages: (newLanguages) => set({ languages: newLanguages }),
}));

export default useStore;
