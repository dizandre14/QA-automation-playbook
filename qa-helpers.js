// This function can be used by any other file now
export function generateTestEmail() {
    const timestamp = Date.now();
    return `testuser_${timestamp}@example.com`;
}