import {Pagination} from "react-bootstrap";

const PaginationComp = () => {

    return (
        <>
            <Pagination className='justify-content-center mt-4 mb-4'>
                <Pagination.First/>
                <Pagination.Prev/>

                <Pagination.Next/>
                <Pagination.Last/>
            </Pagination>
        </>
    )
}

export default PaginationComp