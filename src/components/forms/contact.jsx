import { div } from "framer-motion/client";
import Reac from "react";
import { NavbarSite } from "./navbar";
import { Button } from "@chakra-ui/react";

export function Contact() {
    return (
        <div>
            <NavbarSite />
            <h1 style={{ marginBottom: '1.5rem' }}>Contact</h1>
            <p style={{ marginTop: '2rem', margin: '2rem', lineHeight: '1.6' }}>
                N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question.
            </p>
            <p style={{ margin: '2rem 2rem 0 2rem', lineHeight: '1.6' }}>
                Vous pouvez me trouver sur :
                <br />
                <a href="https://www.linkedin.com/in/david-cialone-6a5a627b/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" style={{ border: "1px solid",  backgroundColor:"ButtonShadow", margin:"2rem" }}>
              Linkedin
            </Button>
                </a>
                <br />
                ou me joindre par :
                <br />
                <a href="mailto:cialonedavid@gmail.com">
                <Button variant="ghost" style={{ border: "1px solid",  backgroundColor:"ButtonShadow", margin:"2rem" }}>
              Email
            </Button></a>.
            </p>
        </div>
    );
}

