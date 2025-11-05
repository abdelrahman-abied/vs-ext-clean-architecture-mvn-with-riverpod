// Function that converts text to Pascal case
export function toPascalCase(text: string): string {
    return text.replace(/(^\w|_\w)/g, match => match.replace('_', '').toUpperCase());
}

// Function that converts text to snake case
export function toSnakeCase(text: string): string {
    return text.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`).replace(/^_/, '').toLowerCase();
}
