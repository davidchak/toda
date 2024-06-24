import styled from "@emotion/styled";
import cn from "classnames";

export const H3 = styled.h3`
	font-size: 12px;
	line-height: 18px;
	font-weight: 600;
`

export const H2 = styled.h2`
	font-size: 16px;
	line-height: 20px;
	font-weight: 600;
`

export const H1 = styled.h1`
	font-size: 24px;
	line-height: 28px;
	font-weight: 700;
`

interface IHeaderTextProps {
	text: string;
}

export const HeaderText = ({ text }: IHeaderTextProps) => {
	return (<h1>{ text }</h1>)
}