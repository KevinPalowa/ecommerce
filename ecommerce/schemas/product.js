export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      option: { hotspot: true },
    },
    { name: "name", title: "Name", type: "string" },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90, // will be ignored if slugify is set
      },
    },
    { name: "price", title: "Price", type: "number" },
    { name: "details", title: "Details", type: "string" },
  ],
};
