import { render, screen } from "@testing-library/react";
import Contact from "./Contact";
import { BrowserRouter } from "react-router-dom";

    test ("Contact_shows_in_the_document", () => {
        render (<BrowserRouter>
            <Contact/>
        </BrowserRouter>)
        const element   =  screen.getByText (
            "Inicio"
        )
        expect (element).toBeInTheDocument ()
    }) 