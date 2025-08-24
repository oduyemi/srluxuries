import { Box, Typography } from "@mui/material";

interface Option {
  label: string;
  value: string;
}

interface RadioGroupInputProps {
  label: string;
  name: string;
  value: string;
  options: Option[];
  onChange: (name: string, value: string) => void;
}

export const RadioGroupInput = ({ label, name, value, options, onChange }: RadioGroupInputProps) => {
  return (
    <Box>
      <Typography className="text-ggreen text-l font-light mb-2">{label}</Typography>
      <ul className="flex flex-col gap-1">
        {options.map((opt, idx) => (
          <li key={idx}>
            <input
              type="radio"
              id={`${name}-${opt.value}`}
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(name, opt.value)}
            />
            <label htmlFor={`${name}-${opt.value}`} className="ml-2">
              {opt.label}
            </label>
          </li>
        ))}
      </ul>
    </Box>
  );
};
