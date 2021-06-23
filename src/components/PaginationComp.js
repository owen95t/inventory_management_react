import {Pagination} from "react-bootstrap";

const PaginationComp = () => {
    return (
        <>
            <Pagination>
                <Pagination.First/>
                <Pagination.Prev/>

                <Pagination.Next/>
                <Pagination.Last/>
            </Pagination>
        </>
    )
}

export default PaginationComp