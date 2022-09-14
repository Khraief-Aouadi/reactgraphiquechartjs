import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  //cree un constructor avec un state
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  // cree une methode pour afficher les donnees stocke
  componentWillMount(){
   // this.getchartData(); // elle doit être this.getChartData();
    this.getChartData();
  }

  //on stock les donnees
  getChartData(){
    // On appelle Ajax ici
    this.setState({
      chartData:{
        labels: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes'],
        datasets:[
          {
            label:'Population',
            data:[
              2175601,
              868277,
              518635,
              486828,
              341032,
              314138
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
          <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bienvnue</h2>
          </div>
          <div className="container">
            <div className="card">
            <Chart chartData={this.state.chartData} location="France" legendPosition="bottom"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
