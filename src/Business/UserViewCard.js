import '../App.css';
import VerifyLogin from './VerifyLogin';
import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import showError, { showMessage } from "./Tost-Message";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useParams } from 'react-router-dom';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';

export default function UserCardView() {

    VerifyLogin();

    let [image, setImage] = useState();
    let [name, setName] = useState();
    let [description, setDescription] = useState();
    let [phone, setPhone] = useState();
    let [email, setEmail] = useState();
    let [address, setAddress] = useState();
    let [city, setCity] = useState();
    let [pincode, setPincode] = useState();

    let { id } = useParams();
    useEffect(() => {
        //api calling 

        var apiAddress = `http://127.0.0.1:5000/user-view-card/${id}`;
        axios({
            method: "get",
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response);
            //create variable that has error detail
            let error = response.data[0]['error'];
            if (error !== 'no') {
                //there is an error
                alert(error);
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0)
                    showError('no cards available')
                else {
                    response.data.splice(0, 2);
                    setImage('http://127.0.0.1:5000/imagesserver/card/' + response.data[0]['photo']);
                    setName(response.data[0]['title']);
                    setDescription(response.data[0]['description']);
                    setPhone(response.data[0]['phone']);
                    setEmail(response.data[0]['email']);
                    setAddress(response.data[0]['address']);
                    setCity(response.data[0]['city']);
                    setPincode(response.data[0]['pincode']);
                }
            }
        }).catch((error) => {
            showError('server not available');
        })

    });

    let downloadCard = () => {
        const CardContainer = document.getElementById('card-container');
        htmlToImage.toJpeg(CardContainer)
            .then(function (dataUrl) {
                saveAs(dataUrl, 'DigitalCard.jpeg');
            });
    };

    return (
        <div className='col-4 offset-4'>
            <section className="section">
                <ToastContainer />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-3" id="card-container">
                                <img src={image} className="card-img-top" height={230} alt="..." style={{ "background": "white" }} />
                                <div className="card-body">
                                    <div>
                                        <span className="fs-3 fw-bold">{name}</span>
                                        <p className="card-text">{description}</p>
                                    </div>
                                    {/* <hr> */}
                                    <div className="user-icon-container">
                                        <div className="user-icon-div">
                                            <a href={`tel:${phone}`} className="user-links d-flex align-items-center">
                                                <span className="user-my-icon">
                                                    <i className="fa-solid fa-phone" />
                                                </span>
                                                <span className="mx-3 fw-bold">{phone}</span>
                                            </a>
                                        </div>
                                        <div className="user-icon-div">
                                            <a href={`mailto:${email}`} className="user-links d-flex align-items-center">
                                                <span className="user-my-icon">
                                                    <i className="fa-solid fa-envelope" />
                                                </span>
                                                <span className="mx-3 fw-bold">{email}</span>
                                            </a>
                                        </div>
                                        <div className="user-icon-div">
                                            <a href={`https://www.google.com/maps/search/?api=1&query=${address},${city},${pincode}`} target="_blank" className="user-links d-flex align-items-center">
                                                <span className="user-my-icon">
                                                    <i className="fa-solid fa-location-dot" />
                                                </span>
                                                <span className="mx-3 fw-bold">{address}<br />{city}-{pincode}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <button type="button" className="btn btn-outline-success w-100" onClick={downloadCard}>
                                Download Card Image
                            </button>
                        </div>
                    </div>
                </div>
                {/* end container */}
            </section>
        </div>
    );
}