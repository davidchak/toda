import styled from "@emotion/styled";
import cn from "classnames";

interface IBasicTextProps {
	text: string,
	classNames: string|string[]
} 

const BasicText = ({ text, classNames }:IBasicTextProps) => {
	
	const styles = `
		text-overflow: ellipsis;
		margin: auto 0;
		padding: 0 12px;
		line-height: 20px;
		font-size: 12px;
		font-weight: 400;
	`
	const cnFx = cn.bind(styles);

	const classes = Array.isArray(classNames) ? cnFx(styles, classNames) : cnFx(classNames)

	return (
		<span className={classes}>{ text }</span>
	)
}

export const TextPrimary = styled(BasicText)`
	color: var(--text-primary-color)
`

export const TextSecondary = styled(BasicText)`
	color: var(--text-secondary-color)
`