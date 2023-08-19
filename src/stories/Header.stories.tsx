import Header from "../components/Header/Header";
import {Meta, StoryObj} from "@storybook/react";

const HeaderMeta:Meta <typeof Header> = {
    title: 'Main/Header',
    component: Header,
    args:{
        title: 'Wine With Me'
    }
}
export default HeaderMeta;

type Story = StoryObj<typeof Header>
export const DefaultHeader: Story = {}