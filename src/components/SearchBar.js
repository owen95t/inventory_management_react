import {Button, DropdownButton, FormControl, InputGroup} from "react-bootstrap";

const SearchBar = () => {
    return (
        <>
            <InputGroup>
                <DropdownButton as={InputGroup.Prepend} title='Filter' variant='outline-secondary'/>
                <FormControl placeholder='Search...'/>
                <InputGroup.Append>
                    <Button variant='outline-success'>Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </>
    )
}

export default SearchBar