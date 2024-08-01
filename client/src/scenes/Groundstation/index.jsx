import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import gs from "../../assets/gs.jpg";
import info from "../../assets/info.svg";
import Headers from "../../components/Headers";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { day1, day2, day3, columns } from "../../helper/gsdata"; // Import rows for Day 1
import { day11, day21, day31 } from "../../helper/gsdata1"; // Import rows for Day 1
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

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
      <div className="gs bg-transparent pt-[6rem]  flex justify-center items-center flex-col h-max mb-10 px-5 md:px-10 xl:px-20 2xl:px-28 ">
        <div className="hero w-full">
          <div className="mainimg h-[30vh] md:h-[50vh] flex items-center w-full overflow-hidden justify-center rounded-3xl ">
            <div className="mainimg rounded-3xl overflow-hidden h-[50vh]">
              <img
                src={gs}
                className="w-[160vh] h-[60vh] transform hover:scale-110 transition-transform duration-300 ease-in-out"
                alt="gs"
                srcset=""
              />
            </div>
          </div>
          <div className="mt-6 text-2xl font-serif text-justify">
            The ground station is essential for satellite communication, serving as a hub for data acquisition, control, and payload transmission. It includes advanced antennas, receivers, and transmitters. The ground system comprises ground stations and control centers working together to support spacecraft and users. Transceivers in these stations are crucial for data transmission, telemetry, and command operations, ensuring reliable communication with satellites. Satellite tracking uses QFH, monopole, and Yagi-Uda antennas, with signal reception through SDRs or Baofengs and image reception using SDRs and decoding software.
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
                <div className="bg-[#fafaf9] border-black rounded-3xl">
                  {/* <h1 className="text-2xl font-bold my-4 text-center ">Day 1</h1> */}
                  <div className="overflow-x-auto rounded-3xl">
                    <table className="min-w-full border rounded-3xl">
                      <thead>
                        <tr>
                          <th className=" border-b">
                            <div className="flex text-center items-center justify-center">
                              ID
                            </div>
                          </th>
                          <th className=" border-b"><div className="flex text-center items-center justify-center">

                            <div className="ml-5">
                              lsb_reset
                            </div>
                            <img style={{ cursor: "pointer" }} onMouseEnter={() => setLsb(!lsb)} onMouseLeave={() => setLsb(!lsb)} src={info} alt="" className="h-5 m-2 inline-block" />
                            {lsb ? (
                              <>
                                <div className=" w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                  LSB of total number of system resets.
                                </div>
                              </>
                            ) : null
                            }
                          </div></th>
                          <th className=" border-b">
                            <div className="flex text-center items-center justify-center">

                              <div className="">
                                msb_reset
                              </div>
                              <img style={{ cursor: "pointer" }} onMouseEnter={() => setMsb(!msb)} onMouseLeave={() => setMsb(!msb)} src={info} alt="" className="h-5 m-2 inline-block" />
                              {msb ? (
                                <>
                                  <div className=" w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                    MSB of total number of system resets.
                                  </div>
                                </>
                              ) : null
                              }
                            </div>
                          </th>
                          <th className=" border-b">
                            <div className="flex text-center items-center justify-center">

                              <div className="ml-5">
                                WD LSB
                              </div>
                              <img style={{ cursor: "pointer" }} onMouseEnter={() => setWdlsb(!wdlsb)} onMouseLeave={() => setWdlsb(!wdlsb)} src={info} alt="" className="h-5 m-2 inline-block" />
                              {wdlsb ? (
                                <>
                                  <div className="p-1 w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                    LSB of total number of resets induced by watchdog
                                  </div>
                                </>
                              ) : null
                              }
                            </div>
                          </th>
                          <th className="border-b">
                            <div className="flex text-center items-center justify-center">

                              <div className="ml-5">
                                WD MSB
                              </div>
                              <img style={{ cursor: "pointer" }} onMouseEnter={() => setWdmsb(!wdmsb)} onMouseLeave={() => setWdmsb(!wdmsb)} src={info} alt="" className="h-5 m-2 inline-block" />
                              {wdmsb ? (
                                <>
                                  <div className="p-1 w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                    MSB of total number of resets induced by watchdog
                                  </div>
                                </>
                              ) : null
                              }
                            </div>
                          </th>
                          <th className=" border-b">
                            <div className="flex text-center items-center justify-center">

                              <div className="ml-5">
                                Temp1
                              </div>
                              <img style={{ cursor: "pointer" }} onMouseEnter={() => setTemp1(!temp1)} onMouseLeave={() => setTemp1(!temp1)} src={info} alt="" className="h-5 m-2 inline-block" />
                              {temp1 ? (
                                <>
                                  <div className=" w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                    Temperature sensor 1 reading (Temperature of Payload )
                                  </div>
                                </>
                              ) : null
                              }
                            </div>
                          </th>
                          <th className=" border-b">
                            <div className="flex text-center items-center justify-center">

                              <div className="ml-5">
                                Temp2
                              </div>
                              <img style={{ cursor: "pointer" }} onMouseEnter={() => setTemp2(!temp2)} onMouseLeave={() => setTemp2(!temp2)} src={info} alt="" className="h-5 m-2 inline-block" />
                              {temp2 ? (
                                <>
                                  <div className=" w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                    Temperature sensor 1 reading (Temperature of Payload )
                                  </div>
                                </>
                              ) : null
                              }
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {day11.map((item) => (
                          <tr key={item.id} className=" hover:bg-gray-200 text-center text-1xl">
                            <td className="py-2 px-4 border-b">{item.id}</td>
                            <td className="lsb-reset py-2 px-4 border-b">{item.packet_no}</td>
                            <td className="msb-reset py-2 px-4 border-b">{item.msb_reset}</td>
                            <td className="py-2 px-4 border-b">{item.wd_lsb}</td>
                            <td className="py-2 px-4 border-b">{item.wd_msb}</td>
                            <td className="py-2 px-4 border-b">{item.temp1}</td>
                            <td className="py-2 px-4 border-b">{item.temp2}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Box>
            ) : selectedDay === 2 ? (
              <Box
                sx={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
              >
                <div className="bg-[#fafaf9] border-black rounded-3xl">
                  {/* <h1 className="text-2xl font-bold my-4 text-center ">Day 1</h1> */}
                  <div className="overflow-x-auto rounded-3xl">
                    <table className="min-w-full border rounded-3xl">
                      <thead>
                        <tr>
                          <th className=" border-b">
                            <div className="flex text-center items-center justify-center">
                              ID
                            </div>
                          </th>
                          <th className=" border-b"><div className="flex text-center items-center justify-center">

                            <div className="ml-5">
                              lsb_reset
                            </div>
                            <img style={{ cursor: "pointer" }} onMouseEnter={() => setLsb(!lsb)} onMouseLeave={() => setLsb(!lsb)} src={info} alt="" className="h-5 m-2 inline-block" />
                            {lsb ? (
                              <>
                                <div className=" w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                  LSB of total number of system resets.
                                </div>
                              </>
                            ) : null
                            }
                          </div></th>
                          <th className=" border-b">
                            <div className="flex text-center items-center justify-center">

                              <div className="">
                                msb_reset
                              </div>
                              <img style={{ cursor: "pointer" }} onMouseEnter={() => setMsb(!msb)} onMouseLeave={() => setMsb(!msb)} src={info} alt="" className="h-5 m-2 inline-block" />
                              {msb ? (
                                <>
                                  <div className=" w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                    MSB of total number of system resets.
                                  </div>
                                </>
                              ) : null
                              }
                            </div>
                          </th>
                          <th className=" border-b">
                            <div className="flex text-center items-center justify-center">

                              <div className="ml-5">
                                WD LSB
                              </div>
                              <img style={{ cursor: "pointer" }} onMouseEnter={() => setWdlsb(!wdlsb)} onMouseLeave={() => setWdlsb(!wdlsb)} src={info} alt="" className="h-5 m-2 inline-block" />
                              {wdlsb ? (
                                <>
                                  <div className="p-1 w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                    LSB of total number of resets induced by watchdog
                                  </div>
                                </>
                              ) : null
                              }
                            </div>
                          </th>
                          <th className="border-b">
                            <div className="flex text-center items-center justify-center">

                              <div className="ml-5">
                                WD MSB
                              </div>
                              <img style={{ cursor: "pointer" }} onMouseEnter={() => setWdmsb(!wdmsb)} onMouseLeave={() => setWdmsb(!wdmsb)} src={info} alt="" className="h-5 m-2 inline-block" />
                              {wdmsb ? (
                                <>
                                  <div className="p-1 w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                    MSB of total number of resets induced by watchdog
                                  </div>
                                </>
                              ) : null
                              }
                            </div>
                          </th>
                          <th className=" border-b">
                            <div className="flex text-center items-center justify-center">

                              <div className="ml-5">
                                Temp1
                              </div>
                              <img style={{ cursor: "pointer" }} onMouseEnter={() => setTemp1(!temp1)} onMouseLeave={() => setTemp1(!temp1)} src={info} alt="" className="h-5 m-2 inline-block" />
                              {temp1 ? (
                                <>
                                  <div className=" w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                    Temperature sensor 1 reading (Temperature of Payload )
                                  </div>
                                </>
                              ) : null
                              }
                            </div>
                          </th>
                          <th className=" border-b">
                            <div className="flex text-center items-center justify-center">

                              <div className="ml-5">
                                Temp2
                              </div>
                              <img style={{ cursor: "pointer" }} onMouseEnter={() => setTemp2(!temp2)} onMouseLeave={() => setTemp2(!temp2)} src={info} alt="" className="h-5 m-2 inline-block" />
                              {temp2 ? (
                                <>
                                  <div className=" w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                    Temperature sensor 1 reading (Temperature of Payload )
                                  </div>
                                </>
                              ) : null
                              }
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {day21.map((item) => (
                          <tr key={item.id} className=" hover:bg-gray-200 text-center text-1xl">
                            <td className="py-2 px-4 border-b">{item.id}</td>
                            <td className="lsb-reset py-2 px-4 border-b">{item.packet_no}</td>
                            <td className="msb-reset py-2 px-4 border-b">{item.msb_reset}</td>
                            <td className="py-2 px-4 border-b">{item.wd_lsb}</td>
                            <td className="py-2 px-4 border-b">{item.wd_msb}</td>
                            <td className="py-2 px-4 border-b">{item.temp1}</td>
                            <td className="py-2 px-4 border-b">{item.temp2}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Box>
            ) : (
              <Box
                sx={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
              >
                <div className="bg-[#fafaf9] border-black rounded-3xl">
                  {/* <h1 className="text-2xl font-bold my-4 text-center ">Day 1</h1> */}
                  <div className="overflow-x-auto rounded-3xl">
                    <table className="min-w-full border rounded-3xl">
                      <thead>
                        <tr>
                          <th className=" border-b">
                            <div className="flex text-center items-center justify-center">
                              ID
                            </div>
                          </th>
                          <th className=" border-b"><div className="flex text-center items-center justify-center">

                            <div className="ml-5">
                              lsb_reset
                            </div>
                            <img style={{ cursor: "pointer" }} onMouseEnter={() => setLsb(!lsb)} onMouseLeave={() => setLsb(!lsb)} src={info} alt="" className="h-5 m-2 inline-block" />
                            {lsb ? (
                              <>
                                <div className=" w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                  LSB of total number of system resets.
                                </div>
                              </>
                            ) : null
                            }
                          </div></th>
                          <th className=" border-b">
                            <div className="flex text-center items-center justify-center">

                              <div className="">
                                msb_reset
                              </div>
                              <img style={{ cursor: "pointer" }} onMouseEnter={() => setMsb(!msb)} onMouseLeave={() => setMsb(!msb)} src={info} alt="" className="h-5 m-2 inline-block" />
                              {msb ? (
                                <>
                                  <div className=" w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                    MSB of total number of system resets.
                                  </div>
                                </>
                              ) : null
                              }
                            </div>
                          </th>
                          <th className=" border-b">
                            <div className="flex text-center items-center justify-center">

                              <div className="ml-5">
                                WD LSB
                              </div>
                              <img style={{ cursor: "pointer" }} onMouseEnter={() => setWdlsb(!wdlsb)} onMouseLeave={() => setWdlsb(!wdlsb)} src={info} alt="" className="h-5 m-2 inline-block" />
                              {wdlsb ? (
                                <>
                                  <div className="p-1 w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                    LSB of total number of resets induced by watchdog
                                  </div>
                                </>
                              ) : null
                              }
                            </div>
                          </th>
                          <th className="border-b">
                            <div className="flex text-center items-center justify-center">

                              <div className="ml-5">
                                WD MSB
                              </div>
                              <img style={{ cursor: "pointer" }} onMouseEnter={() => setWdmsb(!wdmsb)} onMouseLeave={() => setWdmsb(!wdmsb)} src={info} alt="" className="h-5 m-2 inline-block" />
                              {wdmsb ? (
                                <>
                                  <div className="p-1 w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                    MSB of total number of resets induced by watchdog
                                  </div>
                                </>
                              ) : null
                              }
                            </div>
                          </th>
                          <th className=" border-b">
                            <div className="flex text-center items-center justify-center">

                              <div className="ml-5">
                                Temp1
                              </div>
                              <img style={{ cursor: "pointer" }} onMouseEnter={() => setTemp1(!temp1)} onMouseLeave={() => setTemp1(!temp1)} src={info} alt="" className="h-5 m-2 inline-block" />
                              {temp1 ? (
                                <>
                                  <div className=" w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                    Temperature sensor 1 reading (Temperature of Payload )
                                  </div>
                                </>
                              ) : null
                              }
                            </div>
                          </th>
                          <th className=" border-b">
                            <div className="flex text-center items-center justify-center">

                              <div className="ml-5">
                                Temp2
                              </div>
                              <img style={{ cursor: "pointer" }} onMouseEnter={() => setTemp2(!temp2)} onMouseLeave={() => setTemp2(!temp2)} src={info} alt="" className="h-5 m-2 inline-block" />
                              {temp2 ? (
                                <>
                                  <div className=" w-[30vh] absolute flex bottom-[-22vh] bg-[#FFFFFF] rounded-2xl " style={{ border: "2px solid black" }}>
                                    Temperature sensor 1 reading (Temperature of Payload )
                                  </div>
                                </>
                              ) : null
                              }
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {day31.map((item) => (
                          <tr key={item.id} className=" hover:bg-gray-200 text-center text-1xl">
                            <td className="py-2 px-4 border-b">{item.id}</td>
                            <td className="lsb-reset py-2 px-4 border-b">{item.packet_no}</td>
                            <td className="msb-reset py-2 px-4 border-b">{item.msb_reset}</td>
                            <td className="py-2 px-4 border-b">{item.wd_lsb}</td>
                            <td className="py-2 px-4 border-b">{item.wd_msb}</td>
                            <td className="py-2 px-4 border-b">{item.temp1}</td>
                            <td className="py-2 px-4 border-b">{item.temp2}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Box>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default GroundStation;
