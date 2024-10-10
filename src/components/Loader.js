import spinner from './loader.mp4'

const Loader = () => {
    return (
        <div className="loader">
            <video autoPlay loop muted src={spinner} alt="Loading"></video>
            <h1>Fetching Data</h1>
        </div>
    )
}

export default Loader