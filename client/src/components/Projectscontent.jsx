import React, { useState } from "react";
import gs from "../assets/gs.jpg";
import { getProject } from "../helper/helper";
import { useEffect } from "react";
import Button from "./Button";

function Projectscontent({ label }) {
  console.log(label);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProject({ projname: label });
        console.log(result.data);

        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [label]);

  const redirectTo = ({ link }) => {
    window.location.href = link; // Replace with your YouTube URL
  };

  return (
    <div>
      {loading ? <div className='p-5 text-2xl'>Loading...</div> : (
        <>
          <div className="flex items-center justify-center rounded-3xl">
            <img className="w-1/2 h-1/2 md:shadow-[0px_0px_50px_15px_rgba(0,0,0,0.3)] rounded-3xl" style={{ maxHeight: "70vh", maxWidth: "100vh" }} src={data.photo} alt="" />
          </div>
          <div className="text m-5">
            <p className="text-2xl leading-8 tracking-wide">{data.about}</p>
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
        </>
      )}
    </div>
  );
}

export default Projectscontent;
