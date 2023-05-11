import React, {useState} from "react";
import InputField from "UI/InputField/InputField";
import FormGetUser from "../FormGetUser/FormGetUser";
import "./Search.scss";

export default function Search() {
    const [searchString, setSearchString] = useState<string>();
    const [active, setActive] = useState(false);


  return (
    <div className="search-container">
      <InputField
          type="text"
          onSetValue={setSearchString}
          onFocus={() => {setActive(true)}}
          onBlur={() => {setActive(false)}}
      />
      {active && <FormGetUser SearchString={searchString} />}
    </div>
  );
}
