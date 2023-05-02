import { Container } from "@mui/material";
import './style.css'

import Form from '../form/Form'
import Card from '../card/Card'

const Main = () => {
    return ( 
        <Container className="main">
           <Form/>
           <Card/>
        </Container>
     );
}
 
export default Main;