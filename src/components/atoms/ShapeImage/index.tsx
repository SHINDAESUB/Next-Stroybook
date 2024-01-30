import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';

type ImageShape = 'circle' | 'square';
type ShapeImageProps = ImageProps & { shape?: ImageShape };

const ImageWithShape = styled(Image)<{ shape?: ImageShape }>`
    border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '0')};
`;

/**
 * 셰이프 이미지
 * @description 사각형 또는 원형 이미지를 표시 할 경우 사용된다
 */
const ShapeImage = (props: ShapeImageProps) => {
    const { shape, ...imageProps } = props;

    return <ImageWithShape shape={shape} {...imageProps} />;
};

export default ShapeImage;
