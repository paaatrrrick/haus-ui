
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'poster-size', label: 'Poster size' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'red' : 'blue',
    }),
    control: (provided) => ({
        ...provided,
        backgroundColor: 'lightgreen',
    }),
}

export default function App() {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    }

    return (
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            styles={customStyles}
        />
    );
}