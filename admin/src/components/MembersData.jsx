import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@emotion/react';
import { tokens } from '../theme';
import { getAllmembers } from '../helper/helper';
import { useState, useEffect } from 'react';


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
   
  },

  {
    field: 'YearLeft',
    headerName: 'Year Left',
    width: 110,
    editable: false,
  },
  {
    field: 'Project1',
    headerName: 'Project 1',
    width: 110,
    editable: false,
  },
  {
    field: 'Project2',
    headerName: 'Project 2',
    width: 110,
    editable: false,
  },
  {
    field: 'Project3',
    headerName: 'Project 3',
    width: 110,
    editable: false,
  },
  {
    field: 'Domain',
    headerName: 'Domain',
    width: 110,
    editable: false,
  },
  {
    field: 'Active',
    headerName: 'Active',
    width: 110,
    editable: false,
  },
  {
    field: 'Linkedin',
    headerName: 'Linkedin',
    width: 110,
    editable: false,
  },

];




export default function MembersData() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllmembers();
        console.log(result);
        const newRows = result.data.map((item, index) => ({
          id: index + 1,
          fullName: item.fname + item.lname,
          YearLeft: item.yearleft,
          Project1: item.project1,
          Project2: item.project2,
          Project3: item.project3,
          Domain: item.domain,
          Active: item.active,
          Linkedin: item.linkedin,
        }));

        setRows(newRows);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 



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