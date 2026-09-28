export declare const sqliteJsonExtensionArgs: {
    name: string;
    query: {
        $allModels: {
            $allOperations({ args, query }: {
                args: unknown;
                query: (args: unknown) => Promise<unknown>;
            }): Promise<unknown>;
        };
    };
};
