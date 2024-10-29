import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { Formik, useFormik } from 'formik';
import {updateProfileAction} from "../../Redux/Auth/auth";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  outline: "none",
  p: 2,
  bgcolor: 'background.paper',
  overFlow: "scroll-y",
  borderRadius: 3,

};

export default function ProfileModal({open, handleClose}) {

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        console.log("value ", values);
    }

    const formik = useFormik({
        initialValues:{
            firstName:"",
            lastName:""
        },
        onSubmit:(values,) =>{
          console.log("values ", values);
          dispatch(updateProfileAction(values));
        }
    })

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>


          </form>

        </Box>
      </Modal>
    </div>
  );
}
