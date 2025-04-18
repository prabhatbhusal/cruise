// Navbar Items
export const navItems = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Cruise",
    url: "/cruise",
    submenu: [
      {
        id: 1,
        title: "Cruise1",
        url: "cruise/cruise1",
      },
      {
        id: 2,
        title: "Cruise2",
        url: "cruise/cruise2",
      },
      {
        id: 3,
        title: "Cruise3",
        url: "cruise/cruise3",
      },
    ],
  },
  {
    id: 3,
    title: "Branches",
    url: "/branches",
    submenu: [
      {
        id: 1,
        title: "USA",
        url: "branches/usa",
      },
      {
        id: 2,
        title: "Australia",
        url: "/branches/australia",
      },
      {
        id: 3,
        title: "India",
        url: "/branches/India",
      },
    ],
  },
  {
    id: 4,
    title: "Verify Crew Documents",
    url: "/verify-documents",
  },
  {
    id: 5,
    title: "Contact Us",
    url: "/contact-us",
  },
]