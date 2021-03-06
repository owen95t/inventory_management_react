import {Helmet} from 'react-helmet'
import SearchBar from "../components/SearchBar";
import {Container} from "react-bootstrap";
import PaginationComp from "../components/PaginationComp";
import TableComp from "../components/TableComp";

const InventoryMenu = () => {
    const tableHead = ['Item Name', 'Item Brand', 'Item ID', 'Item SKU']

    return (
        <>
            <Helmet>
                <title>Inventory Menu</title>
            </Helmet>
            <Container>
                <h1 className='text-center mb-4'>Inventory Menu</h1>
                <SearchBar/>
                <PaginationComp/>
                <TableComp tableHead={tableHead}/>
            </Container>
        </>
    )
}

export default InventoryMenu