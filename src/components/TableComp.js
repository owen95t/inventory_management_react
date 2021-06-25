import {Table} from "react-bootstrap";

const TableComp = ({tableHead}) => {

    return (
        <>
            <Table bordered hover>
                <thead>
                    <tr>
                        {Array.from(tableHead).map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </Table>
        </>
    )
}

export default TableComp