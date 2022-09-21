import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { received_data } from "../redux/Action";
import { BitconReducer } from "../redux/Reducer";
import "./JobCards.css";
export const Bitcoin = () => {
  const dispatchRedux = useDispatch();
  const bitCoinData = useSelector((state) => state);
  const[limit,setLimit] = useState(20)
  const getData = async () => {

    const response = await axios.get(`https://api.coincap.io/v2/assets?&limit=${limit}&offset=0`);
    // let data = response.data.data.map(data => data)
    dispatchRedux(received_data(response.data.data));
  };

  const getImage = async (value) => {
    let image = await axios.get(
      `https://assets.coincap.io/assets/icons/${value}%402x.png`
    );
    return image;
  };
  console.log(bitCoinData);
  useEffect(() => {
    getData();
  }, [limit]);

  return (
    <div className="table__container">
      <div className="th__wrapper">
        <div className="th__rank align">Rank</div>
        <div className="th__name color">Name</div>
        <div className="th__price align">Price</div>
        <div className="th__marketcap align">MarketCap</div>
        <div className="th__vwap align"> VWAP(24Hr)</div>
        <div className="th__supply align">Supply</div>
        <div className="th__volume align">Volume(24Hr)</div>
        <div className="th__change align">Change(24Hr)</div>
      </div>

      <div className="td__table">
        {bitCoinData
          ? bitCoinData.bitCoinData.map((data) => {
              let url = data.symbol.toLowerCase();
              let nf = new Intl.NumberFormat('en-US');

               let price = nf.format(data.priceUsd)
               let vwap  = nf.format((+data.vwap24Hr).toFixed(2))
              return (
                <div key={data.rank} className="td__container">
                  <div className="td__wrapper">
                  <div className="td__rank">{data.rank}</div>
                  <div className="td__name nameFlex">
                    <img
                    className="imageIcon"
                      src={`https://assets.coincap.io/assets/icons/${url}%402x.png`}
                      alt=""
                    />
                    <div className="td__title">
                      <span className="title color">{data.name}</span>
                      <span className="symbol align">{data.symbol}</span>
                    </div>
                  </div>

                  <div className="td__price color">
                    ${price}
                  </div>

                  <div className="td__marketcap color">
                    ${  ((+data.marketCapUsd - +data.priceUsd)/1000000000).toFixed(2)}b
                  </div>

                  <div className="td__vwap color">
                    ${vwap}
                  </div>

                  <div className="td__supply color">
                    ${ ((+data.supply - +data.vwap24Hr)/1000000).toFixed(2)}
                  </div>

                 <div className="td__volume color">
                  ${ ((+data.volumeUsd24Hr)/1000000000).toFixed(2)}
                 </div>

                 <div className="td__change color">
                  {((+data.changePercent24Hr)/1).toFixed(2)} %
                 </div>
                 </div>
                </div>
              );
            })
          : "loading"}

          
      </div>

      <button className="update" onClick={()=>setLimit(limit + 20)}>loadmore</button>
    </div>
  );
};
