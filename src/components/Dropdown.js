
import React, { useState, useContext, useMem, useMemo } from 'react';
import Select from 'react-select';
import { DisplayContext } from '../utils/context';


export default function Dropdown({ selectedOption, setSelectedOption, options }) {

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    }

    const { mobile1200 } = useContext(DisplayContext);

    const customStyles = useMemo(() => {
        return {
            option: (provided, state) => ({
                ...provided,
                color: state.isSelected ? 'white' : 'black',
                backgroundColor: state.isSelected ? '#212529' : 'white',
                fontSize: "20px",
                fontWeight: 300,
                width: (mobile1200 ? "85vw" : "200px"),
                padding: "8px",
                textDecoration: "none",
                borderColor: "#212529",
                borderWidth: '1px',
                borderRadius: "3px",
            }),
            control: (provided) => ({
                ...provided,
                width: (mobile1200 ? "90vw" : "224px"),
                marginTop: "0px",
                color: 'white',
                fontSize: "20px",
                fontWeight: 300,
                textDecoration: "none",
                borderRadius: "0px",
                borderColor: "#212529",
                height: (mobile1200 ? "30px" : "40px"),
            }),
        }
    }, [mobile1200])



    return (
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            styles={customStyles}

        />
    );
}
