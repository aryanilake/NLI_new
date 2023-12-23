import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@emotion/react';
import { tokens } from '../theme';
import { getAllprojects } from '../helper/helper';
import { useState , useEffect } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'ProjectName',
    headerName: 'Project name',
    sortable: false,
    width: 160,
   
  },

  {
    field: 'Ongoing',
    headerName: 'Ongoing',
    width: 150,
    editable: false,
  },
  {
    field: 'link1',
    headerName: 'Link 1',
    width: 150,
    editable: false,
  },
  {
    field: 'link2',
    headerName: 'Link 2',
    width: 150,
    editable: false,
  },



];



export default function ProjectsData() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllprojects();
        console.log(result);
        const newRows = result.data.map((item, index) => ({
          id: index + 1,
          ProjectName: item.projname,
          Ongoing: item.active,
          link1: item.link1,
          link2: item.link2
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