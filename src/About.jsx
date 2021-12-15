import React from "react";
// import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "../src/images/img1.jpg"


const About = () => {
    return (
        <>
            <Common
                name="Welcome to About Page"
                imgsrc={web}
                visit='/contact'
                btnname="Contact Now" />
        </>
    )
}

export default About

// https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80