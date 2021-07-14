import {Helmet} from "react-helmet";
import {Container} from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import PaginationComp from "../components/PaginationComp";
import TableComp from "../components/TableComp";


const CustomerMenu = () => {
    const tableHead = ['Name', 'Phone Number', 'Email Address']
    return (
        <>
            <Helmet>
                <title>Customer Menu</title>
            </Helmet>
            <Container>
                <h1 className='text-center mb-4'>Customer Menu</h1>
                <SearchBar/>
                <PaginationComp/>
                <TableComp tableHead={tableHead}/>
            </Container>
        </>
    )
}

export default CustomerMenu