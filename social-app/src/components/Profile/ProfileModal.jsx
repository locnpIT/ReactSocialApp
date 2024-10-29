import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { Formik, useFormik } from 'formik';
import {updateProfileAction} from "../../redux/Auth/auth.action";
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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

    // const formik = useFormik({
    //     initialValues:{
    //         firstName:"",
    //         lastName:""
    //     },
    //     onSubmit:(values,) =>{
    //       console.log("values ", values);
    //       dispatch(updateProfileAction(values));
    //     }
    // })

    const formik = useFormik({
      initialValues: {
          firstName: "",
          lastName: ""
      },
      onSubmit: async (values) => {
          console.log("values ", values);
          await dispatch(updateProfileAction(values)); // Thêm await để chờ cập nhật
          handleClose(); // Đóng modal sau khi cập nhật thành công
      }
    });

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
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <IconButton onclick={handleClose}>
                  <CloseIcon/>
                </IconButton> 
                <p>Edit Profile</p>
              
              </div>
              <Button type="submit">Save</Button>

            </div>
            <div>
              <div className='h-[15rem]'>
                <img className='w-full h-full rounded-t-md'
                  src='https://images.pexels.com/photos/28681349/pexels-photo-28681349/free-photo-of-charming-front-door-with-sleeping-cat-and-plants.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />


              </div>
              <div className='pl-5'>
                <Avatar 
                  className='transform -translate-y-24'
                  sx={{width: "10rem", height: "10rem"}}
                  src="https://images.pexels.com/photos/28681349/pexels-photo-28681349/free-photo-of-charming-front-door-with-sleeping-cat-and-plants.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </div>
            </div>
            <div className='space-y-3'>
              <TextField 
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />

              <TextField 
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />



            </div>


          </form>

        </Box>
      </Modal>
    </div>
  );
}
