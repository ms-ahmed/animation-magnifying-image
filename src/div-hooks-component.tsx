import React from 'react';
import { useTrail, animated } from 'react-spring';
import propTypes, { number } from 'prop-types';
import { DivHooks } from './div-hooks';
interface Props {
	backgroundImage?: string;
	widthContent?: string;
	backgroundAttachmentContent?: string;
	backgroundPositionContent?: string;
	magnifyingDiv?: number;
	backgroundSizeContent?: string;
	backgroundRepeatContent?: string;
}
const DivHooksComponent: React.FC<any> = (props: Props) => {
	const slow = { mass: 15, tension: 200, friction: 50 };
	const slower = { mass: 20, tension: 200, friction: 50 };
	let transRectangle = (x: number, y: number): any => `${x}px`;
	const [cubes, set]: Array<any> = useTrail(props.magnifyingDiv, () => ({
		xy: [0, 0],
		config: (i: number) => (i === 0 ? slow : slower),
	}));
	console.log(props);
	return (
		<DivHooks
			backgroundImage={props.backgroundImage}
			widthContent={props.widthContent}
			backgroundAttachmentContent={props.backgroundAttachmentContent}
			backgroundPositionContent={props.backgroundPositionContent}
			backgroundSizeContent={props.backgroundSizeContent}
			backgroundRepeatContent={props.backgroundRepeatContent}
			onMouseMove={(event: any) => {
				set({ xy: [event.clientX, event.clientY] });
			}}
		>
			{cubes.map((props: any, index: number) => (
				<animated.div
					key={index}
					style={{
						left: props.xy.interpolate(transRectangle),
					}}
				/>
			))}
		</DivHooks>
	);
};

export default DivHooksComponent;
