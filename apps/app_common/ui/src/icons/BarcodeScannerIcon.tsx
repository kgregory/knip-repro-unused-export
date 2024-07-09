import type { SvgIconProps } from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';

// Sourced from Google fonts: https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Abarcode_scanner%3AFILL%400%3Bwght%40400%3BGRAD%400%3Bopsz%4024
export const BarcodeScannerIcon = (props: SvgIconProps) => (
	<SvgIcon {...props}>
		<path d="M1 3h5v2H3v3H1Zm17 0h5v5h-2V5h-3Zm3 16v-3h2v5h-5v-2ZM3 16v3h3v2H1v-5ZM7 6h1v12H7ZM4 6h2v12H4Zm6 0h2v12h-2Zm7 0h1v12h-1Zm2 0h1v12h-1Zm-6 0h3v12h-3Z" />
	</SvgIcon>
);
BarcodeScannerIcon.muiName = 'SvgIcon';
