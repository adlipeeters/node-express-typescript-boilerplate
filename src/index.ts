const main = async () => { }

main().catch((err) => {
    if (err instanceof Error) {
        throw Error(err.message);
    }
    throw new Error(err);
});
