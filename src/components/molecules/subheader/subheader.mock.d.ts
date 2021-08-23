declare const fromHybrisData: {
    caption: string;
    url: string;
    values: ({
        name: string;
        value: string;
        url: string;
        label?: undefined;
    } | {
        name: string;
        label: string;
        value: string;
        url: string;
    })[];
};
export { fromHybrisData };
