import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface DropDownResearchProps {
    label: string;
    value: string;
    items: { value: string; label: string }[];
    onChange: (value: string) => void;
}

const DropDownResearch: React.FC<DropDownResearchProps> = ({ label, value, items, onChange }) => {
    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }} className="ml-3">
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select
                    label={label}
                    value={value}
                    onChange={handleChange}
                >
                    {items.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                            {item.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default DropDownResearch;
