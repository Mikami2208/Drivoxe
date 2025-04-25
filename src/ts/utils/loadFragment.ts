
export function loadFragment(id: string, url: string, callback?: () => void): void {
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Элемент с id "${id}" не найден`);
      return;
    }
  
    fetch(url)
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error(`Ошибка загрузки ${url}`);
        }
        return response.text();
      })
      .then((html: string) => {
        element.innerHTML = html;
        callback?.();
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }