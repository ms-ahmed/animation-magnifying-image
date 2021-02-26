// @ts-ignore
import React, { useState, useCallback, useRef, useEffect } from 'react';
// @ts-ignore
import { useTrail, animated } from 'react-spring';
// @ts-ignore
import propTypes from 'prop-types';
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
	const fast = { tension: 1200, friction: 30 };
	const slow = { mass: 15, tension: 200, friction: 50 };
	let transRectangle = (x: number, y: number): any => `${x}px`;

	const [cubes, set] = useTrail(props.magnifyingDiv, () => ({
		xy: [0, 0],
		config: (i: number) => (i === 0 ? slow : slow),
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
			onMouseMove={(event) => {
				set({ xy: [event.clientX, event.clientY] });
			}}
		>
			{cubes.map((props, index) => (
				<animated.div
					key={index}
					style={{
						// @ts-ignore
						left: props.xy.interpolate(transRectangle),
					}}
				/>
			))}
		</DivHooks>
	);
};

export default DivHooksComponent;
