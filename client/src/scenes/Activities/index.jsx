import React, { useEffect, useState, useCallback } from 'react';
import Navbar from "../../components/Navbar";
import software from "../../assets/software.png";
import { getAllactivities } from '../../helper/helper';
import Headers from "../../components/Headers";
import Footer from '../../components/Footer';
// import Spline from '@splinetool/react-spline';


const Activities = () => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        try {
            const result = await getAllactivities();
            const res1 = result.data.map((item) => ({
                aname: item.name,
                image: item.image,
                details: item.details,
                date: item.date
            }));
            setResult(res1);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <Navbar bgcolor="#fafaf9" textColor="#000000" active={"activities"} />
            <div className="mt-20 text-2xl block font-[poppins]">
                <div className="text-center font-bold md:text-5xl">
                    <Headers title="Events & Activities" size="12vh" />
                </div>
                {loading ? (
                    <>
                        <div className='p-5'>Loading...</div>
                        {/* <Spline scene="https://prod.spline.design/JMJrmDJrTm2R4abx/scene.splinecode" /> */}
                    </>
                ) : (
                    result.map((item, index) => (
                        <div key={index} className="md:flex p-8 m-8">
                            {index % 2 === 1 ? (
                                <>
                                    <div className="flex items-center justify-center md:w-1/2">
                                        <div className="flex flex-col items-center justify-center text-center">
                                            <div>{item.details}</div>
                                            <div className="mt-4">{item.date}</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center md:w-1/2">
                                        <img className="h-80 rounded-2xl md:shadow-[0px_0px_50px_15px_rgba(0,0,0,0.3)]" src={item.image} alt="Achievement" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex justify-center items-center md:w-1/2">
                                        <img className="h-80 rounded-2xl md:shadow-[0px_0px_50px_15px_rgba(0,0,0,0.3)]" src={item.image} alt="Achievement" />
                                    </div>
                                    <div className="flex items-center justify-center md:w-1/2">
                                        <div className="flex flex-col items-center justify-center text-center">
                                            <div>{item.details}</div>
                                            <div className="mt-4">{item.date}</div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))
                )}
            </div>
            <Footer bg={"white"} text={"black"} />
        </>
    );
}

export default Activities;