import { atom, selector } from "recoil";

const darkTheme = atom({
  key: "dark-theme",
  default: false,
});

const authenticated = atom({
  key: "authenticated",
  default: {
    check: false,
    user: {
      name: "Randi Yulio Fajri",
    },
  },
});

export { darkTheme, authenticated };
