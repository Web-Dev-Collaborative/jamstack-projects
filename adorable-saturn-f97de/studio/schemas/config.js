export default {
  type: "document",
  name: "config",
  title: "Site Configuration",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
      description: "Site title",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      name: "path_prefix",
      title: "Base URL",
      description:
        "The base URL of this site. Useful for sites hosted under specific path, e.g.: https://www.example.com/my-site/",
      hidden: true,
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      name: "domain",
      title: "Domain",
      description:
        "The domain of your site, including the protocol, e.g. https://mysite.com",
      validation: null,
    },
    {
      type: "image",
      name: "favicon",
      title: "Favicon",
      description: "A square icon that represents your website",
      validation: null,
    },
    {
      type: "string",
      name: "color_scheme",
      title: "Color scheme",
      description: "The color scheme used for the site",
      initialValue: "light",
      validation: (Rule) => Rule.required(),
      options: {
        list: ["light", "dark"],
      },
    },
    {
      type: "string",
      name: "accent_color",
      title: "Accent color",
      description: "The accent color of the site",
      initialValue: "pink",
      validation: (Rule) => Rule.required(),
      options: {
        list: ["pink", "green", "blue", "violet", "yellow"],
      },
    },
    {
      type: "string",
      name: "base_font",
      title: "Font",
      initialValue: "fraunces",
      validation: (Rule) => Rule.required(),
      options: {
        list: ["fraunces", "karla", "system-sans"],
      },
    },
    {
      type: "header",
      name: "header",
      title: "Header Configuration",
      validation: null,
    },
    {
      type: "footer",
      name: "footer",
      title: "Footer Configuration",
      validation: null,
    },
    {
      type: "string",
      name: "stackbit_file_path",
      title: "Site Configuration File Path",
      description: "The file path of the file that stores this data",
      hidden: false,
      validation: (Rule) => Rule.required(),
      options: {
        list: ["content/data/config.json"],
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
        list: ["data"],
      },
    },
  ],
  singleInstance: true,
  preview: {
    select: {
      title: "title",
    },
  },
};
