/// <reference types="react" />
export declare const DefaultTestID = "vg-layout";
declare const Layout: ({ type, children, testid, ...rest }: {
    [x: string]: any;
    type: any;
    children: any;
    testid?: string | undefined;
}) => import("react").FunctionComponentElement<{
    'data-testid': string;
}>;
export default Layout;
