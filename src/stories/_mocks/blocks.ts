export function mockLink(appearance: "default" | "outline") {
  return {
    link: {
      type: "custom" as const,
      newTab: true,
      url: "https://google.com",
      label: "Example Link",
      appearance,
    },
  };
}

export function mockImage() {
  return {
    id: 1,
    url: "/images/dummy-800x600.jpg",
    alt: "Placeholder Image",
    width: 800,
    height: 600,
    caption: {
      root: {
        type: "root",
        children: [
          {
            type: "paragraph",
            version: 1,
            children: [
              {
                type: "text",
                text: "This is a caption for the media.",
                version: 1,
              },
            ],
          },
        ],
        direction: "ltr",
        format: "left",
        indent: 0,
        version: 1,
      },
    },
  };
}

export function mockRichText(text: string) {
  return {
    root: {
      type: "root",
      children: [
        {
          tag: "h1",
          type: "heading",
          version: 1,
          children: [
            {
              type: "text",
              text: "Example Heading",
              version: 1,
            },
          ],
        },
        {
          type: "paragraph",
          version: 1,
          children: [
            {
              type: "text",
              text,
              version: 1,
            },
          ],
        },
      ],
      direction: "ltr" as const,
      format: "left" as const,
      indent: 0,
      version: 1,
    },
  };
}
