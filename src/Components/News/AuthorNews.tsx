import React, { Component } from "react";
import Profile_Picture from "../Profile/Profile_Picture";
import { Link } from "react-router-dom";
import Image from "../../class/Image";

interface PropsAuthor {
  id: string;
  firstName: string;
  surname: string;
  patronymic: string | null;
  image: Image;
}

export default function Author({ id, firstName, surname, patronymic, image }: PropsAuthor) : JSX.Element {
  const fullName = `${firstName} ${surname} ${patronymic}`;

  return (
    <Link to={`/account/${id}`} className="row">
      <Profile_Picture type="mini" image={image}></Profile_Picture>
      <h4>{fullName}</h4>
    </Link>
  );
}
