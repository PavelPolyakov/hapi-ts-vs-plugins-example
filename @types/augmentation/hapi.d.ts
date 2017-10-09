import * as Hapi from "hapi";

declare module "hapi" {
    export interface Server {
        some_server_method(arg1: number): string;
        nono(wow: string, liam: boolean): boolean;
    }

    export interface PluginsStates {
        db: {
            wow: boolean;
        };
    }
}
