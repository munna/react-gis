import React, {Component} from 'react';
import ContainerWindow from '../components/ContainerWindow';
import MapView from '../components/MapView';
import Layers from './Layers';
import SearchTools from './SearchTools';
export default class App extends Component {
    render () {
        return <div >
            <div className="tools">
        <ContainerWindow title="Layers Tools" options={{icon:"fa fa-map", isOpened:true,initialPosition:{top:40,left:0},openPosition:{top:40,left:120},closePosition:{top:40,left:80}}} >
        <Layers />
        </ContainerWindow>
        <ContainerWindow title="Search Tools"  options={{icon:"fa fa-search", isOpened:false,initialPosition:{top:100,left:0},openPosition:{top:40,left:120},closePosition:{top:100,left:80}}} >
        <SearchTools />
        </ContainerWindow>
        </div>
        <MapView mapId="mainMap" centerPoint={{lat:20.59,lng:78.25}} mapZoom="4" height="100vh" width="100%" />
        
        </div>
    }
}