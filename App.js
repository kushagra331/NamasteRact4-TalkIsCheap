//if we need to import anything in this normal JS file
//we need to specify node='module' in HMTL work
/*
      Header
        logo
        List items
        Cart
      Body
        Search Bar
        RestaurantList
          RestaurantCard
            IMage
            Name
            Rating
            Cusines
      Footer
        Links
        Copyright
*/
import React from 'react';
import ReactDOM  from 'react-dom/client';
//import logo from './logo.png';
//import user from './user.png';
import './index.css';

const Title =()=>(
  <a href="/">
    <img
    className='logo' 
    src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj" 
    alt="logo" />
  </a>
);
const burgerking ={
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill",
}

const RestaurantList=[
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "190436",
        "name": "Sagar Gaire - Bhawani Dham",
        "uuid": "390e519d-afb9-47dc-9e26-7e173b6f7dfa",
        "city": "55",
        "area": "Bhawani Dham",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "w7vlvorykzdnn6xbxmt6",
        "cuisines": [
        "North Indian",
        "South Indian"
        ],
        "tags": [
        
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 43,
        "minDeliveryTime": 43,
        "maxDeliveryTime": 43,
        "slaString": "43 MINS",
        "lastMileTravel": 6.699999809265137,
        "slugs": {
        "restaurant": "sagar-gaire-karond-karond",
        "city": "bhopal"
        },
        "cityState": "55",
        "address": "13, Nizamuddin Road Bhavani Town, Narela Shankari, Off, Ayodhya Bypass, Bhopal, Madhya Pradesh 462041",
        "locality": "Karond",
        "parentId": 7049,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
            {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
            {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
            "type": "PROMOTED"
        }
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5842828~p=1~eid=00000186-1c55-f74a-08a6-6eb100bb0103",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "6.6 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "190436",
        "deliveryTime": 43,
        "minDeliveryTime": 43,
        "maxDeliveryTime": 43,
        "lastMileTravel": 6.699999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "109939",
        "name": "Zam Zam Fast Food",
        "uuid": "6bc8e735-16e5-4263-8017-672d85a8085d",
        "city": "55",
        "area": "Hamidia Road",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "kuisp5xx9tcutesp33yf",
        "cuisines": [
        "North Indian",
        "Chinese",
        "Indian",
        "Snacks"
        ],
        "tags": [
        
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
        "restaurant": "zam-zam-fast-food-old-bhopal-jahangirabad-old-bhopal-jahangirabad",
        "city": "bhopal"
        },
        "cityState": "55",
        "address": "Near alpana cineplex hamidia road Bhopal",
        "locality": "hamidia road Bhopal",
        "parentId": 17529,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
            {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
            {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "109939",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 0.699999988079071,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 10000,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "428922",
        "name": "Mughal Darbar",
        "uuid": "d10f11ce-e3b2-49b9-b43b-b853abcef840",
        "city": "55",
        "area": "Hamidia Road",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "za3zbwlrxwuqtsji7jum",
        "cuisines": [
        "North Indian",
        "Mughlai",
        "Snacks",
        "Biryani"
        ],
        "tags": [
        
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 0.30000001192092896,
        "slugs": {
        "restaurant": "mughal-darbar-family-restaurant-&-fast-food-jahangirabad-jahangirabad",
        "city": "bhopal"
        },
        "cityState": "55",
        "address": "62,Sangam Talkies Tiraha,Hamidia Road,Opposite Axis Bank,Bhopal 462001",
        "locality": "Jahangirabad",
        "parentId": 8892,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
            {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
            {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "0.3 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "428922",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 0.30000001192092896,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 1000,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "425509",
        "name": "KFC",
        "uuid": "92754cf8-02f8-45b3-a27f-d652e6c9d545",
        "city": "55",
        "area": "Indrapuri",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
        "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
        ],
        "tags": [
        
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 46,
        "minDeliveryTime": 46,
        "maxDeliveryTime": 46,
        "slaString": "46 MINS",
        "lastMileTravel": 5,
        "slugs": {
        "restaurant": "kfc-indrapuri-piplani",
        "city": "bhopal"
        },
        "cityState": "55",
        "address": "KFC Indrapuri, Bhopal Plot No : 30, Sector A, Indrapuri, BHEL, Bhopal",
        "locality": "Sectore A",
        "parentId": 547,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
            {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
            {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
            "type": "PROMOTED"
        }
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5899592~p=4~eid=00000186-1c55-f74a-08a6-6eb200bb0411",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "425509",
        "deliveryTime": 46,
        "minDeliveryTime": 46,
        "maxDeliveryTime": 46,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 500,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "101059",
        "name": "Manohar Dairy and Restaurant",
        "uuid": "4a111e01-141b-4ffa-85e5-13c935d53f07",
        "city": "55",
        "area": "Hamidia Road",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "yhnrql8wxgu8sgqjczos",
        "cuisines": [
        "Sweets",
        "Beverages",
        "Desserts",
        "Snacks",
        "Chaat",
        "Street Food",
        "Chinese",
        "Bakery",
        "North Indian",
        "South Indian"
        ],
        "tags": [
        
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
        "restaurant": "manohar-dairy-and-restaurant-old-bhopal-jahangirabad-old-bhopal-jahangirabad",
        "city": "bhopal"
        },
        "cityState": "55",
        "address": "6, Hamidia Road, Opposite Alpana Cineplex, Bhopal",
        "locality": "Old Bhopal Jahangirabad",
        "parentId": 7052,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
            {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
            {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "101059",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 0.800000011920929,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 10000,
        "new": false
    },
    "subtype": "basic"
}
];

//In line styling in JSX
styleObj={
  backgroundColor: "white",
}
const Headercomponent = () =>{
  return (
    //In line styling in JSX
    <div className="header" style={styleObj}>
        <Title/> 
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
    </div>
  );
}

const RestaurantCard = ({cloudinaryImageId , name , cuisines , avgRating}) => {
  return(
    <div className='card'>
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} />
      <h4>{name}</h4>
      <h5>{cuisines.join(",")} </h5>
      <h5>{avgRating} Stars</h5>
    </div>
  );
};
const Body= () => {
  return (
    <div className='restaurant-list'>
      {
        RestaurantList.map((res)=>{
          return <RestaurantCard {...res.data} key={res.data.id} />
        })
      }
    </div>
  );
}

const Footer= () => {
  return (
  <div className='footer'> 
    <h1>Footer</h1>
  </div>);
}
const AppLayout= () => {
  return(
    <>
      <Headercomponent/>
      <Body/>
      <Footer/>
    </>
  );
}
//passing a react element inside the root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>); 

