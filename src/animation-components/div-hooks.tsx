import styled from 'styled-components';
interface Props {
	/* Content */
	backgroundImage?: string;
	widthContent?: string;
	backgroundAttachmentContent?: string;
	backgroundPositionContent?: string;
	magnifyingDiv?: number;
	backgroundSizeContent?: string;
}
export const DivHooks: React.FC<any> = styled.div`
	position: relative;
	height: inherit;
	width: inherit;
	background-attachment: fixed;
	overflow: hidden;
	& > span {
		position: absolute;
		will-change: transform;
		background: lightcoral;
		opacity: 0.6;
	}

	& > div {
		z-index: 1;
		position: absolute;
		top: 0;
		height: inherit;
		width: ${(props: Props) => props.widthContent};
		-webkit-box-shadow: 1px 0px 28px -3px rgba (0, 0, 0, 0.7);
		box-shadow: 1px 0px 28px -3px rgba(0, 0, 0, 0.7);
		background-image: ${(props: Props) => props.backgroundImage};
		background-position: ${(props: Props) => props.backgroundPositionContent};
		background-size: ${(props: Props) => props.backgroundSizeContent};
		-webkit-background-size: ${(props: Props) => props.backgroundSizeContent};
		-moz-background-size: ${(props: Props) => props.backgroundSizeContent};
		-o-background-size: ${(props: Props) => props.backgroundSizeContent};
		background-attachment: ${(props: Props) => props.backgroundAttachmentContent};
	}
`;
