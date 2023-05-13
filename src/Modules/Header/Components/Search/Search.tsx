import React, {useEffect, useRef, useState} from "react";
import InputField from "UI/InputField/InputField";
import FormGetUser from "../FormGetUser/FormGetUser";
import "./Search.scss";

export default function Search() {
    const [searchString, setSearchString] = useState<string>();
    const [active, setActive] = useState(false);
    const searchInputRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick = (e: any) => {
        if (searchInputRef.current && !searchInputRef.current.contains(e.target)) {
            setActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);


  return (
    <div ref={searchInputRef} className="search-container">
      <InputField
          type="text"
          onSetValue={setSearchString}
          onFocus={() => {setActive(true)}}
          // onBlur={() => {setActive(false)}}
      />
      {active && <FormGetUser  SearchString={searchString}/>}
    </div>
  );
}
