import React from "react";
import "../App.css";
import filterImage from "../assets/discoverpage_images/filter.svg";
import music from "../assets/discoverpage_images/music_note.svg";
import { eventArray } from "../Eventdata";
import { useState } from "react";
import { remainEvents } from "../Eventdata";

function Events() {
  //Button functionality
  // eslint-disable-next-line
  const [displayedObjects, setDisplayedObjects] = useState([]);
  const [showHiddenObjects, setShowHiddenObjects] = useState(false);
  const handleButtonClick = () => {
    setShowHiddenObjects(true);
    setDisplayedObjects(remainEvents);
  };

  // Search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [newSerch, setSearchResults] = useState(eventArray);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredResults = eventArray.filter((object) =>
      object.title.toLowerCase().includes(query)
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="md:flex md:justify-center md:items-center">
      <main className="pl-[2rem] pr-[2rem] w-full ">
        <h1 className="mt-[3rem] mb-[1rem] text-[24px] font-medium">
          Discover events near you
        </h1>
        <div className="flex mb-[1rem] justify-between text-center ">
          <form>
            <input
              className="bg-[#827f7f30] border-none w-[265px] h-[48px] rounded-[.6rem]  lg:w-[700px]
               "
              type="text"
              placeholder="Search all events"
              classNameName="search-bar"
              value={searchQuery}
              onChange={handleSearch}
            />
          </form>
          <div className="w-[40%] pl-[2rem] ">
            {<img src={filterImage} alt="icon" />}
          </div>
        </div>
        <div class=" mx-auto">
          <div className="flex justify-between pb-[1rem]  ">
            <div className="w-[43%] h-[84px]     lg:h-[100px] lg:pl-[3rem] lg:pt-[1rem]    bg-[#FBBF0A] rounded-[0.6rem] pl-[1rem] pt-[1rem]">
              <img src={music} alt="music-icon" />
              <p>Music</p>
            </div>
            <div className="h-[84px] w-[43%]    lg:h-[100px] lg:pl-[3rem] lg:pt-[1rem]    bg-[#EEEEEE] rounded-[0.6rem] pl-[1rem] pt-[1rem]">
              <img src={music} alt="music-icon" />
              <p>Tech</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-[43%] h-[84px]     lg:h-[100px]  lg:pl-[3rem] lg:pt-[1rem]      bg-[#B0E298] rounded-[0.6rem] pl-[1rem] pt-[1rem]">
              <img src={music} alt="music-icon" />
              <p>Arts and Culture </p>
            </div>
            <div className="h-[84px] w-[43%]      lg:h-[100px]  lg:pl-[3rem] lg:pt-[1rem]     bg-[#FFC971] rounded-[0.6rem] pl-[1rem] pt-[1rem]">
              <img src={music} alt="music-icon" />
              <p>Business</p>
            </div>
          </div>
        </div>

        <h2 className="text-[24px] font-bold mt-[1.5rem] lg:mt-[3rem] lg:text-center">
          Upcoming Event
        </h2>

        {newSerch.map(function (item) {
          return (
            <div
              className="w-[349px] lg:mx-auto lg:w-[500px]
               md:mx-auto flex justify-between border-2 mt-[1.4rem]   
               border-[#4d4d4d10] px-[.6rem] py-[.6rem] rounded-[.5rem]"
              key={item.id}
            >
              <div className="w-[50%] py-[.7rem] ">
                <div className="flex ">
                  <span className="text-[12px] font-medium w-[58px] text-[#989898] text-center ">
                    {item.date}
                  </span>
                  <span
                    className="text-[#FF0303] bg-[#ff09092e] ml-4 w-[59px] text-[12px] font-semibold  
                     text-center "
                  >
                    {item.price}
                  </span>
                </div>

                <h3 className="w-[110%] mt-2 text-[16px] text-[black] font-bold lg:text-[18px]">
                  {item.title}
                </h3>

                <div className="flex w-[90%] mt-[.1rem] ">
                  <img src={item.icon} alt="icon" class=" w-[70%] lg:w-[40%]" />

                  <p className="text-[14px] w-[20rem] mt-[.8rem]  ml-[.4rem] lg:text-[16px]">
                    {item.name}
                  </p>
                </div>

                <div className="flex mt-[.1rem]">
                  <img src={item.mapline} alt="mapline" />
                  <span class="text-[12px] ml-[.2rem]">{item.location}</span>
                </div>
              </div>

              <div className="w-[70%] pl-[2rem] lg:pl-[6rem]">
                <img src={item.image} alt="icon" />
              </div>
            </div>
          );
        })}

        <div class="mx-auto  text-center lg:mx-auto">
          <button
            type="button"
            onClick={handleButtonClick}
            className=" w-[343px] bg-[#E1E4EB] text-center rounded-xl h-[60px] mt-[1.5rem] lg:w-[45%]"
          >
            Discover more
          </button>
        </div>

        {showHiddenObjects
          ? remainEvents.map((item) => (
              <div>
                <h2 className="text-[24px] font-bold mt-[1.5rem] lg:text-center">
                  {item.heading}
                </h2>
                <div
                  className="w-[349px] lg:mx-auto flex justify-between pl-[1rem] pt-[1rem] 
                border-2 mt-[1.5rem] border-[#4d4d4d10]  pr-[1rem] pb-[1rem] 
                rounded-[.5rem] lg:w-[500px] md:mx-auto"
                  key={item.id}
                >
                  <div className="w-[50%] py-[.7rem] ">
                    <div className="flex">
                      <span className="text-[12px] font-medium w-[58px] text-[#989898] text-center ">
                        {item.date}
                      </span>
                      <span
                        className="text-[#FF0303] bg-[#ff09092e] ml-4 w-[59px] text-[12px] font-semibold  
                     text-center "
                      >
                        {item.price}
                      </span>
                    </div>

                    <h3 className="-w[120%] text-[16px] text-[black] mt-3 font-bold lg:text-[18px]">
                      {item.title}
                    </h3>

                    <div className="flex w-[90%] mt-[.2rem]">
                      <img
                        src={item.icon}
                        alt="icon"
                        class="w-[70%] lg:w-[40%] "
                      />
                      <p className="text-[14px] w-[20rem] lg:text-[16px] mt-[.8rem] ml-[.4rem] ">
                        {item.name}
                      </p>
                    </div>

                    <div className="flex mt-[.4rem]">
                      <img src={item.mapline} alt="mapline" />
                      <span class="text-[12px]">{item.location}</span>
                    </div>
                  </div>

                  <div className="w-[50%]  pl-[2rem] lg:pl-[6rem]">
                    <img src={item.image} alt="icon" />
                  </div>
                </div>
              </div>
            ))
          : null}
      </main>
    </div>
  );
}

export default Events;
