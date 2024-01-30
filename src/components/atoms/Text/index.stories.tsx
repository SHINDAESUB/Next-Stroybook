import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from './index';

export default {
    title: 'Atoms/Text',
    argTypes: {
        variant: {
            options: [
                'extraSmall',
                'small',
                'medium',
                'mediumLarge',
                'large',
                'extraLarge',
            ],
            control: { type: 'select' },
            defaultValue: 'medium',
            // docs에 표시할 내용을 설정
            description: '텍스트 변형',
            table: {
                type: {
                    summary:
                        'extraSmall , small, medium, mediumLarge, large, extraLarge',
                },
                defaultValue: { summary: 'medium' },
            },
        },
        children: {
            control: { type: 'text' },
            description: '텍스트',
            table: {
                type: { summary: 'string' },
            },
        },
        fontWeight: {
            control: { type: 'text' },
            description: '폰트 굵기',
            table: {
                type: { summary: 'string' },
            },
        },
        lineHeight: {
            control: { type: 'text' },
            description: '행 높이',
            table: {
                type: { summary: 'string' },
            },
        },
        color: {
            control: { type: 'color' },
            description: '텍스트 색상',
            table: {
                type: { summary: 'string' },
            },
        },
        backgroundColor: {
            control: { type: 'color' },
            description: '배경 색상',
            table: {
                type: { summary: 'string' },
            },
        },
        m: {
            control: { type: 'number' },
            description: '마진',
            table: {
                type: { summary: 'number' },
            },
        },
        mt: {
            control: { type: 'number' },
            description: '위쪽 마진',
            table: {
                type: { summary: 'number' },
            },
        },
        mr: {
            control: { type: 'number' },
            description: '오른쪽 마진',
            table: {
                type: { summary: 'number' },
            },
        },
        mb: {
            control: { type: 'number' },
            description: '아래쪽 마진',
            table: {
                type: { summary: 'number' },
            },
        },
        ml: {
            control: { type: 'number' },
            description: '왼쪽 마진',
            table: {
                type: { summary: 'number' },
            },
        },
        p: {
            control: { type: 'number' },
            description: '패딩',
            table: {
                type: { summary: 'number' },
            },
        },
        pt: {
            control: { type: 'number' },
            description: '위쪽 패딩',
            table: {
                type: { summary: 'number' },
            },
        },
        pr: {
            control: { type: 'number' },
            description: '오른쪽 패딩',
            table: {
                type: { summary: 'number' },
            },
        },
        pb: {
            control: { type: 'number' },
            description: '아래쪽 패딩',
            table: {
                type: { summary: 'number' },
            },
        },
        pl: {
            control: { type: 'number' },
            description: '왼쪽 패딩',
            table: {
                type: { summary: 'number' },
            },
        },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

const longText = `1. 동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세
무궁화 삼천리 화려 강산
대한 사람 대한으로 길이 보전하세
2. 남산 위에 저 소나무 철갑을 두른 듯
바람 서리 불변함은 우리 기상일세
무궁화 삼천리 화려 강산
대한 사람 대한으로 길이 보전하세
3. 가을 하늘 공활한데 높고 구름 없이
밝은 달은 우리 가슴 일편단심일세
무궁화 삼천리 화려 강산
대한 사람 대한으로 길이 보전하세
4. 이 기상과 이 맘으로 충성을 다하여
괴로우나 즐거우나 나라 사랑하세
무궁화 삼천리 화려 강산
대한 사람 대한으로 길이 보전하세`;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { variant: 'extraSmall', children: longText };

export const Small = Template.bind({});
Small.args = { variant: 'small', children: longText };

export const Medium = Template.bind({});
Medium.args = { variant: 'medium', children: longText };

export const MediumLarge = Template.bind({});
MediumLarge.args = { variant: 'mediumLarge', children: longText };

export const Large = Template.bind({});
Large.args = { variant: 'large', children: longText };

export const ExtraLarge = Template.bind({});
ExtraLarge.args = { variant: 'extraLarge', children: longText };
