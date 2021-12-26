import React, { useState } from "react";
import Card from '../../UI/Card';
import DataFilter from "../DataFilter/DataFilter";
import './DataShow.css';

function DataShow(props) {
    const [filteredYear, setFilteredYear] = useState('2021');
    const [filteredMonth, setFilteredMonth] = useState('2021');
    const [filteredDate, setFilteredDate] = useState('');
    const filterChangeHandler = (selectedData) => {
        setFilteredDate(selectedData)

    }
    console.log(filteredDate)

    return (
        <Card className='card-data-show'>
            <DataFilter
                className='data-show-control'
                selected={filteredDate}
                onChangeFilter={filterChangeHandler} />

            <div className="data-show-control">

                <table>
                    <thead>
                        <tr>
                            <th style={{ width: '70px' }}>id</th>
                            <th>client</th>
                            <th>current stock</th>
                            <th>last update stock</th>
                            <th>modify stock</th>
                        </tr>
                    </thead>
                    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

                    {props.onSetData.map((data) => {

                        const date = data.lastUpdate.toLocaleString('en-US', { day: '2-digit' });
                        // convert 2021-1-10 --> 2021-01-10
                        const month = (data.lastUpdate.getMonth()) < 10 ? '0' + String(data.lastUpdate.getMonth()) : '' + String(data.lastUpdate.getMonth());
                    /* few note: 
                            - reference -> https://stackoverflow.com/questions/3945202/whats-the-difference-between-stringvalue-vs-value-tostring
                            String(value) ??? or value.toString() ??? 
                            - example use null as value to convert
                                const data = null;
                               String(data) ==> 'null'
                               data.toString() ==> undefined


                    */
                        const year = data.lastUpdate.getFullYear();
                        
                        console.log(`okayyy ${year}-${month}-${date}`, '---', filteredDate)

                    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
                        if (`${year}-${month}-${date}` === filteredDate) {
                            return (
                                <tbody key={data.id}>
                                    <tr >
                                        <td style={{ width: '70px' }}>{data.id}</td>
                                        <td>{data.client}</td>
                                        <td>{data.currentStock}</td>
                                        <td>{year}-{month}-{date}</td>

                                        <td><button className='button-edit' onClick={() => alert('click !!')}> Edit Stock </button></td>
                                    </tr>
                                </tbody>
                            )
                        } else {
                            return;
                        }

                    })}
                </table>

            </div>


        </Card>
    )
}
export default DataShow;