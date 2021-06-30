import { useState } from "react"
import { hours } from '../data.js'
import axios from 'axios'

export default function Main(props) {

    const baseUrl = "https://cookie-stand-ashour.herokuapp.com/"
    const token = "api/token/"
    const apiData = "api/v1/cookie_stands/"

    async function getData(){
        try{
            const tokenResponse = await axios.post(baseUrl + token,{
                username: 'mohammad',
                password: 'moh123456789'
            });
            const {refresh, access} = tokenResponse.data;
            console.log(access);
            const config = {
                headers: { Authorization: `Bearer ${access}`}
            }
            const cookieResponse = await axios.get(baseUrl + apiData, config);
            return cookieResponse.data
        }catch(error){
            console.log(error);
        }
        return []
    }

    let apiContent = getData()
    console.log(apiContent);

    const [location, setLocation] = useState('')
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')
    const [avg, setAvg] = useState('')
    const [report, setReport] = useState('')
    const [summation, setSummation] = useState('')

    // const apiContent = [
    //     {
    //         id: report.length+1,
    //         location,
    //         owner: "mohammad",
    //         description: "Cookies",
    //         hourly_sales: report.hourly_sales,
    //         minimum_customers_per_hour: min,
    //         maximum_customers_per_hour: max,
    //         average_cookies_per_sale: avg
    //     }
    // ]

    // const jsonObj = {
    //     'report': report
    //     // "location": location,
    //     // "minCustomers": min,
    //     // "maxCustomers": max,
    //     // "avgCookies": avg
    // }
    // const data2 = JSON.stringify(data)

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
        let hourly_sales;
        let cumulative = 0;
        const result = []
        let data = {
            id: report.length + 1,
            location,
            hourly_sales: [],
        }
        
        // branches.push(data)

        for (let i = 0; i < 14; i++) {
            customer = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min))
            console.log(customer);
            hourly_sales = customer * parseFloat(avg)
            data.hourly_sales.push(Math.floor(hourly_sales))
            cumulative = Math.floor(hourly_sales)
            for (let j=0; j<report.length+1; j++){
                cumulative += report[j]? report[j].hourly_sales[i]:0
            }
            result.push(cumulative)
        }
        setReport(
            [...report, apiData]
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
                        <label className="mx-5 mb-5" for="avg">Average Cookies per Sale</label>
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
                                    data.hourly_sales.map(cookie => (
                                        <td className="px-4 py-2 text-center border border-collapse border-gray-900">{cookie}</td>
                                    ))
                                }
                                {
                                    <td className="px-4 py-2 text-center border border-collapse border-gray-900">{data.hourly_sales.reduce((a,b)=> a+b,0)}</td>
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