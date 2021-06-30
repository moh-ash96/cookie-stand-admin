import { useState } from "react"
import { hours } from '../data.js'

export default function Main(props) {


    const [location, setLocation] = useState('')
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')
    const [avg, setAvg] = useState('')
    const [report, setReport] = useState('')
    const [summation, setSummation] = useState('')


    // const jsonObj = {
    //     'report': report
    //     // "location": location,
    //     // "minCustomers": min,
    //     // "maxCustomers": max,
    //     // "avgCookies": avg
    // }
    // const data2 = JSON.stringify(jsonObj)

    function onChangeLoc(event) {
        event.preventDefault();
        setLocation(event.target.value);
    }
    function onChangeMin(event) {
        event.preventDefault();
        setMin(event.target.value);
    }
    function onChangeMax(event) {
        event.preventDefault();
        setMax(event.target.value);
    }
    function onChangeAvg(event) {
        event.preventDefault();
        setAvg(event.target.value);
    }

    function onCreate(event) {
        event.preventDefault();
        let customer;
        let cookies;
        let cumulative = 0;
        const result = []
        let data = {
            id: report.length + 1,
            location,
            cookies: [],
        }
        
        // branches.push(data)

        for (let i = 0; i < 14; i++) {
            customer = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min))
            console.log(customer);
            cookies = customer * parseFloat(avg)
            data.cookies.push(Math.floor(cookies))
            cumulative = Math.floor(cookies)
            for (let j=0; j<report.length+1; j++){
                cumulative += report[j]? report[j].cookies[i]:0
            }
            result.push(cumulative)
        }
        setReport(
            [...report, data]
        )

        setSummation(
            result
        )
        
        props.setBranch(
            report.length + 1
        )

    }

    return <main>
        <form onSubmit={onCreate} >
            <div className="flex flex-col items-center w-4/5 mx-32 my-32 ml-40 space-y-20 bg-green-300 rounded-t-lg h-96">
                <div>
                    <h2 className="py-3 mt-5 text-4xl">{props.title}</h2>
                </div>
                <div className="self-center">
                    <label className="mx-5" for="location">Location</label>
                    <input className="w-50 px-44" id="location" name="location" type="text" placeholder={location} onChange={onChangeLoc}></input>
                </div>
                <div className="flex flex-row text-base">
                    <div className="flex flex-col p-2 mr-3 bg-green-200 rounded-lg">
                        <label className="mx-5 mb-5" for="minimum">Minimum Customers per Hour</label>
                        <input id="minimum" name="min" type="number" placeholder={min} onChange={onChangeMin}></input>
                    </div>
                    <div className="flex flex-col p-2 mr-3 bg-green-200 rounded-lg">
                        <label className="mx-5 mb-5" for="maximum">Maximum Customers per Hour</label>
                        <input id="maximum" name="max" type="number" placeholder={max} onChange={onChangeMax}></input>
                    </div>
                    <div className="flex flex-col p-2 mr-3 bg-green-200 rounded-lg">
                        <label className="mx-5 mb-5" for="avg">Average Cookies oer Sale</label>
                        <input id="avg" name="avg" type="number" step="0.01" placeholder={avg} onChange={onChangeAvg}></input>
                    </div>
                    <button className="px-12 text-2xl bg-green-500 rounded-lg">Create</button>
                </div>

            </div>

        </form>
        <div className="flex flex-col items-center space-y-10 ">
            {(report.length == 0) ? <h2>No Cookie Stand Available</h2> :

                <table className="w-5/6 bg-green-300 ">
                    <thead className="bg-green-600 ">
                        <tr>
                            <th className="px-4 py-2 text-center">Location</th>
                            {
                                hours.map(hour => (<th className="px-4 py-2 text-center">{hour}</th>))
                            }
                            <th className="px-4 py-2 text-center">Totals</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            report.map(data => (<tr className="odd:bg-green-500">
                                <td className="px-4 py-2 text-center border border-collapse border-gray-900">{data.location}</td>
                                {
                                    data.cookies.map(cookie => (
                                        <td className="px-4 py-2 text-center border border-collapse border-gray-900">{cookie}</td>
                                    ))
                                }
                                {
                                    <td className="px-4 py-2 text-center border border-collapse border-gray-900">{data.cookies.reduce((a,b)=> a+b,0)}</td>
                                }
                            </tr>))
                        }



                    </tbody>
                    <tfoot className="bg-green-600">
                        <tr>
                            <th className="px-4 py-2 text-center">Totals</th>
                            {
                                summation.map(sum=>(
                                    <th className="px-4 py-4 text-center">{sum}</th>
                                ))
                            }
                            <th className="px-4 py-2 text-center">{summation.reduce((a, b) => a+b,0)}</th>

                        </tr>
                    </tfoot>
                </table>
            }
        </div>
    </main>

}