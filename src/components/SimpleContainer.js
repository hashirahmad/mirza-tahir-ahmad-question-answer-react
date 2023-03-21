/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   SimpleContainer.js                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Hashir <hashir@coinmode.com>               +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/03/21 20:15:15 by Hashir            #+#    #+#             */
/*   Updated: 2023/03/21 20:54:07 by Hashir           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer({ childUi }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          sx={{ bgcolor: '#1a1a1a' }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh" 
        >
          {
              childUi
          }
        </Box>
      </Container>
    </React.Fragment>
  );
}