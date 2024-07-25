import React, { useState } from "react";
import gs from "../assets/gs.jpg";
import { getProject } from "../helper/helper";
import { useEffect } from "react";
import Button from "./Button";

function Projectscontent({ label }) {
  console.log(label);
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProject({ projname: label });
        console.log(result.data);

        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [label]);

  const redirectTo = ({link}) => {
    window.location.href = link; // Replace with your YouTube URL
  };

  return (
    <div>
      <div className="flex items-center justify-center rounded-3xl">
        <img className="w-1/2 h-1/2 md:shadow-[0px_0px_50px_15px_rgba(0,0,0,0.3)] rounded-3xl" src={data.photo} alt="" />
      </div>
      <div className="text m-5">
        <p className="text-1xl">{data.about}</p>
      </div>
      <div className="flex flex-row m-2">
      {data.link1 && (
        <Button
          onClick={() => redirectTo(data.link1)}
          label="Link 1"
          type="button"
          isActive={true}
        />
      )}
      {data.link2 && (
        <Button
          onClick={() => redirectTo(data.link2)}
          label="Link 2"
          type="button"
          isActive={true}
        />
      )}
      </div>
    </div>
  );
}

export default Projectscontent;
