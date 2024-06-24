import { Layout } from "@consta/uikit/Layout"
import styles from "./PageHeader.module.scss";

export const PageHeader = () => {
	return (<Layout className={styles["page-header"]}>
			<div>Header</div>
		</Layout>)
}