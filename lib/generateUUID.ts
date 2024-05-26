export default function generateUUID(): string {
    const hexDigits = "0123456789abcdef";
    let uuid = "";
    for (let i = 0; i < 36; i++) {
        if (i === 8 || i === 13 || i === 18 || i === 23) {
            uuid += "-";
        } else if (i === 14) {
            uuid += "4";
        } else if (i === 19) {
            uuid += hexDigits.charAt(Math.floor(Math.random() * 4) + 8);
        } else {
            uuid += hexDigits.charAt(Math.floor(Math.random() * 16));
        }
    }
    return uuid;
}