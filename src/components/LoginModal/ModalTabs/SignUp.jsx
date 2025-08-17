import {TabPanel} from "../../TabPanel/TabPanel.jsx";
import {Box, Checkbox, FormControlLabel, IconButton, InputAdornment, Typography} from "@mui/material";
import {StyledTextField} from "../../UI/Input.js";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {typography} from "../../../theme/typography.js";
import {StyledButton} from "../../UI/StyledButton.js";
import {CustomDivider} from "../../Divider/CustomDivider.jsx";
import {GoogleButton} from "../../UI/StyledGoogleButton.js";
import React from "react";
import {ColoredGoogleIcon} from "../ColoredGoogleIcon/ColoredGoogleIcon.jsx";

export const SignUp = ({
                           tabValue, handleSubmit, handleInputChange,
                           setShowPassword, showPassword, setShowRepeatPassword,
                           showRepeatPassword, formData, errors
                       }) => {
    return (
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

                <CustomDivider label='OR'/>

                <GoogleButton
                    fullWidth
                    variant="outlined"
                    startIcon={<ColoredGoogleIcon/>}
                >
                    Sign up with Google
                </GoogleButton>
            </Box>
        </TabPanel>
    )
}