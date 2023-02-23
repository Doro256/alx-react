import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test("return the current year", () => {
    expect(getFullYear().toBe(2023));
});

test("returns the correct footer", () => 
{
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("returns right notification", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});