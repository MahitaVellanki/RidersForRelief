import React,{useState,useEffect} from 'react'
import styles from './currentRequest.module.css'
import Navbar from '../../global_ui/nav'
import Button from '../../global_ui/buttons/button'
import axios from "axios"
import {LoadingScreen} from "../../global_ui/spinner"
import Dialog from "../../global_ui/dialog/dialog"


function currentRequest() {
    const [error, seterror] = useState(null);
    const [isLoading, setisLoading] = useState(false);

    const [reqObj, setReqObj] = useState({
        requestID:"10101010",
        requesterName:"Jon snow",
        mobile:"9550710377",
        address:"lorem ipsum alto bolto filto",
        city:'Hyderabad',
        pincode:'500013',
        isCovidPositive:"true",
        remark:'Vamos Barcelona Mes que un club',
        isGroceries:"true",
        isMedicines:"true",
        orderList:[
            {item:"Paracetamol",quantity:"1 Strip"},
            {item:"Tomato",quantity:"1kg"},
            {item:"Noodles",quantity:"1 packet"},
            {item:"Dosa",quantity:"2 plates"},
        ]
    });


    const navigateToWhatsapp=()=>{
        console.log("Whatsapp");
        //Make Calls Here        
    }

    const navigateToGoogleMaps=()=>{
        console.log("GoogleMaps");
        //Make Calls Here        
    }

    const makeDelivery=()=>{
        console.log("Make Delivery");
        //Make Calls Here        
    }

    useEffect(() => {
        setisLoading(true);       
      
        axios.get('https://google.com')
        .then(function (response) {
            // handle success
            console.log(response);
            setisLoading(false)
            setReqObj(...reqObj);
        })
        .catch(function (error) {
            console.log(10,error);
            seterror(error);
            setisLoading(false)
        })
        .then(function () {
            // always executed
        });
        //Make a HTTP request to get current request item  
    }, [])



    return (
        !isLoading?
        (
            !error?
            <div className={styles.currentRequestPage}>
                <Navbar back="true" title="Order Details" style={{background:'#79CBC5',color:'white'}}/>

                <div className={styles.currentRequestContent}>
                    <p className={styles.request}>Request ID #
                    <span style={{fontWeight:'lighter'}}>{reqObj.requestID}</span>
                    </p>

                    <p className={styles.name}>Name 
                    <span style={{fontWeight:'lighter'}}>{" "+reqObj.requesterName}</span>
                    </p>

                    <div className={styles.mobile}>
                        <i className="fas fa-phone-alt"></i>
                        {reqObj.mobile}

                        <Button 
                        text="Call" 
                        isRounded="true" 
                        isElevated="true" 
                        onClick={()=>window.open(`tel:+${reqObj.mobile}`)}/>

                        <Button 
                        color="black" 
                        bgColor="white" 
                        text="Whatsapp" 
                        borderColor="black" 
                        borderWidth="1px" 
                        isRounded="true"
                        icon="fab fa-whatsapp"
                        iconPosition="left"
                        onClick={()=>navigateToWhatsapp()}
                        />
                    
                    </div>

                    <div className={styles.address}>
                        <p className={styles.addressPlaceHolder}>Address</p>
                        <h4 style={{fontWeight:'500',margin:'4px'}}>{reqObj.address}</h4>

                        <div className={styles.inputField}>
                            <p className={styles.fieldName}>City</p>
                            <p className={styles.field}>{reqObj.city}</p>
                        </div>

                        <div className={styles.inputField}>
                            <p className={styles.fieldName}>Pincode</p>
                            <p className={styles.field}>{reqObj.pincode}</p>
                        </div>
                    </div>

                    <Button color="brown" bgColor="white" isBlock="true" isRounded="true"
                        text="Open location through google maps"
                        borderWidth="1px"
                        borderColor="darkslategrey"
                        icon="fas fa-map-marker-alt"
                        iconPosition="right"
                        onClick={()=>navigateToGoogleMaps()}
                    />

                    <p className={styles.message}>
                    {
                        reqObj.isCovidPositive?
                        <p style={{color:'red',margin:'0px'}}>Requester is Covid Positive</p>:
                        <p style={{color:"darkgreen",margin:'0px'}}>Requester is Healthy</p>
                    }
                    </p>

                    <p className={styles.remark}>
                    Remark:
                    {
                        <p className={styles.field}>{reqObj.remark}</p>
                    }
                    </p>

                    <div className={styles.order}>
                        <div className={styles.orderType}>
                        Items Requested : 
                        {
                            reqObj.isGroceries && <Button text="Groceries" isRounded="true"  />
                        }
                        {
                            reqObj.isMedicines && <Button text="Medicines" bgColor="green" isRounded="true" />
                        }                   
                        </div>
                        <div className={styles.orderList}>
                            <table>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                </tr>
                                {
                                    reqObj.orderList.map((object)=>{
                                        return <tr key={object.item}>                                    
                                                    <td>{object.item}</td>
                                                    <td>{object.quantity}</td>
                                                </tr>
                                    })
                                }
                            </table>                                       
                        </div>

                        <div style={{marginTop:'50px',textAlign:'center'}}>
                            <Button text="Make Delivery" isRounded="true" isBlock="true" isElevated="true"
                                onClick={()=>makeDelivery()}
                            />
                        </div>
                    </div>
                    
                </div>           
            </div>
            :<Dialog isShowing={error} title="Error" msg={(error.message)} onOK={()=>seterror(null)} />

        ):<LoadingScreen/>
    )
}

export default currentRequest
