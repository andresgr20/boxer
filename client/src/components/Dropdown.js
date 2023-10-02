import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";

export default function Dropdown({ label, selected, options, handleChange }) {
  return (
    <div>
      <FormControl style={{ minWidth: "200px" }}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={selected}
          label={label}
          onChange={handleChange}
          autoWidth={false}
        >
          {options.map((item) => {
            return <MenuItem value={item.value}> {item.option}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
