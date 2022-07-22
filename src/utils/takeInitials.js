export const takeInitials = (text) => {
    let splitText = text.split(" ");
    let newText='';
    splitText.map(t => (newText += t[0]));
    return newText.toUpperCase()
}