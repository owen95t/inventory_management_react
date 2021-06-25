import {Helmet} from "react-helmet";
import {Container} from "react-bootstrap";
import PaginationComp from "../components/PaginationComp";
import TableComp from "../components/TableComp";
import SearchBar from "../components/SearchBar";

const TransferMenu = () => {
    const tableHead = ['Transfer ID', 'To', 'From', 'Created On', 'Completed On']
    return (
        <>
            <Helmet>
                <title>Transfer Menu</title>
            </Helmet>
            <Container>
                <h1 className='text-center mb-4'>Transfer Menu</h1>
                <SearchBar/>
                <PaginationComp/>
                <TableComp tableHead={tableHead}/>
            </Container>
        </>
    )

}

export default TransferMenu