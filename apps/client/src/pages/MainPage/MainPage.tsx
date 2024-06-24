import { TaskPageHeader } from "widgets/TaskPageHeader";
import { Layout } from "@consta/uikit/Layout";
import { TaskPageContent } from "widgets/TaskPageContent";

const MainPage = () => {
  // const data = useLoaderData() as  typeof mainPageLoader;

  return (
	<Layout direction="column" style={{ gap: "8px", width: "inherit", height: "inherit", display: "flex" }}>
		<TaskPageHeader />
		<TaskPageContent />
	</Layout>)
}

// {/* <Block /> */}
// {/* <Suspense fallback={<p>Loading...</p>}>
// 	<Await
// 		resolve={ data }
// 		errorElement={
// 			<p>Await Error!</p>
// 		} >
// 			{
// 				(data) => {
// 					return (<code>{ JSON.stringify(data.task, null, 2) }</code>)
// 				}
// 			}
// 	</Await>
// </Suspense> */}
export { MainPage }
