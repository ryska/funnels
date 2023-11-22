type Text = {
    id: string;
    type: 'text';
    text: string;
    color: string;
    align: 'left' | 'center' | 'right';
};

type Image = {
    id: string;
    type: 'image';
    src: string;
};

type ListItem = {
    title: string;
    description: string;
    src: string;
};

type List = {
    id: string;
    type: 'list';
    items: ListItem[];
};

type Button = {
    id: string;
    type: 'button';
    text: string;
    color: string;
    bgColor: string;
};

export type Block = Text | Image | List | Button;

export type Page = {
    id: string;
    blocks: Block[];
};

export type Funnel = {
    name: string;
    bgColor: string;
    pages: Page[];
};
