import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Features = () => {
  const [expanded, setExpanded] = useState(false);

  const featureDetails = {
    'User Roles': ['Admin', 'Editor', 'Viewer'],
    'Company': ['Profile', 'Settings', 'Reports'],
    'Accounts': ['Create Account', 'Manage Account', 'Account Settings'],
    'Transactions': ['View Transactions', 'Add Transaction', 'Reports'],
    'Notifications': ['Email Alerts', 'SMS Alerts', 'Push Notifications'],
    'Overview': ['Dashboard', 'Activity Log', 'Statistics'],
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: 600 }}>
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
          All Features
        </Typography>
        {Object.keys(featureDetails).map((feature) => (
          <Accordion key={feature} expanded={expanded === feature} onChange={handleChange(feature)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${feature}-content`}
              id={`${feature}-header`}
            >
              <Typography variant="h6">{feature}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ border: '1px solid', borderColor: 'grey.300', borderRadius: 1, p: 2, mb: 2 }}>
                <Typography variant="subtitle1">{feature}</Typography>
              </Box>
              <Box>
                {featureDetails[feature].map((detail) => (
                  <Typography key={detail} sx={{ ml: 2, mb: 1 }}>
                    {detail}
                  </Typography>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default Features;
