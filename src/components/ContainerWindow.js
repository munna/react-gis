import React, {Component} from 'react';
import PropTypes from 'prop-types';
import interact from 'interactjs';
export default class ContainerWindow extends Component {
    constructor(props){

        super(props);
        
        this.state={};
        this.openWindow=this.openWindow.bind(this);
    }
    openWindow(){
        alert("Testing click");
    }
    propTypes = {
        title: PropTypes.string.isRequired,
        class: PropTypes.string,
        activeClass: PropTypes.string,
        dragStart: PropTypes.func.isRequired
      };
    componentDidMount(){
        interact('.draggable')
  .draggable({
    allowFrom: '.handle',
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
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
    }  
    render () {
        return (<div style={{width:"400px",height:"600px"}}>
            <button type="button" onClick={this.openWindow}  data-toggle="modal" data-target="#basicExampleModal" class="btn btn-outline-primary">Primary</button>
            <div class="card bg-primary text-light draggable">
                <div class="card-header handle">Header</div>
                <div class="card-body bg-white text-dark">Content</div> 
                <div class="card-footer">Footer</div>
            </div> 
            </div>
        )
    }
}
