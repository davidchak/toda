import { FlexContainerPropsTypes, DirectionEnum, AlignItemsEnum, JustifyContentEnum, GapEnum } from "./FlexContainer.types";
import cn from 'classnames';


export const FlexContainer = ({
	children,
	direction = DirectionEnum.row,
	justifyContent = JustifyContentEnum.start,
	alignItems = AlignItemsEnum.start,
	gap = GapEnum.md,
}: FlexContainerPropsTypes) => {
	// TODO: реализовать сборку классов или стилей на основе входных данных

	return <div>{children}</div>
}