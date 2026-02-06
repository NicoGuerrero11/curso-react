interface Props{
    title: string,
    list?: string[]
    onLabelClick: (term:string) => void;
}

export const PreviousSearches = ({title, list, onLabelClick}: Props) => {
    return (
        <div className="previous-searches">
            <h2>{title}</h2>
            <ul className="previous-searches-list">
                {
                    list && (
                        list.map((l) => (

                            <li key={l} onClick={() => onLabelClick(l)}>
                                {l}
                            </li>
                        ))
                    )
                }
            </ul>
        </div>
    )
}
