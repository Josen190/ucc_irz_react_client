async function getPosition(PageIndex: number, SearchString?: string, PageSize = 20) {
    return await fetch.get(url_get_positions, {params: {
            SearchString,
            PageIndex,
            PageSize
        }}).then((response) => {
        const data = response.data as IFetchPositions[];
        return data.map((position) => new Position(position))

    })
}
