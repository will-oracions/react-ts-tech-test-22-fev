export const navigateTo = (navigate: (route: string) => void, route: string) => {
    navigate(route);
    closeMenu();   
}

export const closeMenu = () => {
    const menu = document.getElementById('menu') as HTMLInputElement;
    menu.checked = false;
}

// export const capitalize = (str: string): string => {
//   const words = str.toLowerCase().split(' ');
//   const result: string[] = [];
//   words.map(word => result.push(word.charAt(0).toUpperCase() + word.slice(1)));
//   return result.join(' ');
// }