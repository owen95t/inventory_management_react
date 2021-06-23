import {Helmet} from 'react-helmet'
import SearchBar from "../components/SearchBar";
import {Container} from "react-bootstrap";
import PaginationComp from "../components/PaginationComp";

const InventoryMenu = () => {


    return (
        <>
            <Helmet>
                <title>Inventory Menu</title>
            </Helmet>
            <Container>
                <h1 className='text-center'>Inventory Menu</h1>
                <SearchBar/>
                <PaginationComp/>
            </Container>
        </>
    )
}

export default InventoryMenu