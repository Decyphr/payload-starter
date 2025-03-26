import type { Footer as FooterType, Header as HeaderType } from "~/cms/payload-types";

export const headerData: HeaderType = {
  id: 1,
  navItems: [
    {
      link: {
        type: "reference",
        newTab: false,
        reference: {
          relationTo: "pages",
          value: 101,
        },
        label: "Home",
      },
      id: "nav-item-1",
    },
    {
      link: {
        type: "reference",
        newTab: false,
        reference: {
          relationTo: "posts",
          value: 202,
        },
        label: "Blog",
      },
      id: "nav-item-2",
    },
    {
      link: {
        type: "custom",
        newTab: true,
        url: "https://external-site.com",
        label: "External Site",
      },
      id: "nav-item-3",
    },
    {
      link: {
        type: "reference",
        newTab: false,
        reference: {
          relationTo: "pages",
          value: 103,
        },
        label: "About Us",
      },
      id: "nav-item-4",
    },
    {
      link: {
        type: "custom",
        newTab: false,
        url: "/contact",
        label: "Contact",
      },
      id: "nav-item-5",
    },
  ],
  updatedAt: "2023-10-01T12:00:00Z",
  createdAt: "2023-01-01T12:00:00Z",
};

export const footerData: FooterType = {
  id: 1,
  navItems: [
    {
      link: {
        type: "reference",
        newTab: false,
        reference: {
          relationTo: "pages",
          value: 1,
        },
        label: "Home",
      },
      id: "nav-item-1",
    },
    {
      link: {
        type: "reference",
        newTab: true,
        reference: {
          relationTo: "posts",
          value: 2,
        },
        label: "Blog",
      },
      id: "nav-item-2",
    },
    {
      link: {
        type: "custom",
        newTab: false,
        url: "https://example.com/contact",
        label: "Contact",
      },
      id: "nav-item-3",
    },
  ],
  updatedAt: "2023-10-01T12:00:00Z",
  createdAt: "2023-01-01T12:00:00Z",
};
