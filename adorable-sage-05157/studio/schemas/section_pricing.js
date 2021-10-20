export default {
  type: "object",
  name: "section_pricing",
  title: "Pricing Section",
  fields: [
    {
      type: "string",
      name: "section_id",
      title: "Section ID",
      description:
        "A unique identifier of the section, must not contain whitespace",
      validation: null,
    },
    {
      type: "string",
      name: "title",
      title: "Title",
      description: "The title of the section",
      validation: null,
    },
    {
      type: "string",
      name: "subtitle",
      title: "Subtitle",
      description: "The subtitle of the section",
      validation: null,
    },
    {
      type: "string",
      name: "background",
      title: "Background",
      description: "The background of the section",
      initialValue: "gray",
      validation: null,
      options: {
        list: ["gray", "white"],
      },
    },
    {
      type: "array",
      name: "pricing_plans",
      title: "Pricing Plans",
      validation: null,
      of: [
        {
          type: "pricing_plan",
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
        list: ["section_pricing"],
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
