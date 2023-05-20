export class http {
  static get<T>(url: string, headers: Headers = new Headers()): Promise<T> {
    return new Promise<T>((onResolve, onError) => {
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");
      try {
        fetch(url, {
          method: "GET",
          headers: headers,
        })
          .then(
            (r) => {
              if (!r.ok) return Promise.reject(`Error! status: ${r.status}`);
              return r.json();
            },
            (err) => onError(err)
          )
          .then(
            (e) => onResolve(e as T),
            (err) => onError(err)
          );
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
    return new Promise<T>((onResolve, onError) => {
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");
      try {
        fetch(url, {
          method: "POST",
          headers: headers,
          body: body,
        })
          .then(
            (r) => {
              if (!r.ok) return Promise.reject(`Error! status: ${r.status}`);
              return r.json();
            },
            (err) => onError(err)
          )
          .then(
            (r) => onResolve(r),
            (err) => onError(err)
          );
      } catch (e) {
        onError(e);
      }
    });
  }

  static put<T>(url: string, headers: Headers = new Headers(), body = "") {
    return new Promise<T>((onResolve, onError) => {
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");
      try {
        fetch(url, {
          method: "PUT",
          headers: headers,
          body: body,
        })
          .then(
            (r) => {
              if (!r.ok) return Promise.reject(`Error! status: ${r.status}`);
              return r.json();
            },
            (err) => onError(err)
          )
          .then(
            (r) => onResolve(r),
            (err) => onError(err)
          );
      } catch (e) {
        onError(e);
      }
    });
  }

  static delete<T>(url: string, headers: Headers = new Headers(), body = "") {
    return new Promise<T>((onResolve, onError) => {
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");
      try {
        fetch(url, {
          method: "DELETE",
          headers: headers,
          body: body,
        })
          .then(
            (r) => {
              if (!r.ok) return Promise.reject(`Error! status: ${r.status}`);
              return r.json();
            },
            (err) => onError(err)
          )
          .then(
            (r) => onResolve(r),
            (err) => onError(err)
          );
      } catch (e) {
        onError(e);
      }
    });
  }
}
