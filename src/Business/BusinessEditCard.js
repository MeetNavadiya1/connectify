import Header from "./Header";
import Menu from "./Menu";
import VerifyLogin from "./VerifyLogin";
import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import showError, { showMessage } from "./Tost-Message";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useCookies } from "react-cookie";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function BusinessEditCard() {

    VerifyLogin();

    let [api, setApi] = useState();
    let [image, setImage] = useState();
    let [serverimage, setServerimage] = useState();
    let [name, setName] = useState();
    let [description, setDescription] = useState();
    let [phone, setPhone] = useState();
    let [email, setEmail] = useState();
    let [address, setAddress] = useState();
    let [city, setCity] = useState();
    let [pincode, setPincode] = useState();


    let [cards, setCards] = useState([]);

    let [cookie, setCookie, removeCookie] = useCookies(['connectify']);
    let id = cookie['id'];

    let { card_id } = useParams();
    useEffect(() => {
        if (api == undefined) {
            //api calling 
            if (cards.length == 0) {

                var apiAddress = `http://127.0.0.1:5000/business-edit-card/${card_id}`;
                axios({
                    method: "get",
                    responseType: 'json',
                    url: apiAddress,
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
            }
            setApi("");
        }
    });

    let navigator = useNavigate();
    let handleImageChange = (e) => {
        const file = e.target.files[0];
        setServerimage(file);
        console.log(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setImage(loadEvent.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    let handleSubmit = function (event) {
        let formData = new FormData();
        formData.append('business_id', id);
        formData.append('image', serverimage);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('address', address);
        formData.append('city', city);
        formData.append('pincode', pincode);
        let apiAddress = `http://127.0.0.1:5000/business-edit-card/${card_id}`;
        axios({
            method: "post",
            responseType: 'json',
            url: apiAddress,
            data: formData
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            } else {
                let message = response.data[2]['message'];
                showMessage(message);
                setTimeout(() => {
                    navigator("/business-your-card");
                }, 2000);
            }
        }).catch((error) => {
            showError('you are trying to access invalid position/key');
        })
        event.preventDefault();
    }
    return (
        <div>
            <Menu />
            <div className="overlay" />
            {/* ======== sidebar-nav end =========== */}
            {/* ======== main-wrapper start =========== */}
            <main className="main-wrapper">
                {/* ========== header start ========== */}
                <Header title="Edit Card" />
                {/* ========== header end ========== */}
                {/* ========== section start ========== */}
                <ToastContainer />
                <section className="section">
                    <div className="container-fluid mt-3">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                                <div className="card-style mb-30 shadow">
                                    <form onSubmit={handleSubmit}>
                                        <h6 className="mb-3 fw-bold fs-4 text-primary">Fill-up Below Details</h6>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="image" className="form-label">
                                                        <div className="text-dark fw-bold">Enter Image</div>
                                                    </label>
                                                    <input type="file" className="form-control" id="image" accept="image/*" onChange={handleImageChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="form-label">
                                                        <div className="text-dark fw-bold">Name</div>
                                                    </label>
                                                    <input type="text" className="form-control" id="name" placeholder="Enter name of ompany" maxLength={25} value={name} onChange={(event) => setName(event.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="description" className="form-label">
                                                        <div className="text-dark fw-bold">Description</div>
                                                    </label>
                                                    <textarea className="form-control" id="description" rows={3} placeholder="Enter description about your business" maxLength={200} value={description} onChange={(event) => setDescription(event.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="phone" className="form-label">
                                                        <div className="text-dark fw-bold">Phone</div>
                                                    </label>
                                                    <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" pattern="[0-9]{10}" value={phone} onChange={(event) => setPhone(event.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">
                                                        <div className="text-dark fw-bold">Email</div>
                                                    </label>
                                                    <input type="email" className="form-control" id="phone" placeholder="Enter Email" maxLength={40} value={email} onChange={(event) => setEmail(event.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="address" className="form-label">
                                                        <div className="text-dark fw-bold">Address</div>
                                                    </label>
                                                    <input type="text" className="form-control" id="address" placeholder="Enter Address" maxLength={50} value={address} onChange={(event) => setAddress(event.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="city" className="form-label">
                                                        <div className="text-dark fw-bold">City</div>
                                                    </label>
                                                    <input type="text" className="form-control" id="city" placeholder="Enter city" maxLength={20} value={city} onChange={(event) => setCity(event.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="pincode" className="form-label">
                                                        <div className="text-dark fw-bold">Pincode</div>
                                                    </label>
                                                    <input type="number" className="form-control" id="pincode" placeholder="Enter Pincode" maxLength={6} value={pincode} onChange={(event) => setPincode(event.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col text-end">
                                                <button type="submit" className="btn btn-primary px-4">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-8 col-12">
                                <div className="card card-extra">
                                    <img src={image} className="card-img-top" height={230} alt="" style={{ "background": "white" }} />
                                    <div className="card-body">
                                        <div>
                                            <span className="fs-3 fw-bold">{name}</span>
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
                        </div>
                    </div>
                    {/* end container */}
                </section>
            </main></div>
    );

}