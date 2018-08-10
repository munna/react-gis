import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import interact from 'interactjs';
import { setTimeout } from 'timers';
const uuidv1 = require('uuid/v1');

export default class ContainerWindow extends Component {
    constructor(props){

        super(props);
        //this.container = React.createRef();
        this.state={uuid:uuidv1(),isOpened:props.options.isOpened,resetWindow:false};
        this.openWindow=this.openWindow.bind(this);
        this.minimizeWindow=this.minimizeWindow.bind(this);
        this.closeWindow=this.closeWindow.bind(this);
    }
    openWindow(){
        const {options}=this.props;
        
        let dataX=this.refs.container.getAttribute("data-x").replace("px","");
        let dataY=this.refs.container.getAttribute("data-y").replace("px","");
        if(dataX==options.initialPosition.left && dataY==options.initialPosition.top){
            this.refs.container.setAttribute("data-x",options.openPosition.left);
            this.refs.container.setAttribute("data-y",options.openPosition.top);
            this.refs.container.setAttribute("style","transform:translate("+options.openPosition.left + "px,"+ options.openPosition.top+"px)");
         }
        
        this.setState({isOpened:true});
        return false;
    }
    minimizeWindow(){
        console.log("minimize");
    
        this.setState({isOpened:false});
       
  //this.refs.container.setAttribute("data-y",postion.top);
        // jQuery( '#'+this.state.uuid+" .collapse").collapse('hide');
        // jQuery( '#'+this.state.uuid).addClass("minimized");
    }
    closeWindow(){
        const {options}=this.props;
        
        console.log("close");
        this.setState({isOpened:false,resetWindow:true});
        this.refs.container.setAttribute("data-x",options.initialPosition.left);
        this.refs.container.setAttribute("data-y",options.initialPosition.top);
        this.refs.container.setAttribute("style","transform:translate("+options.initialPosition.left + "px,"+ options.initialPosition.top+"px)");
       
    }
    propTypes = {
        title: PropTypes.string.isRequired,
        class: PropTypes.string,
        activeClass: PropTypes.string,
        dragStart: PropTypes.func.isRequired
      };
    componentDidMount(){

    
    const {options,isOpened}=this.props;
        interact('.draggable')
  .draggable({

    allowFrom: '.handle',
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "body",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1}
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
    //   var textEl = event.target.querySelector('p');

    //   textEl && (textEl.textContent =
    //     'moved a distance of '
    //     + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
    //                  Math.pow(event.pageY - event.y0, 2) | 0))
    //         .toFixed(2) + 'px');
    }
  });
  function dragMoveListener(event){
    var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element 
    target.style.webkitTransform =
    target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }
  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;
  const postion=this.state.isOpened?options.openPosition: options.initialPosition;
 
  this.refs.container.setAttribute("data-x",postion.left);
  this.refs.container.setAttribute("data-y",postion.top);
  this.refs.container.setAttribute("style","transform:translate("+postion.left + "px,"+ postion.top+"px)");
    }  
    render () {
        const {title,options}=this.props;

        return (
            <div id={this.state.uuid}  ref="container" style={{zIndex:99999}}  className={"floatwindow card bg-dark text-light draggable "+(this.state.isOpened?"":"minimized")}>
                <div className="card-header handle">
                <a href="#" className="btn btn-default text-light" onClick={this.openWindow} ><i className= {options.icon}></i></a><span>{title}</span> 
                <button type="button" class="btn btn-sm btn-outline-danger pull-right" onClick={this.closeWindow}> <i className='fa fa-times'></i> </button>
                <button className="modalMinimize btn btn-sm btn-outline-secondary pull-right" onClick={this.minimizeWindow}> <i className='fa fa-minus'></i> </button>
  </div><div className={"card-body  collapse"+ (this.state.isOpened?"show":"")} style={{minWidth:"400px"}}>
  {this.props.children}
  </div> 
                {/* <div class="card-footer">Footer</div> */}
               
            </div> 
        )
    }
}
