import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@emotion/react';
import { tokens } from '../theme';


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'ProjectName',
    headerName: 'Project name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
   
  },
  {
    field: 'DateStarted',
    headerName: 'DateStarted',
    width: 150,
    editable: false,
  },
  {
    field: 'Ongoing',
    headerName: 'Ongoing',
    width: 150,
    editable: false,
  },


];

const rows = [
  { id: 1, ProjectName: 'Bliv SAT' , DateStarted:"12-10-1900" , Ongoing:"True"},
  { id: 2, ProjectName: 'Bliv SAT' , DateStarted:"12-10-1900" , Ongoing:"True"},
  { id: 3, ProjectName: 'Bliv SAT' , DateStarted:"12-10-1900" , Ongoing:"True"},
];

export default function ProjectsData() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ height: 400, width: '100%' , "& .css-112ysrj-MuiButtonBase-root-MuiCheckbox-root.Mui-checked ": {
      color: `${colors.greenAccent[400]} !important`,
    }}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
            },
          },
        }}
        pageSizeOptions={[6]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}