import React from 'react';

// Material ui
import { Grid, Button } from '@mui/material';

// Form Components / Formik
import { useFormikContext, Field, Formik, Form } from 'formik';
import {
  TextField,
} from './FormField';
import PropTypes from 'prop-types';


const FormValueSync = ({ setExternalState }) => {
  const { values } = useFormikContext();

  React.useEffect(() => {
    setExternalState(values);
  }, [values, setExternalState]);

  return null;
};


export const AddMileageForm = ({
  formValues,
  setFormValues,
  onSubmit,
  onCancel
}) => {
  return (
    <Formik
      enableReinitialize={true} // Crucial: allows form to update when 'dataToEdit' changes
      initialValues={formValues}
      onSubmit={onSubmit}
      validate={(values) => {
        const requiredError = 'Field is required';
        const errors = {};
        if (!values.eventDate) {
          errors.eventDate = requiredError;
        } else {
          const dateRegex = /^\d{4}-(0?[1-9]|[12]\d|3[01])-(0?[1-9]|1[0-2])$/;

          if (!dateRegex.test(values.eventDate)) {
            errors.eventDate = 'Invalid format. Use YYYY-DD-MM';
          } else {
            // 3. Logic check (optional: prevent dates like 2024-31-02)
            const [year, day, month] = values.eventDate.split('-').map(Number);
            const dateObj = new Date(year, month - 1, day);

            if (dateObj.getFullYear() !== year ||
              dateObj.getMonth() !== month - 1 ||
              dateObj.getDate() !== day) {
              errors.eventDate = 'This date does not exist';
            }
          }
        }
        if (!values.startingMileage) {
          errors.startingMileage = requiredError;
        }
        if (values.endingMileage && values.endingMileage < values.startingMileage) {
          errors.endingMileage = 'Ending mileage cannot be less than starting mileage';
        }
        if (!values.client) {
          errors.client = requiredError;
        }
        return errors;
      }}
    >
      {({ isValid, dirty }) => {
        <FormValueSync setExternalState={setFormValues} />;
        return (
          <Form className='form ui'>
            <Field
              label={'Date YYYY-DD-MM'}
              focusedLabel={'Date'}
              placeholder='Date YYYY-DD-MM'
              name='eventDate'
              component={TextField}
            />
            <Field
              label='Starting Mileage'
              placeholder='Starting Mileage'
              name='startingMileage'
              component={TextField}
            />
            <Field
              label='Ending Mileage'
              placeholder='Ending Mileage'
              name='endingMileage'
              component={TextField}
            />
            <Field
              label='Client'
              placeholder='Client Name'
              name='client'
              component={TextField}
            />
            <Field
              label='Invoice Number'
              placeholder='Invoice Number'
              name='invoiceNumber'
              component={TextField}
            />
            <Field
              label='Description'
              placeholder='Description'
              name='description'
              component={TextField}
              multiline
              maxRows={3}
            />
            <Grid>
              <Grid item>
                <Button
                  color='secondary'
                  variant='contained'
                  style={{
                    float: 'left',
                    backgroundColor: 'var(--error-color)'
                  }}
                  type='button'
                  onClick={onCancel}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  style={{
                    float: 'right',
                  }}
                  sx={{
                    backgroundColor: isValid ? 'var(--header-background)' : 'inherit'
                  }}
                  type='submit'
                  variant='contained'
                  disabled={!dirty || !isValid}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

AddMileageForm.propTypes = {
  formValues: PropTypes.shape({
    eventDate: PropTypes.string,
    startingMileage: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    endingMileage: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    client: PropTypes.string,
    invoice_number: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }),
  setFormValues: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

FormValueSync.propTypes = {
  setExternalState: PropTypes.func.isRequired
};

export default AddMileageForm;
