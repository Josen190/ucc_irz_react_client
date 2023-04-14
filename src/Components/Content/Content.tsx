import React, { ReactNode, useState } from "react";
import { useEffect } from "react";
import API, { url_get_news_id_full_text } from "../../Fetch/Api";
import Image from "../../Helpers/Image";
import News from "../../Helpers/News";
import Img from "../../UI/Img/Img";

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
  isClipped,
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
    const arrStr = text.split("\n");
    const arrP: JSX.Element[] = [];
    arrStr.forEach((element, index) => {
      if (element.length === 0 || element === "\r")
        arrP.push(<br key={index} />);
      else arrP.push(<p key={index}>{element}</p>);
    });
    setFormattedText(arrP.length > 0 ? arrP : null);
  }, [text]);

  const getNews = (event: any) => {
    event.target.disabled = true;
    
    API.getFullTextOfNews(id)
      .then((fullText) => {
        setText(fullText);
        setIsClipped(true);
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
        {_isClipped !== null && !_isClipped && (
          <a role="button" onClick={(event) => getNews(event)}>
            Читать далее
          </a>
        )}
      </div>
      {image && <Img image={image} />}
    </div>
  );
}
