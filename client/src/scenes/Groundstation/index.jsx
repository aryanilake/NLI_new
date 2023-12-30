import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import gs from "../../assets/gs.jpg";
import Headers from "../../components/Headers";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { day1, day2, day3, columns } from "../../helper/gsdata"; // Import rows for Day 1
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function GroundStation() {
  const [selectedDay, setSelectedDay] = useState(1); // Default to Day 1

  const handleDayButtonClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <>
      <Navbar bgcolor="#fafaf9" textColor="#000000" />
      <div className="gs bg-transparent pt-[6rem]  flex justify-center items-center flex-col h-max mb-10 px-5 md:px-10 xl:px-20 2xl:px-28 ">
        <div className="hero w-full">
          <div className="mainimg h-[70vh] overflow-hidden  rounded-3xl ">
            <img
              src={gs}
              className="w-full  transform hover:scale-110 transition-transform duration-300 ease-in-out"
              alt="gs"
              srcset=""
            />
          </div>
          <div className="heads flex justify-center items-center mt-5">
            <h1 className="text-9xl text-slate-200 font-sans  reduced-letter-spacing">
              <Headers title="TELEMETRY" />
            </h1>
          </div>
          <Box>
            <ButtonGroup
              size="large"
              variant="text"
              aria-label="text button group"
            >
              <Button onClick={() => handleDayButtonClick(1)}>Day 1</Button>
              <Button onClick={() => handleDayButtonClick(2)}>Day 2</Button>
              <Button onClick={() => handleDayButtonClick(3)}>Day 3</Button>
            </ButtonGroup>
          </Box>
          <div className="datatable">
            {selectedDay === 1 ? (
              <Box
                sx={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
              >
                <DataGrid
                  rows={day1}
                  columns={columns}
                  pageSize={6}
                  // checkboxSelection
                  // disableRowSelectionOnClick
                />
              </Box>
            ) : selectedDay === 2 ? (
              <Box
                sx={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
              >
                <DataGrid rows={day2} columns={columns} pageSize={6} />
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <DataGrid rows={day3} columns={columns} pageSize={6} />
              </Box>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default GroundStation;
