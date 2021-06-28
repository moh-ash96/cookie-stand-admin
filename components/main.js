export default function Main(props) {
    const jsonObj = {
        "location": props.location,
        "minCustomers": props.min,
        "maxCustomers": props.max,
        "avgCookies": props.avg
    }
    const data = JSON.stringify(jsonObj)
    return <main>
        <form onSubmit={props.handler}>
            <div className="flex flex-col items-center mx-32 my-32 space-y-20 bg-green-300 rounded-t-lg h-96">
                <div>
                <h2 className="py-3">{props.title}</h2>
                </div>
                <div className="self-center">
                <label className="mx-5" for="location">Location</label>
                <input className="px-44" id="location" name="location" type="text" placeholder={props.location}></input>
                </div>
                <div className="flex flex-row text-base">
                    <div className="flex flex-col">
                        <label className="mx-5 mb-5" for="minimum">Minimum Customers per Hour</label>
                        <input className="mr-5 " id="minimum" name="min" type="number" placeholder={props.min}></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="mx-5 mb-5" for="maximum">Maximum Customers per Hour</label>
                        <input className="mr-5 " id="maximum" name="max" type="number" placeholder={props.max}></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="mx-5 mb-5" for="avg">Average Cookies oer Sale</label>
                        <input className="mr-5 " id="avg" name="avg" type="number" step="0.01" placeholder={props.avg}></input>
                    </div>
                    <button className="px-10 bg-green-700">Create</button>
                </div>

            </div>

        </form>
        <div className="flex flex-col items-center space-y-10">
        <placeholder>Report Table Coming Soon...</placeholder>
        <placeholder>{data}</placeholder>
        </div>
    </main>

}