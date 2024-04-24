"use client"
import React, { useState,useEffect } from "react";
import {Navbar, NavbarContent} from "@nextui-org/react";
import NavbarComponent from "../../components/Navbar/Navbar"
import { getPosts } from "../lib/suggestion";

import About from "../../components/Suggestion/About";
import Posts from "@/components/Posts/Posts";
const DynamicPage = ()=>{

    return <>
    <NavbarComponent/>
      <Navbar className="border-b-2	border-bottom-width: 2px;">
      <NavbarContent/>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <About param={suggestions}/> */}
      </NavbarContent>
      <NavbarContent justify="end"/>  
    </Navbar>
    <Posts/>
    </>
}

export default DynamicPage;