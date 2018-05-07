import React, { Component } from 'react';
import PageHeader from '../template/page-header';

export default class About extends Component {

    render() {
        return (
            <div>
                <PageHeader name='Sobre' small='Nos'/>

                <h2>Nossa historia</h2>
                <p>Lerem ipsum dolor sit amet...</p>
                <h2>Missao e visao</h2>
                <p>Lerem ipsum dolor sit amet...</p>
                <h2>Imprensa</h2>
                <p>Lerem ipsum dolor sit amet...</p>
            </div>
        )
    }
}