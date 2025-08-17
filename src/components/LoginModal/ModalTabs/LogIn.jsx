import {TabPanel} from "../../TabPanel/TabPanel.jsx";
import {Box, IconButton, InputAdornment, Typography} from "@mui/material";
import {StyledTextField} from "../../UI/Input.js";
import {ErrorOutline, Visibility, VisibilityOff} from "@mui/icons-material";
import {typography} from "../../../theme/typography.js";
import {StyledButton} from "../../UI/StyledButton.js";
import {CustomDivider} from "../../Divider/CustomDivider.jsx";
import {GoogleButton} from "../../UI/StyledGoogleButton.js";
import React from "react";
import {ColoredGoogleIcon} from "../ColoredGoogleIcon/ColoredGoogleIcon.jsx";

export const LogIn = ({
                          tabValue, handleSubmit, handleInputChange,
                          setShowPassword, showPassword, formData, errors
                      }) => {
    return (
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

                <CustomDivider label='OR'/>

                <GoogleButton
                    fullWidth
                    variant="outlined"
                    startIcon={<ColoredGoogleIcon/>}
                >
                    Sign in with Google
                </GoogleButton>
            </Box>
        </TabPanel>
    )
}