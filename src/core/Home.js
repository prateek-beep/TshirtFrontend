import React, { useState, useEffect } from "react";
import "../styles.css";
import Loader from "react-loader";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base title="FabricaWORLD" description="All your products under one roof">
      <div className="row text-center">
        
      <div className="container-fluid  text-white text-center  ">
      
        <h6 >Established in the year 2007, at Nashik, Maharashtra, India, We “SB ENGINEERING WORKS” are one of the leading companies engaged in offering job works services for different industrial works like VMC operations, CNC operations, Milling operations, Grinding operations, Drilling operations,Quality testing etc. Our visionary business approach as well as service backup by experienced industry professionals allows us to deliver exceptional services solutions as demanded by the industrial customers. Further, the quality support provided by latest technology-based process machinery also allows us to deliver quality end solutions.

Today, our competitive and consistent business approach has helped us to emerges as a leading name in our industry sector. Further, our capability to deliver our industrial clients highly customized end solutions as per their specific process needs at competitive prices has also helped us to emerge as a leading services provider in our industry sector.
</h6>

       
        </div>
        
          {
            loading ? (
              <div 
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                height: "30vh",
                width: "100%",
                position: "relative",
              }}>
                <Loader color="#00BFFF"/>
              </div>
            ) :(
              
              <div className="row">
              {products.map((product, index) => (
                  <div key={index} className="col-12 col-md-4 mb-4">
                    <Card product={product} />
                  </div>
                
              ))}
            </div>
            )
          }
      </div>
    </Base>
  
  );
}
