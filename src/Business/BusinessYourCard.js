import '../App.css';
import Header from './Header';
import Menu from './Menu';
import VerifyLogin from "./VerifyLogin";
import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import showError, { showMessage } from "./Tost-Message";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useCookies } from "react-cookie";
import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';
import React, { useRef } from 'react'; 

export default function BusinessYourCard() {

    VerifyLogin();

    let [cards, setCards] = useState([]);

    let [cookie, setCookie, removeCookie] = useCookies(['connectify']);
    let id = cookie['id'];
    useEffect(() => {
        //api calling 
        if (cards.length == 0) {

            let formData = new FormData();
            formData.append('id', id);
            console.log(id);

            var apiAddress = "http://127.0.0.1:5000/business-your-card";
            axios({
                method: "post",
                responseType: 'json',
                url: apiAddress,
                data: formData,
                headers: {
                    'Content-Type': 'application/json'
                }
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
                        setCards(response.data);
                    }
                }
            }).catch((error) => {
                showError('server not available');
            })
        }
    });
    let card = 0;
    let DisplayCard = function (item) {
        let { card_id, photo, title, description, phone, email, address, city, pincode } = item;

        let handleDelete = function (id) {
            // Make a DELETE request to your Node.js API
            let apiaddress = `http://127.0.0.1:5000/business-your-card/${card_id}`;
            axios({
                method: "delete",
                responseType: 'json',
                url: apiaddress
            }).then(response => {
                console.log(response);
                let error = response.data['error'];
                let message = response.data['message'];
                if (error) {
                    showError(error);
                }
                else {
                    let temp = cards.filter((item) => {
                        if (card_id !== id)
                            return item;
                    });
                    setCards(temp);
                    showMessage(message);
                }
            }).catch(error => {
                showError(error); // Log any errors
                // Handle error states or display error messages to the user
            });
        }

        let downloadQRCode = () => {
            const qrCodeContainer = document.getElementById('qr-code-container');
            htmlToImage.toJpeg(qrCodeContainer)
                .then(function (dataUrl) {
                    saveAs(dataUrl, 'qrcode.jpeg');
                });
        };

        let downloadCard = () => {
            const CardContainer = document.getElementById('card-container');
            htmlToImage.toJpeg(CardContainer)
                .then(function (dataUrl) {
                    saveAs(dataUrl, 'DigitalCard.jpeg');
                });
        };


        const routeUrl = 'http://192.168.100.208:3000/user-view-card';
        return (<div className="row mb-4">
            <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                <span className='fs-4 fw-bold text-danger mb-4'>Card {card += 1}</span>
                <Link to={'/business-edit-card/' + card_id} type='button' className='btn btn-success mb-3'>Edit Card</Link>
                <button type='button' className='btn btn-danger mb-3' onClick={(event) => handleDelete(card_id)}>Delete Card</button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="card card-extra" id="card-container">
                    <img src={`http://127.0.0.1:5000/imagesserver/card/${photo}`} className="card-img-top" height={230} alt="..." />
                    <div className="card-body">
                        <div>
                            <span className="fs-3 fw-bold">{title}</span>
                            <p className="card-text">{description}</p>
                        </div>
                        {/* <hr> */}
                        <div className="icon-container">
                            <div className="icon-div">
                                <a href={`tel:${phone}`} className="links d-flex align-items-center">
                                    <span className="my-icon">
                                        <i className="fa-solid fa-phone" />
                                    </span>
                                    <span className="mx-3 fw-bold">{phone}</span>
                                </a>
                            </div>
                            <div className="icon-div">
                                <a href={`mailto:${email}`} className="links d-flex align-items-center">
                                    <span className="my-icon">
                                        <i className="fa-solid fa-envelope" />
                                    </span>
                                    <span className="mx-3 fw-bold">{email}</span>
                                </a>
                            </div>
                            <div className="icon-div">
                                <a href={`https://www.google.com/maps/search/?api=1&query=${address},${city},${pincode}`} target="_blank" className="links d-flex align-items-center">
                                    <span className="my-icon">
                                        <i className="fa-solid fa-location-dot" />
                                    </span>
                                    <span className="mx-3 fw-bold">{address}<br />{city}-{pincode}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <Link to={`/user-view-card/${card_id}`}>
                    <div id="qr-code-container" style={{ height: "auto", margin: "0", maxWidth: 256, width: "100%" }}>
                        <QRCode
                            size={256}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={routeUrl}
                            viewBox={`0 0 256 256`}
                        />
                    </div>
                </Link>
                <div className="col-lg-8 col-md-8 col-sm-12 col-12 d-flex flex-column mt-4">
                    <button type='button' className='btn btn-outline-dark mb-3' onClick={downloadQRCode}>Download QrCode</button>
                    <button type='button' className='btn btn-outline-success mb-3' onClick={downloadCard}>Download Card Image</button>
                </div>
            </div>

            <hr />
        </div>);
    }

    return (
        <div>
            <ToastContainer />
            <Menu />
            {/* ======== main-wrapper start =========== */}
            <main className="main-wrapper">
                <Header title="Your Cards" />
                {/* ========== section start ========== */}
                <section className="section mt-4">
                    <div className="container-fluid">
                        {cards.map((item) => (
                            DisplayCard(item)
                        ))}
                    </div>
                    {/* end container */}
                </section>
                {/* ========== section end ========== */}
            </main>
        </div>
    );
}