import * as DTHapi from "@types/hapi";

export * from "@types/hapi";

export class Server extends DTHapi.Server {
    some_server_method(arg1: number): string;
    nono(wow: string, liam: boolean): boolean;

    plugins: {
        db: {
            wow: boolean;
        };
    };
}