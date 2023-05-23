import React, { useState } from "react";
import getFullTextOfNews from "Fetch/getFullTextOfNews";
import News from "Helpers/News";
import Img from "UI/Img/Img";
import useFormattedText from "../../../../Hooks/useFormattedText";

interface PropsContent {
  news: News;
}

export default function ContentNews({news}: PropsContent): JSX.Element {
  const [_isClipped, setIsClipped] = useState<boolean | null>(
      news.isClipped ?? null
  );
  const [_text, setText] = useState<string>(news.text);

  const formattedText = useFormattedText(_text);
   
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
        <br/>
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
