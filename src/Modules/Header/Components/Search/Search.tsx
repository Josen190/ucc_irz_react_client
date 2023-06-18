import React, {useEffect, useRef, useState} from "react";
import FormGetUser from "../FormGetUser/FormGetUser";
import "./Search.scss";
import { InputText } from "UI/Input";

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
      <InputText
          onSetValue={setSearchString}
          onFocus={() => {setActive(true)}}
      />
      {active && <FormGetUser  SearchString={searchString}/>}
    </div>
  );
}
