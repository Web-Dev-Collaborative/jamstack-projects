export default {
  type: "object",
  name: "header",
  title: "Header Configuration",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Header Title",
      description: "The title displayed in the header if no logo image added",
      validation: null,
    },
    {
      type: "image",
      name: "logo_img",
      title: "Logo",
      description: "The logo image displayed in the header",
      validation: null,
    },
    {
      type: "string",
      name: "logo_img_alt",
      title: "Logo Alt Text",
      description: "The alt text of the logo image",
      validation: null,
    },
    {
      type: "string",
      name: "url",
      title: "Header Title (Logo) URL",
      description:
        "The URL of the header title (logo). Useful if you want the header title (logo) link to another URL, rather than the home page.",
      validation: null,
    },
    {
      type: "boolean",
      name: "has_nav",
      title: "Enable Navigation Menu",
      description: "Display the navigation menu bar in the header",
      initialValue: true,
      validation: null,
    },
    {
      type: "array",
      name: "nav_links",
      title: "Navigation Links",
      description: "List of navigation links",
      validation: null,
      of: [
        {
          type: "action_menu",
        },
      ],
    },
    {
      type: "string",
      name: "type",
      title: "Object Type",
      description: "The type of the object",
      hidden: false,
      validation: (Rule) => Rule.required(),
      options: {
        list: ["header"],
      },
    },
    {
      type: "string",
      name: "stackbit_model_type",
      title: "Stackbit Model Type",
      description: "Stackbit model type",
      hidden: false,
      validation: (Rule) => Rule.required(),
      options: {
        list: ["object"],
      },
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
