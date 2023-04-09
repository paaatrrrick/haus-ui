import "../styles/Loading.css"

const Loading = (props) => {
    const { canCloseTab } = props;
    return (
        <div className="loading">
            <h1>{canCloseTab ? 'Loading' : 'Submitting'}</h1>
            {!canCloseTab && <p>Please don't close or refresh this tab</p>}
            <span className="loader"></span>
        </div>
    )
}

export default Loading;

