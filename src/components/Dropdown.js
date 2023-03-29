
import React, { useState } from 'react';
import Select from 'react-select';



const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'black',
        backgroundColor: state.isSelected ? '#212529' : 'white',
        fontSize: "20px",
        fontWeight: 300,
        width: "318px",
        padding: "8px",
        textDecoration: "none",
        borderColor: "#212529",
        borderWidth: '1px',
        borderRadius: "3px",
    }),
    control: (provided) => ({
        ...provided,
        width: "318px",
        marginTop: "15px",
        color: 'white',
        fontSize: "20px",
        fontWeight: 300,
        textDecoration: "none",
        borderRadius: "3px",
        borderColor: "#212529",
    }),
}

export default function Dropdown({ selectedOption, setSelectedOption, options }) {

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
