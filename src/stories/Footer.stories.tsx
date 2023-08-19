import Footer from "../components/Footer/Footer";
import {Meta, StoryObj} from "@storybook/react";

const FooterMeta: Meta <typeof Footer> = {
    title: 'Main/Footer',
    component: Footer,
   
}

export default FooterMeta;

type Story = StoryObj<typeof Footer>;
export const DefaultFooter: Story = {};