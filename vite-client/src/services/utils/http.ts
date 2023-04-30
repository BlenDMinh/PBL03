export class http {
  static get<T>(
    url: string,
    headers: Headers = new Headers(),
    body = ""
  ): Promise<T> {
    return new Promise<T>(async (onResolve, onError) => {
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");
      try {
        fetch(url, {
          method: "GET",
          headers: headers,
        })
          .then((r) => {
            if (!r.ok) throw new Error(`Error! status: ${r.status}`);
            return r.json();
          })
          .then((e) => onResolve(e as T));
      } catch (e) {
        onError(e);
      }
    });
  }

  static post<T>(
    url: string,
    headers: Headers = new Headers(),
    body = ""
  ): Promise<T> {
    return new Promise<T>(async (onResolve, onError) => {
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");
      console.log(url);
      try {
        fetch(url, {
          method: "POST",
          headers: headers,
          body: body,
        })
        .then((r) => {
            if (!r.ok) throw new Error(`Error! status: ${r.status}`);
            return r.json();
          })
          .then((r) => onResolve(r));
      } catch (e) {
        onError(e);
      }
    });
  }

  static put<T>(url: string,
    headers: Headers = new Headers(),
    body = "") {
      return new Promise<T>(async (onResolve, onError) => {
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        try {
          fetch(url, {
            method: "PUT",
            headers: headers,
            body: body,
          })
            .then((r) => {
              if (!r.ok) throw new Error(`Error! status: ${r.status}`);
              return r.json();
            })
            .then((r) => onResolve(r));
        } catch (e) {
          onError(e);
        }
      });
    }
}