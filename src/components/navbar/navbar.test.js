import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

    test ("Navbar_shows_in_the_document", () => {
        render (<BrowserRouter>
            <Navbar/>
        </BrowserRouter>
        )
        const element   =  screen.getByTestId (
            "navbar"
        )
        expect (element).toBeInTheDocument ()
    }) 
    