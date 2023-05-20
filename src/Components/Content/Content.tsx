import React, { useState } from "react";
import { useEffect } from "react";

import Img from "../../UI/Img/Img";
import getFullTextOfNews from "Fetch/getFullTextOfNews";
import News from "Helpers/News";

interface PropsContent {
  news: News;
}

export default function Content({news}: PropsContent): JSX.Element {
  const [_isClipped, setIsClipped] = useState<boolean | null>(
      news.isClipped ?? null
  );
  const [_text, setText] = useState<string>(news.text);
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
    
    getFullTextOfNews(news.id)
      .then((fullText) => {
        news.setFullText(fullText);
        setText(news.text);
        setIsClipped(false);
        event.target.disabled = false;
      })
      .catch(() => {
        event.target.disabled = false;
      });
  };

  return (
    <div className="content">
      {news.title && <h5>{news.title}</h5>}
      <div>
        {formattedText}
        {_isClipped !== null && _isClipped && (
          <a role="button" onClick={(event) => getNews(event)}>
            Читать далее
          </a>
        )}
      </div>
      {news.image && <Img image={news.image} />}
    </div>
  );
}
