import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import gs from "../../assets/gs.jpg";
import Headers from "../../components/Headers";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Footer from "../../components/Footer";
import DataTable from "../../components/DataTable";
import { day1, day2, day3, columns } from "../../helper/gsdata";
import { day11, day21, day31 } from "../../helper/gsdata1";
import { antennas, inverted, QFH } from "../../helper/gstypes";

function GroundStation() {
  const [selectedDay, setSelectedDay] = useState(1); // Default to Day 1
  const [lsb, setLsb] = useState(false);
  const [msb, setMsb] = useState(false);
  const [wdlsb, setWdlsb] = useState(false);
  const [wdmsb, setWdmsb] = useState(false);
  const [temp1, setTemp1] = useState(false);
  const [temp2, setTemp2] = useState(false);

  const handleDayButtonClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <>
      <Navbar bgcolor="#fafaf9" textColor="#000000" active={"groundstation"} />
      <div className="gs bg-transparent pt-[6rem] flex justify-center items-center flex-col h-max mb-10 px-5 md:px-10 xl:px-20 2xl:px-28">
        <div className="hero w-full">
          <div className="mainimg h-[30vh] md:h-[50vh] flex items-center w-full overflow-hidden justify-center rounded-3xl">
            <div className="rounded-3xl overflow-hidden h-[50vh]">
              <img
                src={gs}
                className="w-[160vh] h-[60vh] transform hover:scale-110 transition-transform duration-300 ease-in-out"
                alt="Ground Station"
              />
            </div>
          </div>

          <div className="mt-6 text-2xl font-serif text-justify">
            The ground station is essential for satellite communication, serving as a hub for data acquisition, control, and payload transmission. It includes advanced antennas, receivers, and transmitters. The ground system comprises ground stations and control centers working together to support spacecraft and users. Transceivers in these stations are crucial for data transmission, telemetry, and command operations, ensuring reliable communication with satellites. Satellite tracking uses QFH, monopole, and Yagi-Uda antennas, with signal reception through SDRs or Baofengs and image reception using SDRs and decoding software.
          </div>

          <div className="gstypes">
            <Headers title="ANTENNA TYPES" size="6vh" />

            <div className="container mx-auto p-10">
              <div className="grid grid-cols-2 gap-8">
                {antennas.map((item) => (
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden" key={item.title}>
                    <div className="title text-center text-4xl p-5 font-bold">{item.title}</div>
                    <div className="flex justify-center align-center p-4">
                      <img
                        className="rounded-lg object-contain"
                        style={{ width: "100%", maxHeight: "70vh" }}
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <div className="details text-justify p-6 text-lg">{item.details}</div>
                  </div>
                ))}
              </div>

              <div className="mt-16 grid grid-cols-1 gap-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="title text-center text-4xl p-5 font-bold">{QFH.title}</div>
                  <div className="flex justify-center p-4">
                    <img
                      className="rounded-lg "
                      style={{ width: "90vh", maxHeight: "70vh" }}
                      src={QFH.image}
                      alt={QFH.title}
                    />
                  </div>
                  <div className="details text-justify p-6 text-lg">{QFH.details}</div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="title text-center text-4xl p-5 font-bold">{inverted.title}</div>
                  <div className="flex justify-center p-4">
                    <img
                      className="rounded-lg object-contain"
                      style={{ width: "100%", maxHeight: "60vh" }}
                      src={inverted.image}
                      alt={inverted.title}
                    />
                  </div>
                  <div className="details text-justify p-6 text-lg">{inverted.details}</div>
                </div>
              </div>
            </div>

            <div className="heads flex justify-center items-center mt-5">
              <h1 className="text-9xl text-slate-200 font-sans reduced-letter-spacing">
                <Headers title="TELEMETRY" size="10vh" />
              </h1>
            </div>

            <Box className="mt-8">
              <ButtonGroup size="large" variant="text" aria-label="day button group">
                <Button onClick={() => handleDayButtonClick(1)}>Day 1</Button>
                <Button onClick={() => handleDayButtonClick(2)}>Day 2</Button>
                <Button onClick={() => handleDayButtonClick(3)}>Day 3</Button>
              </ButtonGroup>
            </Box>

            <div className="datatable mt-6">
              {selectedDay === 1 ? (
                <DataTable data={day11} />
              ) : selectedDay === 2 ? (
                <DataTable data={day21} />
              ) : (
                <DataTable data={day31} />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer bg="white" text="black" />
    </>
  );
}

export default GroundStation;
