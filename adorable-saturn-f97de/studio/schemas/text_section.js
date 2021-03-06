export default {
  type: "object",
  name: "text_section",
  title: "Text Section",
  fields: [
    {
      type: "markdown",
      name: "content",
      title: "Content",
      description: "The text content of the section",
      validation: null,
    },
    {
      type: "string",
      name: "type",
      title: "Object Type",
      description: "The type of the object",
      hidden: false,
      validation: (Rule) => Rule.required(),
      options: {
        list: ["text_section"],
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
      title: "type",
    },
  },
};
