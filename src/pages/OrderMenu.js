import {Helmet} from "react-helmet";
import {Container} from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import PaginationComp from "../components/PaginationComp";
import TableComp from "../components/TableComp";

const OrderMenu = () => {
    const tableHead = ['Order Date', 'Order ID', 'Customer Name', 'Order Status', 'Order Paid']

    return (
        <>
            <Helmet>
                <title>Order Menu</title>
            </Helmet>
            <Container>
                <h1 className='text-center mb-4'>Order Menu</h1>
                <SearchBar/>
                <PaginationComp/>
                <TableComp tableHead={tableHead}/>
            </Container>
        </>
    )
}

export default OrderMenu