/* eslint-disable storybook/story-exports */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './index';

/**
 * @description 스토리북에서 제공하는 'Docs' 탭에서 문서를 추가한다
 * @property {string} title - 제목 ex_ '대분류'/ '중분류'
 * @property {Object} argTypes - 컴포넌트의 각 프로퍼티(매개변수)에 대한 타입 및 컨트롤을 정의합니다.
 */
export default {
    title: 'Atoms/Button',
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'danger'], // 선택 가능한 옵션
            control: { type: 'radio' }, // 제어 타입
            defaultValue: 'primary', // 기본 선택값
            description: '버튼 형태', // 해당 기능 설명
            table: {
                type: { summary: 'primary | secondary | danger' },
                defaultValue: { summary: 'primary' },
            }, // 제어 타입에 들어갈 옵셔널
        },
        children: {
            control: { type: 'text' },
            defaultValue: 'Button',
            description: '버튼 텍스트',
            table: {
                type: { summary: 'string' },
            },
        },
        disabled: {
            control: { type: 'boolean' },
            defaultValue: false,
            description: '비활성화 설정',
            table: {
                type: { summary: 'boolean' },
            },
        },
        width: {
            control: { type: 'number' },
            description: '버튼 높이',
            table: {
                type: { summary: 'number' },
            },
        },
        height: {
            control: { type: 'number' },
            description: '버튼 넒이',
            table: {
                type: { summary: 'number' },
            },
        },
        onClick: {
            description: 'onClick 이벤트 핸들러',
            table: {
                type: { summary: 'function' },
            },
        },
    },
} as ComponentMeta<typeof Button>;

/**
 * @description 구현 템플릿을 제공한다
 */
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Primary 버튼
export const Primary = Template.bind({});
Primary.args = { variant: 'primary', children: 'Primary Button' };

// Secondary 버튼
export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary', children: 'Secondary Button' };

// Danger 버튼
export const Danger = Template.bind({});
Danger.args = { variant: 'danger', children: 'Danger Button' };

// Disabled 버튼
export const Disabled = Template.bind({});
Disabled.args = { disabled: true, children: 'Disabled Button' };
