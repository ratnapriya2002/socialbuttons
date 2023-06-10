import React from "react";
import { useState } from "react";
import "./index.css";
import activities from "./todos.js";

const GoogleSuggitions = () => {
  const [filterSuggitions, setFilterSuggitions] = useState("");

  const changeSuggitions = (e) => {
    setFilterSuggitions(e.target.value);
  };

  const filteredActivities = activities.filter((activity) =>
    activity.sentence.toLowerCase().includes(filterSuggitions.toLowerCase())
  );

  return (
    <>
      <div>
        {/* <h1>{{filterSuggitions}}</h1> */}
        <input type="search" onChange={changeSuggitions} />
      </div>

      <div>
        {filteredActivities.map((activity) => (
          <div key={activity.id}>
            <p>{activity.sentence}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default GoogleSuggitions;
