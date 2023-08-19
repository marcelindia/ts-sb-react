import * as React from 'react';
import Main from "../components/MainSection/Main";
import {Meta, StoryObj} from "@storybook/react";

const MainMeta : Meta <typeof Main> = {
    title: 'Main/Main',
    component: Main,
    args: {
        handleOnClick: () => alert('Wine Selected')
    }
}

export default MainMeta;

type Story = StoryObj<typeof Main>
export const DefaultHeader: Story = {}