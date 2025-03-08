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
          // @ts-expect-error - This is a mock, so the ID and slug are all that's needed to reference
          value: {
            id: 101,
            slug: "home",
          },
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
          relationTo: "pages",
          // @ts-expect-error - This is a mock, so the ID and slug are all that's needed to reference
          value: {
            id: 102,
            slug: "about-us",
          },
        },
        label: "About Us",
      },
      id: "nav-item-2",
    },
    {
      link: {
        type: "custom",
        newTab: true,
        url: "https://google.com/",
        label: "Google",
      },
      id: "nav-item-3",
    },
    {
      link: {
        type: "reference",
        newTab: false,
        reference: {
          relationTo: "posts",
          // @ts-expect-error - This is a mock, so the ID and slug are all that's needed to reference
          value: {
            id: 201,
            slug: "blog",
          },
        },
        label: "Blog",
      },
      id: "nav-item-4",
    },
    {
      link: {
        type: "custom",
        newTab: true,
        url: "https://google.com/",
        label: "Another Google Link",
      },
      id: "nav-item-5",
    },
  ],
  updatedAt: "2023-10-01T12:00:00Z",
  createdAt: "2023-09-01T12:00:00Z",
};

export const footerData: FooterType["navItems"] = [
  {
    link: {
      type: "reference",
      newTab: false,
      reference: {
        relationTo: "pages",
        // @ts-expect-error - This is a mock, so the ID and slug are all that's needed to reference
        value: {
          id: 103,
          slug: "privacy-policy",
        },
      },
      label: "Privacy Policy",
    },
    id: "footer-item-1",
  },
  {
    link: {
      type: "custom",
      newTab: true,
      url: "https://www.example.com/terms-of-service",
      label: "Terms of Service",
    },
    id: "footer-item-2",
  },
  {
    link: {
      type: "reference",
      newTab: false,
      reference: {
        relationTo: "posts",
        // @ts-expect-error - This is a mock, so the ID and slug are all that's needed to reference
        value: {
          id: 202,
          slug: "latest-news",
        },
      },
      label: "Latest News",
    },
    id: "footer-item-3",
  },
];
