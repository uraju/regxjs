import React, { Component } from 'react';
import { Menu, Icon} from 'semantic-ui-react'
import './App.css';
import $ from 'jquery';

// .right {
//   float: right;
//   position: relative;
//   top: -10px;
//   left: 18px;
//   }
class App extends Component {
  constructor (props) {
    super(props);
    var _hide = {
      text: ' ', loc: {top: -100, left: -120, display: 'none'}
    };
    this.state = { item: _hide, hide: _hide};
    this.itemClick = this.itemClick.bind(this);
  }
  filterItems = () => {
    console.log('filterItems to process ...');
    console.log(this.state.item);
    this.closeSearch();
  }
  closeSearch = () => {
    this.setState({ item: this.state.hide });
  }
  itemClick = (evt, data) => {
    // console.log(evt);
    // console.log(evt.pageX + ', ' + evt.pageY);
    var _obj = $(evt.target);
    var _item = {}, _loc={};
    // console.log(_obj);
    //var ht = _obj.outerHeight(true);
    var loc = _obj.offset();
    _item.text = _obj.text();
    _loc.left = loc.left;
    _loc.top = loc.top + 5;// + ht;
    _loc.position = 'absolute';
    _loc.display = 'block';
    _item.loc = _loc;
    this.setState({ item: _item })
    //console.log(_item);
  };

  render() {
    return (
      <div className="App">
        <div><span>some pre text</span> <em onClick = {this.itemClick}>mytext 1</em><span> some post text</span></div>
        <div><span>some pre text</span> <em onClick = {this.itemClick}>mytext 2</em><span> some post text</span></div>
        <div><span>some pre text</span> <em onClick = {this.itemClick}>mytext 3</em><span> some post text</span></div>
        <Menu style={this.state.item.loc} vertical>
        <Menu.Item>
          <Menu.Header>Search Item <Icon className="right" onClick={this.closeSearch} name='close' /></Menu.Header>
          <hr />
          <Menu.Menu>
            <Menu.Item onClick={this.filterItems}>
              <span>{this.state.item.text}</span>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>

      </div>
    );
  }
}

export default App;
