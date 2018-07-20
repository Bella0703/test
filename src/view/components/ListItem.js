import React from 'react';
import ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';
import Model from '../../store/model/Model';

@inject('Model')
export default class ListItem extends React.Component{
    render(){
        return (
            <div>
                {Model.list}
            </div>
        )
    }
}