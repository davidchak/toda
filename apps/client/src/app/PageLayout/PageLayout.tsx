import { Outlet } from "react-router-dom" 
import { Layout } from "@consta/uikit/Layout";
import styles from "./PageLayout.module.scss";
import { PageHeader } from "features/PageHeader";
import { PageFooter } from "features/PageFooter";
import { MenuBar } from "widgets/MenuBar";
import { WidgetsBar } from "features/WidgetsBar";
import { WidgetsViewport } from "features/WidgetsViewport";


export const PageLayout = () => {
	return (<Layout className={styles['page']} direction="column">
		<PageHeader />
		<Layout flex={1} direction="row">
			{/* Меню */}
			<MenuBar />

			{/* Body */}
			<Layout flex={1} direction="column">
				{/* Content */}
				<Layout flex={1} direction="column">
					<Outlet />
				</Layout>
				<Layout style={{flex: '0 0 400px', borderTop: "4px solid #E5E5E5"}}></Layout>
			</Layout>

			{/* Панель отображения виджетов */}
			<WidgetsViewport />

			{/* Панель списка виджетов */}
			<WidgetsBar />
		</Layout>
		<PageFooter />
	</Layout>)
}