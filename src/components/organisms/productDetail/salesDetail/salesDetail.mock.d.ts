declare const notConfigurableData: {
    data: {
        availableForPickup: boolean;
        categories: {
            code: string;
        }[];
        childProducts: never[];
        configurable: boolean;
        configurableProductType: string;
        description: string;
        displayCode: string;
        ean: string;
        ecommerceEligible: boolean;
        maxOrderQuantity: number;
        minOrderQuantity: number;
        name: string;
        price: {
            currencyIso: string;
            value: number;
        };
        priceRange: {};
        productDataFields: {
            data: {
                id: number;
                name: string;
                value: string;
            }[];
        };
        purchasable: boolean;
        sapBlocked: boolean;
        stock: {
            stockLevel: number;
        };
        summary: string;
        unit: {
            code: string;
            maxNoOfDecimalValue: number;
            name: string;
        };
        url: string;
        volumePrices: {
            data: {
                amount: number;
                currencyIso: string;
                id: number;
                value: number;
            }[];
        };
        volumePricesFlag: boolean;
    };
    urls: {
        addToCart: string;
        addToWishlist: string;
        createWishlist: string;
        goToConfigure: string;
        goToSupport: string;
    };
};
declare const configurableData: {
    data: {
        availableForPickup: boolean;
        categories: {
            code: string;
        }[];
        childProducts: never[];
        configurable: boolean;
        ean: string;
        configurableProductType: string;
        configuratorType: string;
        cpqType: string;
        description: string;
        displayCode: string;
        ecommerceEligible: boolean;
        maxOrderQuantity: number;
        minOrderQuantity: number;
        name: string;
        priceRange: {};
        purchasable: boolean;
        sapBlocked: boolean;
        summary: string;
        unit: {
            code: string;
            maxNoOfDecimalValue: number;
            name: string;
        };
        url: string;
        productDatafields: {
            data: {
                id: number;
                name: string;
                value: string;
            }[];
            label: string;
        };
    };
    urls: {
        addToCart: string;
        addToWishlist: string;
        goToConfigure: string;
        goToSupport: string;
        createWishlist: string;
    };
};
export { notConfigurableData, configurableData };
