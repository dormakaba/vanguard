declare const fromHybrisData: {
    productAvailability: {
        items: any[];
    };
    productResources: {
        resources: any[];
    };
    productTechnicalDetails: {
        elements: {
            label: string;
            data: {
                id: number;
                name: string;
                value: string;
            }[];
        }[];
    };
};
export { fromHybrisData };
