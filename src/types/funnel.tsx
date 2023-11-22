export type Text = {
    id: string;
    type: 'text';
    text: string;
    color: string;
    align: 'left' | 'center' | 'right';
};

export type Image = {
    id: string;
    type: 'image';
    src: string;
};

export type ListItem = {
    title: string;
    description: string;
    src: string;
};

export type List = {
    id: string;
    type: 'list';
    items: ListItem[];
};

export type Button = {
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
