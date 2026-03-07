import React from 'react';

// Material ui
import { Dialog, DialogTitle, DialogContent, Divider } from '@mui/material';
import { Alert } from '@mui/material';
import AddMileageForm from './MileageEntryForm';
import PropTypes from 'prop-types';

// // Form Components
// import AddPatientForm,
// // { PatientFormValues }
//   from './AddPatientForm';


const MileageEntryModal = (
  {
    modalOpen,
    onClose,
    initialFormValues,
    setFormValues,
    onSubmit,
    // error
  }
) => {
  // const [onSubmit,] = React.useState(false);
  const [error] = React.useState(false);

  return (<Dialog fullWidth={true} open={modalOpen} onClose={() => onClose()}>
    <DialogTitle style={{ textAlign: 'center' }}>Add New Mileage Entry</DialogTitle>
    <Divider />
    <DialogContent>
      {error && <Alert severity='error'>{`Error: ${error}`}</Alert>}
      <AddMileageForm
        formValues={initialFormValues}
        setFormValues={setFormValues}
        onSubmit={onSubmit}
      // onCancel={onClose}
      />
    </DialogContent>
  </Dialog>);

};

MileageEntryModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  initialFormValues: PropTypes.shape({
    date: PropTypes.string,
    starting_mileage: PropTypes.string,
    ending_mileage: PropTypes.string,
    client: PropTypes.string,
    invoice_number: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  setFormValues: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default MileageEntryModal;
