export class http {
    static get<T>(url: string, headers: Headers = new Headers(), body: BodyInit = ""): Promise<T> {
        return new Promise<T>(async (onResolve, onError) => {
            headers.append('Accept', 'application/json')
            try {
                fetch(url, {
                    method: 'GET',
                    headers: headers,
                }).then(r => {
                    if(!r.ok)
                        throw new Error(`Error! status: ${r.status}`);
                    return r.json();
                }).then(e => onResolve(e as T));
            } catch(e) {
                onError(e);
            }
        });
    }

    static post<T>(url: string, headers: Headers = new Headers(), body: BodyInit = ""): Promise<T> {
        return new Promise<T>(async (onResolve, onError) => {
            headers.append('Accept', 'application/json')
            try {
                fetch(url, {
                    method: "POST",
                    headers: headers,
                    body: body
                }).then(r => {
                    if(!r.ok)
                        throw new Error(`Error! status: ${r.status}`)
                    return r.json()
                }).then(r => onResolve(r))
            } catch(e) {
                onError(e)
            }
        });
    }
}