import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {

    stat = {
        myArray:[{
            id:1,
            name:"david",
            email:"da@do.di"
        },
        {
            id:2,
            name:"Esraa",
            email:"Ee@aa.ii"
        
        },
        {
            id:3,
            name:"test3",
            email:"test3@test.ii"
        
        },
        {
            id:4,
            name:"test4",
            email:"test4@test.ii"
        
        }]
    }
    render() {
        return (

            <div className="container text-center">
                <div className="b-example-divider p-2 mb-3"><h1>HOME</h1></div>
                <div className="row p-3">       
            {/* Para Filtrar un array  */}
            {/* {this.stat.myArray.filter(data => data.name.includes('')).map(items=> */}
            {this.stat.myArray.map(items=>

                        <div className="col-4" key={items.id}>       
                            <div className="card mb-4" >
                            {/* <img className="card-img-top" src="..." alt="Card cap" /> */}
                            <div className="card-body">
                            <h5 className="card-title">Card title "{items.name}"</h5>
                            <p className="card-text text-justify">Some quick example text to build Some quick example text to build Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>  
                    )}
                </div>
            </div>
        )
    }
} export default Home;

