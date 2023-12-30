import { Box} from "@mui/material";
import React from "react";
import Headers from "../../components/Headers";
import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { createProject } from "../../helper/helper";

export default function Createproject() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  

  const initialValues = {
    projname: "",
    active: "",
    link1: "",
    link2: "",
    about: "",
  };

  const checkoutSchema = yup.object().shape({
    projname: yup.string().required("required"),

    active: yup
      .bool()
      .oneOf([true, false])
      .required("Please enter True of False"),

    about: yup.string().required("required"),
  });

  const handleFormSubmit = async (values) => {
    console.log(values);

    createProject(values)
      .then(() => {
        alert("Project added successfully");
      })
      .catch(({ error }) => {
        alert("Error occured" + error);
      });
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
                value={values.projname}
                name="projname"
                error={!!touched.projname && !!errors.projname}
                helperText={touched.projname && errors.projname}
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
             <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Link1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.link1}
                name="link1"
                error={!!touched.link1 && !!errors.link1}
                helperText={touched.link1 && errors.link1}
                sx={{ gridColumn: "span 2" }}
              />
             <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Link2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.link2}
                name="link2"
                error={!!touched.link2 && !!errors.link2}
                helperText={touched.link2 && errors.link2}
                sx={{ gridColumn: "span 2" }}
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
