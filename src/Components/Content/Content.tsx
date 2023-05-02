import React, { ReactNode, useState } from "react";
import { useEffect } from "react";

import Image from "../../Helpers/Image";
import News from "../../Helpers/News";
import Img from "../../UI/Img/Img";
import getFullTextOfNews from "Fetch/getFullTextOfNews";

interface PropsContent {
  id: string;
  title?: string;
  isClipped?: boolean;
  text: string;
  image?: Image;
}

export default function Content({
  id,
  title,
  isClipped = false,
  text,
  image,
}: PropsContent): JSX.Element {
  const [_isClipped, setIsClipped] = useState<boolean | null>(
    isClipped ?? null
  );
  const [_text, setText] = useState<string>(text);
  const [formattedText, setFormattedText] = useState<JSX.Element[] | null>(
    null
  );

  useEffect(() => {
    const arrStr = _text.split("\n");
    const arrP: JSX.Element[] = [];
    arrStr.forEach((element, index) => {
      if (element.length === 0 || element === "\r")
        arrP.push(<br key={index} />);
      else arrP.push(<p key={index}>{element}</p>);
    });
    setFormattedText(arrP.length > 0 ? arrP : null);
  }, [_text]);
   
  const getNews = (event: any) => {
    event.target.disabled = true;
    
    getFullTextOfNews(id)
      .then((fullText) => {
        setText(fullText);
        setIsClipped(false);
        event.target.disabled = false;
      })
      .catch(() => {
        event.target.disabled = false;
      });
  };

  return (
    <div className="content">
      {title && <h5>{title}</h5>}
      <div>
        {formattedText}
        {_isClipped !== null && _isClipped && (
          <a role="button" onClick={(event) => getNews(event)}>
            Читать далее
          </a>
        )}
      </div>
      {image && <Img image={image} />}
    </div>
  );
}
