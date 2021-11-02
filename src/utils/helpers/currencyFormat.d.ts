declare type CurrencyFormatterOptions = {
    significantDigits?: number;
    thousandsSeparator?: string;
    decimalSeparator?: string;
    symbol?: string;
    flipValues?: boolean;
};
declare const currencyFormatter: (value: number, options: CurrencyFormatterOptions) => string;
export default currencyFormatter;
