import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY ="595f6a832f169d8eaa8e441a2815b10c";

class App extends React.Component{

    /*constructor(){
        this.getWeather =this.getWeather.bind(this);
    }*/
    getWeather= async()=> {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`);

        const data = await api_call.json();
        console.log(data);
    }
    render(){
        return(
            <div>
                <Titles/>
                <Form getWeather={this.getWeather}/>
                <Weather/>
            </div>
        );
    }
}

export default App;