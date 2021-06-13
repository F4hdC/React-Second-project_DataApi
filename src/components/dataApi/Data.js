import React, { Component } from 'react'
import axios from 'axios'

class Data extends Component {

    state={
        dataApi:[],
        url : "https://jsonplaceholder.typicode.com/users",
    }

    componentDidMount() {
        axios.get(this.state.url)
        .then(response => { 
            this.setState({
                dataApi:response.data
            });
            console.log(this.state.dataApi);
        })

    }

    render() {
        return (
        <div className="container">
            <header className="text-center">
            <div className="b-example-divider p-2"><h1>DATA-API</h1></div>
            <h3>The Table of JSON from : </h3>
            </header>
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
            {this.state.dataApi.map(items => 
                <tbody key={items.id}>
                  <tr>
                    <th scope="row">{items.id}</th>
                    <td>{items.name}</td>
                    <td>{items.username}</td>
                    <td>{items.email}</td>
                  </tr>
                  </tbody>
                )}
                </table>

        </div>
        )
    }
}export default Data;
