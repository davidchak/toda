import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import 'assets/styles/global.scss';

export const App: FC = () => {
  return(
		<Theme preset={presetGpnDefault}>
			<RouterProvider router={router} />
		</Theme>)
};
