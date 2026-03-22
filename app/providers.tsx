'use client';

import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

const theme = createTheme({
  primaryColor: 'dark',
  colors: {
    dark: [
      '#F5F5F7',
      '#E5E5E5',
      '#D4D4D4',
      '#A3A3A3',
      '#737373',
      '#525252',
      '#404040',
      '#262626',
      '#1A1A1A',
      '#0A0A0A',
    ],
    gold: [
      '#F8F4EB',
      '#F0E6D2',
      '#E8D8B9',
      '#E0CAA0',
      '#D8BC87',
      '#D0AE6E',
      '#C9A961',
      '#B89444',
      '#A17F27',
      '#8A6A0A',
    ],
    violet: [
      '#E8E9F5',
      '#D1D3EB',
      '#BABDE1',
      '#A3A7D7',
      '#8C91CD',
      '#757BC3',
      '#5E65B9',
      '#4A4FA8',
      '#2E3192',
      '#1F2270',
    ],
  },
  fontFamily: 'Inter, sans-serif',
  headings: {
    fontFamily: 'Playfair Display, Georgia, serif',
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      {children}
    </MantineProvider>
  );
}
