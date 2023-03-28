import React, { useState } from "react";
import { useEffect } from "react";
import API, {url_get_news_id_full_text} from "../../api/Api";

export default function Content({ content, title, image, isClipped, newsID }) {
  title = typeof title === "string" ? title : "";
  const [_isClipped, setIsClipped] = useState(isClipped ? false : null);
  const [text, setText] = useState(typeof content === "string" ? content : "");
  const [formattedText, setFormattedText] = useState(null);
  useEffect(() => {
    let arrStr = text.split("\n");
    let arrP = [];
    console.log(arrStr);
    arrStr.forEach((element, index) => {
      if (element.length === 0 || element === '\r') arrP.push(<br key={index} />);
      else arrP.push(<p key={index}>{element}</p>);
    });
    setFormattedText(arrP.length > 0 ? arrP : "");
  }, [text]);

  console.log(formattedText);

  const getNews = (event) => {
    event.target.disabled = true;
    API.get(url_get_news_id_full_text(newsID)).then((response) => {
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
          <button type="link" onClick={(event) => getNews(event)}>
            Читать далее
          </button>
        )}
      </div>
      {image}
    </div>
  );
}
