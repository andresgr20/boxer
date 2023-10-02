export const API_BASE_URL = "http://127.0.0.1:8000/api/";
export const filters = [
  {
    name: "status",
    label: "Status",
    options: [
      { option: "None", value: "" },
      { option: "Delivered", value: "delivered" },
      { option: "In Progress", value: "in-progress" },
      { option: "Pending", value: "pending" },
    ],
  },
  {
    name: "size",
    label: "Size",
    options: [
      { option: "None", value: "" },
      { option: "40ft", value: "40ft" },
      { option: "20ft", value: "20ft" },
    ],
  },
  {
    name: "condition",
    label: "Condition",
    options: [
      { option: "None", value: "" },
      { option: "New", value: "new" },
      { option: "Wind Watertight", value: "wind-watertight" },
      { option: "Cargo Worthy", value: "cargo-worthy" },
    ],
  },
  {
    name: "type",
    label: "Type",
    options: [
      { option: "None", value: "" },
      { option: "High Cube", value: "high-cube" },
      { option: "Standard", value: "standard" },
    ],
  },
];
