import { Box, Input, InputLabel } from "@mui/material";
import React from "react";
import Headers from "../../components/Headers";
import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

export default function Createproject() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const initialValues = {
    projName: "",
    datejoined: "2/3/5555",
    active: "",
    projimage: null,
    para1: "",
  };

  const checkoutSchema = yup.object().shape({
    projName: yup.string().required("required"),

    datejoined: yup.date().required("required"),
    active: yup
      .bool()
      .oneOf([true, false])
      .required("Please enter True of False"),

    para1: yup.string().required("required"),
  });

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Headers
        title="Create Project"
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
          setFieldValue,
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
                label="Project Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.projName}
                name="projName"
                error={!!touched.projName && !!errors.projName}
                helperText={touched.projName && errors.projName}
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
                type="date"
                label="Date joined"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.datejoined}
                name="datejoined"
                error={!!touched.datejoined && !!errors.datejoined}
                helperText={touched.datejoined && errors.datejoined}
                sx={{ gridColumn: "span 2" }}
              />
    
     
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="About"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.para1}
                name="para1"
                error={!!touched.para1 && !!errors.para1}
                helperText={touched.para1 && errors.para1}
                sx={{ gridColumn: "span 4" }}
              />
              <Input
                fullWidth
                type="file"
                label="Profile image"
                onChange={(event) =>
                  setFieldValue("projimage", event.currentTarget.files[0])
                }
                onBlur={handleBlur}
                error={!!touched.projimage && !!errors.projimage}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Project
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}
