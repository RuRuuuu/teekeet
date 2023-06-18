import React from "react";
import "../../App.css";
import { attendanceArray } from "../../AttendeesData";
import { useState } from "react";
import { remainEvents } from "../../AttendeesData";
import sponsor_one from "../../assets/attendees_image/sponsor1.png";
import sponsor_two from "../../assets/attendees_image/sponsor2.png";
import sponsor_three from "../../assets/attendees_image/sponsor3.png";
import sponsor_four from "../../assets/attendees_image/sponsor4.png";
import sponsor_five from "../../assets/attendees_image/sponsor5.png";
import sponsor_six from "../../assets/attendees_image/sponsor6.png";
import signedusers from "../../assets/attendees_image/signedusers.png";

function Attendees() {
  //Button functionality
  // eslint-disable-next-line no-unused-vars
  const [displayedObjects, setDisplayedObjects] = useState([]);
  const [showHiddenObjects, setShowHiddenObjects] = useState(false);
  const handleButtonClick = () => {
    setShowHiddenObjects(true);
    setDisplayedObjects(remainEvents);
  };

  // Search functionality
  // eslint-disable-next-line no-unused-vars
  const [searchQuery, setSearchQuery] = useState("");
  const [newSerch, setSearchResults] = useState(attendanceArray);

  // eslint-disable-next-line no-unused-vars
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredResults = attendanceArray.filter((object) =>
      object.title.toLowerCase().includes(query)
    );
    setSearchResults(filteredResults);
  };

  return (
    <>
      <div className="overflow-hidden md:flex md:flex-col md:justify-center md:items-center">
        <main className="pl-[1rem] pr-[1rem] w-full  overflow-hidden">
          <h1 className="mt-[1.5rem] mb-[1rem] font-bold overflow-hidden text-4xl md:text-center">
            Book your Events with{" "}
            <span style={{ color: "#0765f8" }}>Teeket</span>
          </h1>
          <div className="flex mb-[1rem]">
            <p className="font-light text-xl">
              Your one stop platform to create, manage and promote your events
              at your convenience.
            </p>
          </div>
          <div className="flex  justify-center ">
            <img
              src={signedusers}
              className=""
              alt="signedusers"
              style={{ width: "100px", height: "40px" }}
            />
            <p className="font-light text-lg ml-[15px] mt-[6px]">
              + 2,000 Members
            </p>
          </div>
          <h2 className="text-[24px] font-bold mt-[1.5rem] md:flex md:flex-col md:justify-center md:items-center">
            Trending Event
          </h2>

          {newSerch.map(function (item) {
            return (
              <div
                className="
                w-[330px]  h-[172px] flex justify-between pl-[1rem] pt-[1rem] 
                border-2 mt-[1.5rem] border-[#4d4d4d10]  pr-[1rem] shadow-sm pb-[1rem] 
                rounded-[.5rem] 
                md:w-[349px] lg:w-[90%]    
                    px-[.6rem] py-[.6rem]
                  mx-auto  
                "
                key={item.id}
              >
                <div className="w-[60%] md:w-[50%]">
                  <div className="flex">
                    <span className="text-[12px] font-medium w-[58px] text-[#989898] text-center ">
                      {item.date}
                    </span>
                    <span
                      className="text-[#FF0303] bg-[#ff09092e] w-[59px] text-[12px] font-semibold  
                     text-center "
                    >
                      {item.price}
                    </span>
                  </div>

                  <h3 className="-w[120%] text-[16px] text-[black] font-bold  mt-[0.8rem]">
                    {item.title}
                  </h3>

                  <div className="flex w-[90%] mt-[0.6rem]">
                    <img
                      src={item.icon}
                      alt="eventcreator"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <p className="text-[14px] w-[20rem]  ml-[.4rem] lg:text-[16px] ">
                      {item.name}
                    </p>
                  </div>

                  <div className="flex">
                    <img
                      src={item.mapline}
                      alt="mapline"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <span class="text-[12px]">{item.location}</span>
                  </div>
                </div>

                <div className="w-[45%] ml-[5px] lg:pl-[11rem]">
                  <img
                    src={item.image}
                    alt="eventimage"
                    class="lg:w-[50%] lg:mt-[-.8rem]"
                  />
                </div>
              </div>
            );
          })}

          <div className="  mx-auto text-center">
            <button
              type="button"
              onClick={handleButtonClick}
              className="w-[300px] bg-[#0052f6] text-[#FFFFFF] rounded-[18px]font-bold rounded-full 
              border border-grey-500  text-center h-[60px] mt-[1.6rem] 
              text-xl mx-auto "
            >
              Discover more
            </button>
          </div>

          {showHiddenObjects
            ? remainEvents.map((item) => (
                <div>
                  <h2 className="text-[28px] font-bold mt-[1.8rem] md:flex md:flex-col md:justify-center md:items-center">
                    {item.heading}
                  </h2>
                  <div
                    className="w-[330px] ml-[1rem] h-[172px]  flex justify-between pl-[1rem] pt-[1rem] 
                border-2 mt-[1.5rem] border-[#4d4d4d10]  pr-[1rem] shadow-sm pb-[1rem] 
                rounded-[.5rem] 
                md:w-[349px] lg:w-[90%]   
                -2      px-[.6rem] py-[.6rem]
                 mx-auto  "
                    key={item.id}
                  >
                    <div className="w-[50%]">
                      <div className="flex">
                        <span className="text-[12px] font-medium w-[58px] text-[#989898] text-center ">
                          {item.date}
                        </span>
                        <span
                          className="text-[#FF0303] bg-[#ff09092e] w-[59px] text-[12px] font-semibold  
                     text-center "
                        >
                          {item.price}
                        </span>
                      </div>

                      <h3 className="-w[120%] text-[16px] text-[black] font-bold  mt-[0.8rem]">
                        {item.title}
                      </h3>

                      <div className="flex w-[90%] mt-[0.6rem]">
                        <img
                          src={item.icon}
                          alt="eventcreator"
                          style={{ width: "40px", height: "40px" }}
                        />
                        <p className="text-[14px] w-[20rem]  ml-[.4rem]  lg:text-[16px] mt-[0.8rem]">
                          {item.name}
                        </p>
                      </div>

                      <div className="flex">
                        <img src={item.mapline} alt="mapline" />
                        <span class="text-[12px]">{item.location}</span>
                      </div>
                    </div>

                    <div className="w-[45%]  pl-[1.5rem] lg:pl-[11rem]">
                      <img
                        src={item.image}
                        alt="eventimage"
                        class="lg:w-[50%] lg:mt-[-.8rem]"
                      />
                    </div>
                  </div>
                </div>
              ))
            : null}

          <p className="mt-[1rem] font-medium text-xl text-center">
            More than 1000+ leading event companies choose Teeket
          </p>

          <div className="flex mb-[0.5rem] justify-center -ml-[3px] md:flex   flex-row items-center ">
            <img className="w-20 md:" src={sponsor_one} alt="testimonial" />
            <img className="w-20 md:" src={sponsor_two} alt="testimonial" />
            <img
              className=" w-15 md:"
              src={sponsor_three}
              alt="mavintestimonial"
            />
          </div>
          <div className="flex mb-[0.5rem] justify-center -ml-[3px] md:flex  flex-row r items-center ">
            <img className=" w-20 md: " src={sponsor_four} alt="testimonial" />
            <img
              className="w-30 mr-[5px] md:"
              src={sponsor_five}
              alt="amvcatestimonial"
            />
            <img
              className="w-30 md:"
              src={sponsor_six}
              alt="piggytestimonial"
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default Attendees;
