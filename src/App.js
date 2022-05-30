import React, { Component, Fragment } from "react";
import Carlist from "./Carlist/Carlist";
import Style from "./App.module.css";

class App extends Component {
    state = {
        cars: [
            { id: 1, name: "Audi", model: 2015, dec: "Gas" },
            { id: 2, name: "Volvo", model: 2016, dec: "Petrol" },
            { id: 3, name: "Mercedes", model: 2017, dec: "Gas" },
            { id: 4, name: "Skoda", model: 2018, dec: "Petrol" },
            { id: 5, name: "Hunday", model: 2019, dec: "Petrol" },
        ],
        showList: true,
        count: 0,
    };
    //---------Delete Handler------------
    deletehandler = (index) => {
        const carItem = [...this.state.cars];
        console.log(carItem);
        carItem.splice(index, 1);
        this.setState({ cars: carItem });
    };
    //-------Show List Handler------------
    showCarList = () => {
        let show = this.state.showList;
        this.setState({ showList: !show });
    };
    //-------Refresh Whole Page------------
    refresh(){
        window.location.reload();
    }
    componentDidMount() {
        document.title = "Car List - Using Map Function";
    }
    render() {
        // if (this.state.cars.length === 0) {
        // }

        //---------List Using Map Function--------------
        const lists = this.state.cars.map((elm, index) => (
            <Carlist
                key={elm.id}
                id={elm.id}
                name={elm.name}
                model={elm.model}
                dec={elm.dec}
                click={() => this.deletehandler(index)}
            />
        ));

        return (
            <Fragment>
                <div className={Style.App}>
                    <h1 className={ this.state.cars.length === 0 ? Style.red : Style.black } >
                        Car's List
                    </h1>
                    <p className={ this.state.cars.length === 0 ? Style.red : Style.black } >
                        Total Cars: {this.state.cars.length}{" "}
                        <button disabled={this.state.cars.length === 0}
                            className={
                                this.state.cars.length === 0
                                    ? Style.buttonDisable
                                    : Style.showButton
                            }
                            onClick={this.showCarList} >
                            {this.state.showList ? "Close" : "Show"}
                        </button>
                        <br></br>
                        {this.state.cars.length === 0 ? (
                            <div>
                            <br></br>
                                <button className={Style.reload} onClick={this.refresh}>Reload</button> 
                                <p className={Style.blue}>Reload Page To GetData</p>
                            </div>
                            ) : ( "" )}
                            </p>
                    <br />
                    {this.state.showList ? <div>{lists}</div> : null}
                </div>
            </Fragment>
        );
    }
}

export default App;
