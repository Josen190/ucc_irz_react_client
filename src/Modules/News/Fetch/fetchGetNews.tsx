import API from "Fetch/Api";
import Tidings from "../Components/Tidings/Tidings";
import React from "react";

function fetchGetNews(
    pageIndex: number, 
    arrNews: JSX.Element[],
    setArrNews: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
    setPageIndex: React.Dispatch<React.SetStateAction<number>>, 
    setDeleteKeyElement: React.Dispatch<React.SetStateAction<string | null>>
) {
    const api = new API();
        api.getListingNews(pageIndex)
            .then((tidings) => {
                const _arrNews: JSX.Element[] = [];
                _arrNews.push(...arrNews);
                tidings.forEach((tiding) => {
                    _arrNews.push(
                        <Tidings
                            key={tiding.id}
                            tidings={tiding}
                            deletElement={setDeleteKeyElement}
                        />
                    );
                });

                setArrNews(_arrNews);
                // if (tidings.length === 10) setPageIndex(pageIndex + 1);
            })
            .catch(() => undefined);
}

export default fetchGetNews;