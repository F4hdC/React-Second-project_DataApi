import React, { Component } from 'react'
import axios from 'axios'

class Data extends Component {

    state={
        dataApi:[]
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => { 
            this.setState({
                dataApi:response.data
            });
            console.log(this.state.dataApi);
        })

    }

    render() {
        return (
        <div className="container text-center">
            <h1>DataApi</h1>
            <h3>The Names given in Api are: </h3>
            {this.state.dataApi.map(items => <h5 key={items.id} className="text-success">{items.name}</h5>)}

        </div>
        )
    }
}export default Data;
