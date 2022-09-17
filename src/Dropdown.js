import { useState } from "react";

const Dropdown = () => {

    const [isActive, setActive] = useState(false);
    // dropdown  list array
    const [list] = useState(['Yes', 'Probably not', 'Maybe', 'Only for Project Purposes!']);
    const [value, setValue] = useState('');

    // event handler to perform events when mouse clicked
    const onClickHandeler = (e) => {
        setValue(e.target.textContent);
        setActive(false);
    }

    // event handler to perform events when mouse hovered
    const onMouseHover = () => {
        setActive(true);
    }

    // use of map() to create new array for the dropdown items
    const results = list.map((result, index) => {
        return <a href="#" onClick={onClickHandeler} key={index}>{result}</a>;
    })

    // the JSX for each dropdown item 
    return (
        <div className="dropdown">
            <h1>Should you use a dropdown?</h1>
            <h3>{value}</h3>
            <button className="dropbtn" onMouseEnter={onMouseHover}>Select</button>
            <div className="dropdown-content" style={{ display: `${isActive ? 'block' : 'none'}` }}>
                {results}
            </div>
        </div>
    );
}

export default Dropdown;