import React, {useState} from 'react';
import {
    Dialog,
    DialogContent,
    Tabs,
    Tab,
    Box,
    TextField,
    Button,
    Typography,
    Checkbox,
    FormControlLabel,
    Divider,
    IconButton,
    InputAdornment,
    Alert,
} from '@mui/material';
import {Visibility, VisibilityOff, ErrorOutline} from '@mui/icons-material';
import {styled} from '@mui/material/styles';
import {typography} from '../../theme/typography';
import {StyledTextField} from '../UI/Input.jsx';
import {StyledTabs} from "../UI/Tabs.jsx";

const StyledDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialog-paper': {
        margin: 0,
        marginLeft: 'auto',
        height: '100vh',
        maxHeight: '100vh',
        width: '500px',
        borderRadius: '24px 0 0 0px',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out',
        '&.MuiDialog-paperWidthSm': {
            maxWidth: '400px',
        },
    },
    '& .MuiDialog-paper.MuiDialog-paperOpen': {
        transform: 'translateX(0)',
    },
}));

const StyledTab = styled(Tab)(({theme}) => ({
    textTransform: 'none',
    fontWeight: typography.h3.fontWeight,
    fontSize: typography.h3.fontSize,
    lineHeight: typography.h3.lineHeight,
    minWidth: 'auto',
    padding: 0,
    '&.Mui-selected': {
        color: '#A4795B',
    },
}));

const StyledButton = styled(Button)(({theme}) => ({
    borderRadius: '20px',
    maxWidth: '131px',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '16px',
    padding: '12px 24px',
    backgroundColor: '#A4795B',
    '&:hover': {
        backgroundColor: '#B88A6E',
    },
}));

const GoogleButton = styled(Button)(({theme}) => ({
    borderRadius: '20px',
    maxWidth: '230px',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '16px',
    padding: '16px',
    border: '1px solid #E0E0E0',
    color: '#333',
    backgroundColor: '#fff',
    '&:hover': {
        backgroundColor: '#F5F5F5',
    },
}));

const ColoredGoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24">
        <path fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
);

const TabPanel = ({children, value, index}) => (
    <div hidden={value !== index} style={{padding: '32px 0'}}>
        {value === index && children}
    </div>
);

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

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (tabValue === 0) {
            // Login validation
            if (!formData.email) {
                newErrors.email = 'Email is required';
            } else if (!validateEmail(formData.email)) {
                newErrors.email = 'Invalid email address';
            }
            if (!formData.password) {
                newErrors.password = 'Password is required';
            }
        } else {
            // Signup validation
            if (!formData.firstName) newErrors.firstName = 'First name is required';
            if (!formData.lastName) newErrors.lastName = 'Last name is required';
            if (!formData.email) {
                newErrors.email = 'Email is required';
            } else if (!validateEmail(formData.email)) {
                newErrors.email = 'Invalid email address';
            }
            if (!formData.password) {
                newErrors.password = 'Password is required';
            } else if (formData.password.length < 6) {
                newErrors.password = 'Password must be at least 6 characters';
            }
            if (!formData.repeatPassword) {
                newErrors.repeatPassword = 'Please repeat your password';
            } else if (formData.password !== formData.repeatPassword) {
                newErrors.repeatPassword = 'Passwords do not match';
            }
            if (!formData.privacyPolicy) {
                newErrors.privacyPolicy = 'You must agree to the privacy policy';
            }
        }

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
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            slotProps={{
                paper: {
                    className: open ? 'MuiDialog-paperOpen' : '',
                },
            }}
        >
            <DialogContent sx={{padding: '56px', height: '100vh', display: 'flex', flexDirection: 'column'}}>

                {/* Tabs */}
                <Box sx={{borderBottom: 1, borderColor: '#E0E0E0', padding: 0}}>
                    <StyledTabs value={tabValue} onChange={handleTabChange}>
                        <StyledTab label="Log in"/>
                        <StyledTab label="Sign up"/>
                    </StyledTabs>
                </Box>

                {/* Login Tab */}
                <TabPanel value={tabValue} index={0}>
                    <Box component="form" onSubmit={handleSubmit}
                         sx={{padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
                        <StyledTextField
                            fullWidth
                            label="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange('email')}
                            error={!!errors.email}
                            helperText={errors.email && (
                                <Box sx={{display: 'flex', alignItems: 'center', gap: 1, color: '#FF2F2F'}}>
                                    <ErrorOutline fontSize="small"/>
                                    <span>{errors.email}</span>
                                </Box>
                            )}
                        />

                        <StyledTextField
                            size='normal'
                            fullWidth
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={handleInputChange('password')}
                            error={!!errors.password}
                            helperText={errors.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '100%'}}>
                            {/* Forgot Password */}
                            <Typography
                                sx={{
                                    color: '#A4795B',
                                    cursor: 'pointer',
                                    textAlign: 'right',
                                    fontSize: typography.h7.fontSize,
                                    lineHeight: typography.h7.lineHeight,
                                    fontWeight: typography.h7.fontWeight,
                                    '&:hover': {textDecoration: 'underline'}
                                }}
                            >
                                Forgot password?
                            </Typography>

                            {/* Divider under text */}
                            <Box
                                sx={{
                                    height: '1px',
                                    backgroundColor: '#A4795B',
                                    width: '120px',
                                    marginTop: '4px',
                                    marginLeft: 'auto',
                                    marginRight: '0',
                                }}
                            />
                        </Box>


                        <StyledButton
                            fullWidth
                            type="submit"
                            variant="contained"
                        >
                            Log in
                        </StyledButton>

                        <Divider sx={{
                            my: 2,
                            width: '100%',
                            alignSelf: 'stretch',
                            color: '#000'
                        }}>
                            <Typography variant="body2" sx={{color: '#666', padding: '0 16px'}}>OR</Typography>
                        </Divider>

                        <GoogleButton
                            fullWidth
                            variant="outlined"
                            startIcon={<ColoredGoogleIcon/>}
                        >
                            Sign in with Google
                        </GoogleButton>
                    </Box>
                </TabPanel>

                {/* Signup Tab */}
                <TabPanel value={tabValue} index={1}>
                    <Box component="form" onSubmit={handleSubmit}
                         sx={{padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
                        <StyledTextField
                            fullWidth
                            label="First name"
                            value={formData.firstName}
                            onChange={handleInputChange('firstName')}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                        />

                        <StyledTextField
                            fullWidth
                            label="Last name"
                            value={formData.lastName}
                            onChange={handleInputChange('lastName')}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                        />

                        <StyledTextField
                            fullWidth
                            label="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange('email')}
                            error={!!errors.email}
                            helperText={errors.email}
                        />

                        <StyledTextField
                            fullWidth
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={handleInputChange('password')}
                            error={!!errors.password}
                            helperText={errors.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <StyledTextField
                            fullWidth
                            label="Repeat password"
                            type={showRepeatPassword ? 'text' : 'password'}
                            value={formData.repeatPassword}
                            onChange={handleInputChange('repeatPassword')}
                            error={!!errors.repeatPassword}
                            helperText={errors.repeatPassword}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                                            edge="end"
                                        >
                                            {showRepeatPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Box sx={{
                            display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                            alignSelf: 'flex-start',
                            width: '100%',
                        }}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.privacyPolicy}
                                        onChange={handleInputChange('privacyPolicy')}
                                        sx={{
                                            color: '#A4795B',
                                            '&.Mui-checked': {
                                                color: '#A4795B',
                                            },
                                        }}
                                    />
                                }
                                label={
                                    <Typography sx={{
                                        fontSize: typography.h7.fontSize,
                                        lineHeight: typography.h7.lineHeight,
                                        fontWeight: typography.h7.fontWeight,
                                    }}>
                                        I agree to the privacy policy
                                    </Typography>
                                }
                                sx={{
                                    '& .MuiFormControlLabel-label': {
                                        marginTop: '2px'
                                    }
                                }}
                            />
                            {errors.privacyPolicy && (
                                <Typography variant="caption" sx={{color: '#FF2F2F', display: 'block'}}>
                                    {errors.privacyPolicy}
                                </Typography>
                            )}

                        </Box>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.newsletter}
                                    onChange={handleInputChange('newsletter')}
                                    sx={{
                                        color: '#A4795B',
                                        '&.Mui-checked': {
                                            color: '#A4795B',
                                        },
                                    }}
                                />
                            }
                            label={
                                <Typography sx={{
                                    fontSize: typography.h7.fontSize,
                                    lineHeight: typography.h7.lineHeight,
                                    fontWeight: typography.h7.fontWeight,
                                }}>
                                    Subscribe to the newsletter and get exclusive offers
                                </Typography>
                            }
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                '& .MuiFormControlLabel-label': {
                                    marginTop: '2px'
                                }
                            }}
                        />

                        <StyledButton
                            fullWidth
                            type="submit"
                            variant="contained"
                        >
                            Sign up
                        </StyledButton>

                        <Divider sx={{
                            my: 2,
                            width: '100%',
                            alignSelf: 'stretch'
                        }}>
                            <Typography variant="body2" sx={{color: '#666'}}>OR</Typography>
                        </Divider>

                        <GoogleButton
                            fullWidth
                            variant="outlined"
                            startIcon={<ColoredGoogleIcon/>}
                        >
                            Sign up with Google
                        </GoogleButton>
                    </Box>
                </TabPanel>
            </DialogContent>
        </StyledDialog>
    );
};

export default LoginModal;
