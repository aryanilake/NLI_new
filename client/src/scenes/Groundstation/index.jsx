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
      <Navbar bgcolor="#fafaf9" textColor="#000000" active={"groundstation"} />
      <div className="gs bg-transparent pt-[6rem]  flex justify-center items-center flex-col h-max mb-10 px-5 md:px-10 xl:px-20 2xl:px-28 ">
        <div className="hero w-full">
          <div className="mainimg h-[30vh] md:h-[40vh] flex items-center w-full overflow-hidden justify-center rounded-3xl ">
            <div className="mainimg rounded-3xl overflow-hidden h-[40vh]">
              <img
                src={gs}
                className="w-[160vh] h-[50vh] transform hover:scale-110 transition-transform duration-300 ease-in-out"
                alt="gs"
                srcset=""
              />
            </div>
          </div>
          <div className="mt-6 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eius? Ratione mollitia, omnis id suscipit, veniam ipsam aliquid error minima ducimus totam molestiae. Explicabo expedita odio sint ab, assumenda soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium minus, optio atque, quis blanditiis corporis debitis iusto assumenda nisi placeat, impedit earum quas consequatur maiores perspiciatis provident et totam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, labore! Hic iste accusantium officia at non adipisci obcaecati veniam, illum repudiandae quidem fugit, consequuntur velit alias in saepe ipsa. Reprehenderit!
          </div>
          <div className="heads flex justify-center items-center mt-5">
            <h1 className="text-9xl text-slate-200 font-sans  reduced-letter-spacing">
              <Headers title="TELEMETRY" size="10vh" />
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
