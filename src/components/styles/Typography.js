import styled from 'styled-components/macro';

/**
 * TODO: make margin & padding a sepearate common file and use them in the components where needed.
 */

export const MeH1 = styled.h1`
	${(props) => props.color && `color: ${props.color};`}
	${(props) => props.textAlign && `text-align: ${props.textAlign};`}
	${(props) => props.padding && props.padding.top && `padding-top: ${props.padding.top};`}
	${(props) => props.padding && props.padding.right && `padding-right: ${props.padding.right};`}
	${(props) => props.padding && props.padding.bottom && `padding-bottom: ${props.padding.bottom};`}
	${(props) => props.padding && props.padding.left && `padding-left: ${props.padding.left};`}

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top};`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right};`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom};`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left};`}
	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth}px;`}
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
	${(props) => `line-height: ${props.lineHeight || '113px'};`}
	font-style: normal;
	font-weight: 300;
	font-size: 93px;
	letter-spacing: -1.5px;
`;

export const MeH2 = styled.h2`
	${(props) => props.color && `color: ${props.color};`}
	${(props) => props.textAlign && `text-align: ${props.textAlign};`}
	${(props) => props.padding && props.padding.top && `padding-top: ${props.padding.top};`}
	${(props) => props.padding && props.padding.right && `padding-right: ${props.padding.right};`}
	${(props) => props.padding && props.padding.bottom && `padding-bottom: ${props.padding.bottom};`}
	${(props) => props.padding && props.padding.left && `padding-left: ${props.padding.left};`}

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top};`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right};`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom};`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left};`}
	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth}px;`}
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
	${(props) => `line-height: ${props.lineHeight || '70px'};`}
	font-style: normal;
	font-weight: 300;
	font-size: 58px;
	letter-spacing: -0.5px;
`;

export const MeH3 = styled.h3`
	${(props) => props.color && `color: ${props.color};`}
	${(props) => props.textAlign && `text-align: ${props.textAlign};`}
	${(props) => props.padding && props.padding.top && `padding-top: ${props.padding.top};`}
	${(props) => props.padding && props.padding.right && `padding-right: ${props.padding.right};`}
	${(props) => props.padding && props.padding.bottom && `padding-bottom: ${props.padding.bottom};`}
	${(props) => props.padding && props.padding.left && `padding-left: ${props.padding.left};`}

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top};`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right};`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom};`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left};`}
	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth}px;`}
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
	${(props) => `line-height: ${props.lineHeight || '57px'};`}
	font-style: normal;
	font-weight: normal;
	font-size: 47px;
`;

export const MeH4 = styled.h4`
	${(props) => props.color && `color: ${props.color};`}
	${(props) => props.textAlign && `text-align: ${props.textAlign};`}
	${(props) => props.padding && props.padding.top && `padding-top: ${props.padding.top};`}
	${(props) => props.padding && props.padding.right && `padding-right: ${props.padding.right};`}
	${(props) => props.padding && props.padding.bottom && `padding-bottom: ${props.padding.bottom};`}
	${(props) => props.padding && props.padding.left && `padding-left: ${props.padding.left};`}

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top};`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right};`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom};`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left};`}
	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth}px;`}
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
	${(props) => `line-height: ${props.lineHeight || '40px'};`}
	font-style: normal;
	font-weight: normal;
	font-size: 33px;
	letter-spacing: 0.25px;
`;

/**
 * !Error: if the prop value comes 0 in any of the margin, padding
 * !or in any other prop, then the next css property is not workinf becuase
 * !it is appening the 0 to that next property
 */
export const MeH5 = styled.h5`
	${(props) => props.color && `color: ${props.color};`}
	${(props) => props.textAlign && `text-align: ${props.textAlign};`}
	
	${(props) => props.padding && props.padding.top && `padding-top: ${props.padding.top};`}
	${(props) => props.padding && props.padding.right && `padding-right: ${props.padding.right};`}
	${(props) => props.padding && props.padding.bottom && `padding-bottom: ${props.padding.bottom};`}
	${(props) => props.padding && props.padding.left && `padding-left: ${props.padding.left};`}

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top};`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right};`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom};`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left};`}

	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth}px;`}
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
	${(props) => `line-height: ${props.lineHeight || '28px'};`}
	font-style: normal;
	font-weight: normal;
	font-size: 23px;
`;

export const MeLightH5 = styled.h5`
	${(props) => props.color && `color: ${props.color};`}
	${(props) => props.textAlign && `text-align: ${props.textAlign};`}
	${(props) => props.padding && props.padding.top && `padding-top: ${props.padding.top};`}
	${(props) => props.padding && props.padding.right && `padding-right: ${props.padding.right};`}
	${(props) => props.padding && props.padding.bottom && `padding-bottom: ${props.padding.bottom};`}
	${(props) => props.padding && props.padding.left && `padding-left: ${props.padding.left};`}

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top};`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right};`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom};`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left};`}
	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth}px;`}
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
	${(props) => `line-height: ${props.lineHeight || '28px'};`}
	font-style: normal;
	font-weight: 100;
	font-size: 23px;
`;

export const MeH6 = styled.h6`
	${(props) => props.color && `color: ${props.color};`}
	${(props) => props.textAlign && `text-align: ${props.textAlign};`}
	${(props) => props.padding && props.padding.top && `padding-top: ${props.padding.top};`}
	${(props) => props.padding && props.padding.right && `padding-right: ${props.padding.right};`}
	${(props) => props.padding && props.padding.bottom && `padding-bottom: ${props.padding.bottom};`}
	${(props) => props.padding && props.padding.left && `padding-left: ${props.padding.left};`}

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top};`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right};`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom};`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left};`}
	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth}px;`}
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
	${(props) => `line-height: ${props.lineHeight || '23px'};`}
	font-style: normal;
	font-weight: 500;
	font-size: 19px;
	letter-spacing: 0.15px;
`;

export const MeLightH6 = styled.h6`
	${(props) => props.color && `color: ${props.color};`}
	${(props) => props.textAlign && `text-align: ${props.textAlign};`}
	${(props) => props.padding && props.padding.top && `padding-top: ${props.padding.top};`}
	${(props) => props.padding && props.padding.right && `padding-right: ${props.padding.right};`}
	${(props) => props.padding && props.padding.bottom && `padding-bottom: ${props.padding.bottom};`}
	${(props) => props.padding && props.padding.left && `padding-left: ${props.padding.left};`}

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top};`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right};`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom};`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left};`}
	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth}px;`}
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
	${(props) => `line-height: ${props.lineHeight || '23px'};`}
	font-style: normal;
	font-weight: 100;
	font-size: 19px;
	letter-spacing: 0.15px;
`;

export const MeSubtitle1 = styled.h5`
	${(props) => props.color && `color: ${props.color};`}
	${(props) => props.textAlign && `text-align: ${props.textAlign};`}
	${(props) => props.padding && props.padding.top && `padding-top: ${props.padding.top};`}
	${(props) => props.padding && props.padding.right && `padding-right: ${props.padding.right};`}
	${(props) => props.padding && props.padding.bottom && `padding-bottom: ${props.padding.bottom};`}
	${(props) => props.padding && props.padding.left && `padding-left: ${props.padding.left};`}

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top};`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right};`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom};`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left};`}
	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth}px;`}
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
	${(props) => `line-height: ${props.lineHeight || '19px'};`}
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	letter-spacing: 0.15px;
`;

export const MeSubtitle2 = styled.h6`
	${(props) => props.color && `color: ${props.color};`}
	${(props) => props.textAlign && `text-align: ${props.textAlign};`}
	${(props) => props.padding && props.padding.top && `padding-top: ${props.padding.top};`}
	${(props) => props.padding && props.padding.right && `padding-right: ${props.padding.right};`}
	${(props) => props.padding && props.padding.bottom && `padding-bottom: ${props.padding.bottom};`}
	${(props) => props.padding && props.padding.left && `padding-left: ${props.padding.left};`}

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top};`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right};`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom};`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left};`}
	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth}px;`}
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
	${(props) => `line-height: ${props.lineHeight || '17px'};`}
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	letter-spacing: 0.1px;
`;

export const MeBody = styled.p`
	${(props) => props.color && `color: ${props.color};`}
	${(props) => props.textAlign && `text-align: ${props.textAlign};`}
	${(props) => props.padding && props.padding.top && `padding-top: ${props.padding.top};`}
	${(props) => props.padding && props.padding.right && `padding-right: ${props.padding.right};`}
	${(props) => props.padding && props.padding.bottom && `padding-bottom: ${props.padding.bottom};`}
	${(props) => props.padding && props.padding.left && `padding-left: ${props.padding.left};`}

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top};`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right};`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom};`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left};`}
	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth}px;`}
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
	${(props) => `line-height: ${props.lineHeight || '19px'};`}
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	letter-spacing: 0.5px;
`;

export const MeBody2 = styled.p`
	${(props) => props.color && `color: ${props.color};`}
	${(props) => props.textAlign && `text-align: ${props.textAlign};`}
	${(props) => props.padding && props.padding.top && `padding-top: ${props.padding.top};`}
	${(props) => props.padding && props.padding.right && `padding-right: ${props.padding.right};`}
	${(props) => props.padding && props.padding.bottom && `padding-bottom: ${props.padding.bottom};`}
	${(props) => props.padding && props.padding.left && `padding-left: ${props.padding.left};`}

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top};`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right};`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom};`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left};`}
	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth}px;`}
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
	${(props) => `line-height: ${props.lineHeight || '17px'};`}
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	letter-spacing: 0.25px;
`;

export const MeButtonText = styled.span`
	${(props) => props.color && `color: ${props.color};`}
	${(props) => props.textAlign && `text-align: ${props.textAlign};`}
	${(props) => props.padding && props.padding.top && `padding-top: ${props.padding.top};`}
	${(props) => props.padding && props.padding.right && `padding-right: ${props.padding.right};`}
	${(props) => props.padding && props.padding.bottom && `padding-bottom: ${props.padding.bottom};`}
	${(props) => props.padding && props.padding.left && `padding-left: ${props.padding.left};`}

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top};`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right};`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom};`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left};`}
	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth}px;`}
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
	${(props) => `line-height: ${props.lineHeight || '17px'};`}
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	letter-spacing: 1.25px;
	text-transform: uppercase;
`;

export const MeCaption = styled.p`
	${(props) => props.color && `color: ${props.color};`}
	${(props) => props.textAlign && `text-align: ${props.textAlign};`}
	${(props) => props.padding && props.padding.top && `padding-top: ${props.padding.top};`}
	${(props) => props.padding && props.padding.right && `padding-right: ${props.padding.right};`}
	${(props) => props.padding && props.padding.bottom && `padding-bottom: ${props.padding.bottom};`}
	${(props) => props.padding && props.padding.left && `padding-left: ${props.padding.left};`}

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top};`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right};`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom};`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left};`}
	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth}px;`}
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
	${(props) => `line-height: ${props.lineHeight || '15px'};`}
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	letter-spacing: 0.4px;
`;

export const MeOverline = styled.p`
	${(props) => props.color && `color: ${props.color};`}
	${(props) => props.textAlign && `text-align: ${props.textAlign};`}
	${(props) => props.padding && props.padding.top && `padding-top: ${props.padding.top};`}
	${(props) => props.padding && props.padding.right && `padding-right: ${props.padding.right};`}
	${(props) => props.padding && props.padding.bottom && `padding-bottom: ${props.padding.bottom};`}
	${(props) => props.padding && props.padding.left && `padding-left: ${props.padding.left};`}

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top};`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right};`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom};`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left};`}
	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth}px;`}
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
	${(props) => `line-height: ${props.lineHeight || '12px'};`}
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	text-transform: uppercase;
	letter-spacing: 1.5px;
`;
