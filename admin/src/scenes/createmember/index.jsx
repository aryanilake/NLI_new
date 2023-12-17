import { Box, Input } from "@mui/material";
import React, {  useState  } from "react";
import Headers from "../../components/Headers";
import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
// import { useAuthStore } from "../../store/Store";
import {createMember} from "../../helper/helper";
// import {toast , ToastContainer} from "react-toastify"

export default function Createmember() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // const navigate = useNavigate();
  // const setEmail =   useAuthStore(state=>state.setEmail);
 

  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    contact: "",
    yearleft: 0,
    active: "",
    project1: "",
    project2: "",
    project3: "",
    domain: "",
    departmentclg: "",
    linkedin: "",
    about: "",
    profile:""
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    fname: yup.string().required("required"),
    lname: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    yearleft: yup.number().test({
      name: 'maxYear',
      exclusive: true,
      message: `Year must be less than or equal to the ${new Date().getFullYear()}`,
      test: (value) => {
        const currentYear = new Date().getFullYear();
        return value <= currentYear;
      },
    }),
    active: yup
      .bool()
      .oneOf([true, false])
      .required("Please enter True of False"),
    project1: yup.string().required("required"),
    domain: yup.string().required("required"),
    departmentclg: yup.string().required("required"),
    linkedin: yup.string().required("required"),
    about: yup.string().required("required"),
  });

  const [file, setFile] = useState();
  const onUpload = async (e) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      const base64 = fileReader.result;
      setFile(base64);
    };

    fileReader.readAsDataURL(e.target.files[0]);
  };

  const handleFormSubmit = async (values) => {
    values.profile = file;

    // console.log(values.profile);
    
    createMember(values)
    .then(() => {
        alert("Member added successfully");
    })
    .catch(({ error }) => {
        alert('Error occured');
    });
  };

  return (
    <Box m="20px">
      <Headers
        title="Create Members"
        subtitle="Please check the values entered are correct"
      />
      
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                "& .css-17if8to-MuiFormLabel-root-MuiInputLabel-root": {
                  color: `${colors.greenAccent[400]} !important`,
                },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fname}
                name="fname"
                error={!!touched.fname && !!errors.fname}
                helperText={touched.fname && errors.fname}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lname}
                name="lname"
                error={!!touched.lname && !!errors.lname}
                helperText={touched.lname && errors.lname}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Full Name"
                onBlur={handleBlur}
                value={`${values.fname} ${values.lname}`}
                name="fullName"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="E-mail"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Active"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.active}
                name="active"
                error={!!touched.active && !!errors.active}
                helperText={touched.active && errors.active}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="integer"
                label="Year left"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.yearleft}
                name="yearleft"
                error={!!touched.yearleft && !!errors.yearleft}
                helperText={touched.yearleft && errors.yearleft}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Project 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.project1}
                name="project1"
                error={!!touched.project1 && !!errors.project1}
                helperText={touched.project1 && errors.project1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Project 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.project2}
                name="project2"
                error={!!touched.project2 && !!errors.project2}
                helperText={touched.project2 && errors.project2}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Project 3"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.project3}
                name="project3"
                error={!!touched.project3 && !!errors.project3}
                helperText={touched.project3 && errors.project3}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Domain"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.domain}
                name="domain"
                error={!!touched.domain && !!errors.domain}
                helperText={touched.domain && errors.domain}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Department in College"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.departmentclg}
                name="departmentclg"
                error={
                  !!touched.departmentclg && !!errors.departmentclg
                }
                helperText={
                  touched.departmentclg && errors.departmentclg
                }
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="linkedin link"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.linkedin}
                name="linkedin"
                error={!!touched.linkedin && !!errors.linkedin}
                helperText={touched.linkedin && errors.linkedin}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="About"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.about}
                name="about"
                error={!!touched.about && !!errors.about}
                helperText={touched.about && errors.about}
                sx={{ gridColumn: "span 4" }}
              />
              <Input
                fullWidth
                type="file"
                label="Profile image"
                name="profile"
                onChange={onUpload}
                onBlur={handleBlur}
                error={!!touched.profile && !!errors.profile}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}
