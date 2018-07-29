import React, {Component} from 'react';
import ContainerWindow from '../components/ContainerWindow'
export default class App extends Component {
    render () {
        return <div className="row">
        <div className="col-md-6">
        <ContainerWindow />
        </div>
        <div className="col-md-6">
        <ContainerWindow />
        </div>
        </div>
    }
}