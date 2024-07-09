import { BarcodeScannerIcon, CachedIcon } from "@example/app_common.ui/icons";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.querySelector("#main")!);
root.render(
	<StrictMode>
		<BarcodeScannerIcon />
		<CachedIcon />
	</StrictMode>
);
