import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import 'bulma';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';

addDecorator(storyFn => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </BrowserRouter>
));
