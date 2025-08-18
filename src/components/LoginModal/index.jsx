import React, {useState} from 'react';
import {Box, DialogContent,} from '@mui/material';
import {StyledTabs} from "../UI/StyledTabs.js";
import {StyledTab} from "../UI/StyledTab.js";
import {StyledDialog} from "../UI/StyledDialog.js";
import {LogIn} from "./ModalTabs/LogIn.jsx";
import {SignUp} from "./ModalTabs/SignUp.jsx";
import {validation} from "./utils/validation.js";


const LoginModal = ({open, onClose}) => {
    const [tabValue, setTabValue] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        repeatPassword: '',
        privacyPolicy: false,
        newsletter: false,
    });
    const [errors, setErrors] = useState({});

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        setErrors({});
    };

    const handleInputChange = (field) => (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFormData(prev => ({...prev, [field]: value}));

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({...prev, [field]: ''}));
        }
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validation(tabValue,formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // Handle form submission
            console.log('Form submitted:', formData);
            // Add your authentication logic here
        }
    };

    return (
        <StyledDialog
            open={open}
            modalIsOpen={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
        >
            <DialogContent sx={{padding: '56px', height: '100vh', display: 'flex', flexDirection: 'column'}}>
                <Box sx={{borderBottom: 1, borderColor: '#E0E0E0', padding: 0}}>
                    <StyledTabs value={tabValue} onChange={handleTabChange}>
                        <StyledTab label="Log in"/>
                        <StyledTab label="Sign up"/>
                    </StyledTabs>
                </Box>
                <LogIn
                tabValue={tabValue}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                setShowPassword={setShowPassword}
                showPassword={showPassword}
                formData={formData}
                errors={errors}
                />
                <SignUp
                tabValue={tabValue}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                setShowPassword={setShowPassword}
                showPassword={showPassword}
                showRepeatPassword={showRepeatPassword}
                setShowRepeatPassword={setShowRepeatPassword}
                formData={formData}
                errors={errors}
                />
            </DialogContent>
        </StyledDialog>
    );
};

export default LoginModal;
