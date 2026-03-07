/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import { v4 as uuid } from 'uuid';

// Formik
import { ErrorMessage, Field } from 'formik';

// Material ui
import {
  Select,
  // FormControl,
  MenuItem,
  TextField as TextFieldMUI,
  Typography,
} from '@mui/material';
import { InputLabel } from '@mui/material';
// import Input from '@mui/material/Input';

const errorColor = 'var(--error-color)';


const FormikSelect = ({ field, ...props }) => (
  <Select {...field} {...props} />
);

export const SelectField = ({ name, label, options }) => (
  <>
    <InputLabel>{label}</InputLabel>
    <Field
      fullWidth
      style={{ marginBottom: '0.5em' }}
      label={label}
      defaultValue={options[0].value}
      component={FormikSelect}
      name={name}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label || option.value}
        </MenuItem>
      ))}
    </Field>
  </>
);


export const TextField = ({ field, label, focusedLabel, placeholder, ...props }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (<div style={{ marginBottom: '1em' }}>
    <TextFieldMUI
      fullWidth
      {...field}
      {...props}
      label={isFocused ? (!focusedLabel ? label : focusedLabel) : label}
      onFocus={(e) => {
        setIsFocused(true);
        field.onFocus?.(e);
      }}
      placeholder={placeholder}
    />
    <Typography variant="subtitle2" style={{ color: errorColor }}>
      <ErrorMessage name={field.name} />
    </Typography>
  </div>);
};





export const NumberField = ({ field, label, min, max }) => {
  const [value, setValue] = useState();

  return (
    <div style={{ marginBottom: '1em' }}>
      <TextFieldMUI
        fullWidth
        label={label}
        placeholder={String(min)}
        type="number"
        {...field}
        value={value}
        onChange={(e) => {
          const value = parseInt(e.target.value, 10);
          if (value === undefined) return;
          if (value > max) setValue(max);
          else if (value <= min) setValue(min);
          else setValue(Math.floor(value));
        }}
      />
      <Typography variant="subtitle2" style={{ color: errorColor }}>
        <ErrorMessage name={field.name} />
      </Typography>
    </div>
  );
};

// export const DiagnosisSelection = ({
//   diagnoses,
//   setFieldValue,
//   setFieldTouched,
// }) => {
//   const [selectedDiagnoses, setDiagnoses] = useState>([]);
//   const field = 'diagnosisCodes';
//   const onChange = (data) => {
//     setDiagnoses([...data]);
//     setFieldTouched(field, true);
//     setFieldValue(field, [...data]);
//   };

//   const stateOptions = diagnoses.map((diagnosis) => ({
//     key: diagnosis.code,
//     text: `${diagnosis.name} (${diagnosis.code})`,
//     value: diagnosis.code,
//   }));

//   return (
//     <FormControl style={{ width: 552, marginBottom: '30px' }}>
//       <InputLabel>Diagnoses</InputLabel>
//       <Select
//         multiple
//         value={selectedDiagnoses}
//         onChange={(e) => onChange(e.target.value)}
//         input={<Input />}
//       >
//         {stateOptions.map((option) => (
//           <MenuItem key={uuid()} value={option.value}>
//             {option.text}
//           </MenuItem>
//         ))}
//       </Select>
//       <ErrorMessage name={field} />
//     </FormControl>
//   );
// };
