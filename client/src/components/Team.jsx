import React from "react";
import beliefsat1 from "../assets/beliefsat1.jpg";
import './team.css';

const Team = () => {
    return (
        <>
            <div className="flex items-center justify-center">


                <div className="flex w-4/6">
                    <div className="member-image">
                        <img src={beliefsat1} alt="" />
                    </div>
                    <div className="info">
                        <div className="info-1">
                            <div className="w-3/6 flex items-center justify-center">
                                <div className="year-left">
                                    2016
                                </div>
                            </div>
                            <div className="w-3/6 flex items-center justify-center">
                                <div className="domain">
                                    firmware
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="info-2">
                            <b>About</b>
                            <div className="about">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis expedita nobis neque quia dicta est, nemo quae laudantium maiores mollitia alias minus, suscipit eligendi, voluptatem eos ad. Architecto, tenetur reiciendis.
                            </div>
                        </div>
                        <div className="info-1">
                            <div className="w-3/6 flex items-center justify-center">
                                <div className="year-left">
                                    KJSIT
                                </div>
                            </div>
                            <div className="w-3/6 flex items-center justify-center">
                                <div className="domain">
                                    IT
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team
