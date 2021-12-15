import React from "react";
import SData from "./seeds/names"
import Card from "./Card";


const Service = () => {
    // const makeRestaurants = (() => {
    //     console.log(SData.restaurants[0].name, SData.restaurants[0].address, SData.restaurants[0].photograph)
    // })
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Restaurants</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {SData.restaurants.map((val, index) => {
                                return <Card
                                        key={val.id}
                                        imgsrc={val.photograph}
                                        title={val.name}
                                        address={val.address}
                                   />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service