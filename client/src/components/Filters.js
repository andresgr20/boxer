import {
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
  FormControl,
  FormLabel,
} from "@mui/material";
import Dropdown from "./Dropdown";
import { filters } from "../config/config";

export default function Filters(props) {
  const { filterValues, onChange } = props;

  return (
    <FormControl className="form-container" sx={{ m: 1, minWidth: 120 }}>
      <FormLabel>Filters</FormLabel>
      <FormGroup className="dropdown-container">
        {filters.map((item) => {
          return (
            <Dropdown
              key={item.name}
              options={item.options}
              selected={filterValues[item.name]}
              label={item.label}
              handleChange={(event) => onChange(item.name, event.target.value)}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
}
