import "../libs/loading.css";

const loading = () => {
    return (
        <div className="bg-lime-300 min-h-screen flex justify-center items-center">

            <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>


        </div>
    )
}

export default loading
