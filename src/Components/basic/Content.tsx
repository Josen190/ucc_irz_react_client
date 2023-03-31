import React, { ReactNode, useState } from "react";
import { useEffect } from "react";
import API, {url_get_news_id_full_text} from "../../api/Api";
import Image from "../../class/Image";
import News from "../../class/News";

interface PropsContent{
  id: string;
  title: string;
  isClipped?: boolean;
  text?: string;
  image: Image;
}


export default function Content({id, title, isClipped, text, image}: PropsContent): JSX.Element {

  const [_isClipped, setIsClipped] = useState<boolean | null>(isClipped ?? null);
  const [_text, setText] = useState<string>(text);
  const [formattedText, setFormattedText] = useState<JSX.Element[] | null>(null);

  useEffect(() => {
    let arrStr = text.split("\n");
    let arrP = [];
    console.log(arrStr);
    arrStr.forEach((element, index) => {
      if (element.length === 0 || element === '\r') arrP.push(<br key={index} />);
      else arrP.push(<p key={index}>{element}</p>);
    });
    setFormattedText(arrP.length > 0 ? arrP : null);
  }, [text]);

  const getNews = (event) => {
    event.target.disabled = true;
    API.get(url_get_news_id_full_text(id)).then((response) => {
      setText(response.data);
      setIsClipped(true);
      event.target.disabled = false;
    }).catch(() => {event.target.disabled = false;});
  };

  return (
    <div className="content">
      <h5>{title}</h5>
      <div>
        {formattedText}
        {_isClipped !== null && !_isClipped && (
          <a role="button" onClick={(event) => getNews(event)}>
            Читать далее
          </a>
        )}
      </div>
      {image.getImgJSX()}
    </div>
  );
}
