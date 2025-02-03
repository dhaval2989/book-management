declare module 'koa-bodyparser' {
    import { Middleware } from 'koa';

    interface Options {
        enableTypes?: string[];
        encode?: string;
        formLimit?: string;
        jsonLimit?: string;
        strict?: boolean;
        detectJSON?: (ctx: any) => boolean;
        extendTypes?: {
            json?: string[];
            form?: string[];
            text?: string[];
        };
        onerror?: (err: Error, ctx: any) => void;
    }

    function bodyparser(options?: Options): Middleware;
    export = bodyparser;
}
