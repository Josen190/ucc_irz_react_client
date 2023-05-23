import React from "react";
import Img from "../Img/Img";
import Image from "Helpers/Image";
import useFormattedText from "../../Hooks/useFormattedText";

interface PropsContent {
  text: string;
  title?: string;
  image?: Image | null;
}

export default function Content({title, text, image}: PropsContent): JSX.Element {

  const formattedText = useFormattedText(text);

  return (
    <div className="content">
      {title && <h5>{title}</h5>}
      <div>
        {formattedText}
      </div>
      {image && <Img image={image} />}
    </div>
  );
}
