import React, { Component } from 'react';
import {storage} from '../firebase';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = e =>{
        if(e.target.files[0]){
            const image =e.target.files[0];
            this.setState(() => ({image}));
            console.log(e.target.files[0]);
        }
    }

    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref(`documents/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            //progress function
        },
        (error) =>{
            //error function
            console.log(error);
        },
        () => {
            //complete function
            storage.ref('documents').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            })
        });
    }

    render(){
        const style = {
            height: '100vh',
            display: 'flex',
            flexDirecction: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };
        return (
            <div style={style}>
                <input type="file" onChange={this.handleChange} />
                <button onClick = {this.handleUpload}>Upload</button>
            </div>
        )
    }
}

export default ImageUpload;