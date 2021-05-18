
export let boot: Boot;

export default class Boot {

    public static init() {
        boot = new Boot();
    }

    public async loadConfig<T>(path: string): Promise<T> {
        const request = new XMLHttpRequest();
        request.open('GET', path);
        request.responseType = 'json';
        request.send();

        const promise = new Promise<T>((resolve, reject) => {
            request.onload = () => {
                resolve(request.response);
            }
        });
        return promise;
    }
}