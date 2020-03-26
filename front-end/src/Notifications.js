import React, {useState, useEffect, Component} from 'react';
import axios from 'axios';

import './Notifications.css';
import Notification from './Notification';


const Notifications = (props) => {

    const [data, setData] = useState([]);

    useEffect( () => {

        //fetch data

        axios.get('https://api.mockaroo.com/api/1a0149e0?count=20&key=ffab93f0')
        .then((response) => {
            setData(response.data);
        })
        .catch(err => {
            console.log("error");
            console.error(err);

            const backupData = [{
                id: 1,
                isFollower: true,
                userName: "myFriendDave",
                comment: ""
                }, {
                id: 2,
                isFollower: false,
                userName: "myOtherFriendJohn",
                comment: "great post dude!"
                }
            ];
            setData(backupData);
        })
    }, []);

    
    return(
        <div className="Notifications">
            <h1>Appbar</h1>
            {data.map((jsonObj, i) => (
                <Notification key={jsonObj.id} data={jsonObj}/>
            ))}
        </div>
    );

}

export default Notifications;