import React,{Component} from 'react';
import { observable, action, computed } from 'mobx';
import { observer, inject } from 'mobx-react';
// import React, { Component } from 'react';
import {toJS } from 'mobx';
import { Table, Icon, Button, Form, Menu,Collapse,Checkbox } from 'antd';
import 'antd/dist/antd.css';

import './index.scss'
const CheckboxGroup = Checkbox.Group;
// var data = [];
@inject('Model')
@observer

export default class TodoBox extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            visibilityName:'hidden',
            display_name1:'inline',
            display_name2:'none',
            current:'1',
            currentCameraId:0,
            checkAll:false,
            checkedList:[],
            indeterminate:true,
            // itemData:data,
            data:[]

        };
    }

    visibilityName(){
        if (this.state.visibilityName == 'hidden') {
            this.setState({
                visibilityName: 'visible',
            })
        } else {
            this.setState({
                visibilityName: 'hidden',
            })
 
        }

        if (this.state.display_name1 == 'none') {
            this.setState({
                display_name1: 'inline',
            })
        } else {
            this.setState({
                display_name1: 'none',
            })
 
        }

        if (this.state.display_name2 == 'none') {
            this.setState({
                display_name2: 'inline',
            })
        } else {
            this.setState({
                display_name2: 'none',
            })
        }

        // let display_name2 = 'none';
        // let display_name1 = 'inlne';
        // if(this.state.display_name2 == 'none'){
        //     display_name2 = 'inline'
        //     display_name1 = 'none'
        // }
        // this.setState({
        //     display_name2:display_name2,
        //     display_name1:display_name1
        // })
   
        // const display_name2 = this.state.display_name2;
        // this.setState({
        //     display_name2: display_name2 === 'none' ? 'inline' : 'none'
        // })
    }

    onClick = (item) => {
        console.log(item)
    }

    getId = (e) => {
        console.log(e)
    }
    
    onDelete = (itemId) => {
        let data = this.state.data
        data = data.filter(item => item.id!==itemId);
        console.log(data);
        this.setState({data});
    }

    handleClick = (e) => {
        console.log('click',e);
        this.setState({
            current:e.key,
        });

    }

    onChange = (checkedList) => {
        // console.log(data);
        this.setState({
            checkedList,
            indeterminate: checkedList.length && (checkedList.length < data.length),
            checkAll:checkedList.length === data.length,
        });
    }

    onCheckAllChange = (e) => {
        this.setState({
            checkedList:e.target.checked ? data : [],
            indeterminate: e.target.checked ? false : true,
            checkAll: e.target.checked,
        });
        console.log(e.key);
    }
    

    render() {
        // var data = [];
        const Panel = Collapse.Panel;
        const { Model } = this.props
        const list = toJS(Model.list);
        
        
        return (
            <div className="App">
                <div className="header">
                    <span className="header-text">我的视图</span>
                    {/* <Button className="edit-btn" type="default" icon="form">编辑</Button> */}
                    {
                        // isEdit ? <div>编辑</div>  : <div>取消编辑</div>
                    }
                    <span className="edit-btn" onClick={this.visibilityName.bind(this)} style={{display:  this.state.display_name1}}>
                        <Icon type="form" />
                        <span className="button-text">编辑</span>
                    </span>
                    <span className="endedit-btn" onClick={this.visibilityName.bind(this)} style={{display:  this.state.display_name2}}>
                        <Icon type="close-circle" />
                        <span className="button-text">取消编辑</span>
                    </span>
                    <Icon className="close" type="close" />

                </div>
                <div className="nav">
                    <Menu className="menu"
                        mode="horizontal"
                        // defaultSelectedKeys={['1']} 
                        // defaultOpenKeys={['1']}
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                    >
                        <Menu.Item className="all" key="1">全部</Menu.Item>
                        <Menu.Item className="photo" key="2">图片</Menu.Item>
                        <Menu.Item className="video" key="3">视频</Menu.Item>
                    </Menu>

                </div>
                <div className="center">
                    <div className="content">
                        <Checkbox
                            className="all-select"
                            indeterminate={this.state.indeterminate}
                            onChange={this.onCheckAllChange}
                            checked={this.state.checkAll}
                            style={{display: this.state.display_name2}}
                        >
                            全选
                        </Checkbox>
                        <br/>
                        
                        <Collapse className="collapse">
                        {
                            list.map(v => {
                                // var activeTab;
                                // var data;
                                // console.log(v)
                                // console.log(v.images)
                                if(this.state.current==1){
                                    this.state.data = [].concat(v.videos,v.images);
                                    // console.log(11);
                                }else if(this.state.current==2){
                                    this.state.data = [].concat(v.images,[]);
                                    // console.log(22);
                                }else{
                                    this.state.data = [].concat(v.videos,[]);
                                    // console.log(33);
                                }
                                
                                return (
                                    // <CheckboxGroup className="checkbox-group" />
                                    <Panel className="panel-header" header={v.cameraName} key={v.cameraId}>
                                    <Checkbox
                                        className="all-check"
                                        indeterminate={this.state.indeterminate}
                                        onChange={this.onCheckAllChange}
                                        checked={this.state.checkAll}
                                        style={{display: this.state.display_name2}}
                                    >
                                    </Checkbox>
                                    {
                                        this.state.data.map((y) => {
                                        return(
                                            <div>
                                                <div className="item">
                                                    <CheckboxGroup 
                                                        className="checkbox-group" 
                                                        options={this.state.data}
                                                        value={this.state.checkedList}
                                                        onChange={this.onChange}
                                                        style={{display: this.state.display_name2}}
                                                    />
                                                    <ListItem
                                                        item={y}
                                                        key={y.id}
                                                        onClick={this.onClick}
                                                        
                                                    />
                                                </div>
                                                <div className="icon">
                                                    <Icon type="download" className="download" onClick={this.getId} />
                                                    <Icon type="delete" className="delete" onClick={this.onDelete}/>
                                                </div>
                                                <br/>
                                            </div>
                                            
                                            
                                        )
                                    })}
                                    </Panel>
                                )
                            })
                        }
                        </Collapse>
                    </div>
                    <div className="btn" style={{visibility:  this.state.visibilityName}}>
                        <Button className="load-btn"><Icon type="download" />下载</Button>
                        <Button  className="del-btn"><Icon type="delete" />删除</Button>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

class ListItem extends Component {
    render(){
        const { item, onClick } = this.props
        return(
            <div className="all-content">
                <div onClick={() => onClick(item)} className="item-content">
                    <img className="img" src={item.imgUrl}/><br/>
                    {item.startTime && <span className="time">{item.startTime}<br/></span>}
                    
                    {item.endTime && <span className="time">{item.endTime}<br/></span>}
                    
                    {item.captureTime && <span className="time">{item.captureTime}</span>}
                
                </div>
                
                {/* <div className="icon">
                <Icon type="download" className="download" onClick={() => onClick(item)} />
                <Icon type="delete" className="delete" onClick={() => onDelete(index,e)}/>
                </div> */}
                

                
                
                {/* <button onClick={() => onClick(item)}></button>
                
                <button onClick={function(){
                    return onClick(item)
                }}></button> */}
            </div>
        )
    }
}

