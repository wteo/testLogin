const userId = "test@test.com";
const password = "123456";
const passwordConfirmation = "123456"

beforeEach(() => {
    // Add functions here.
});

it("UserId Test 1", () => {
    if (userId === "") throw new Error("Required field!");
});

it("UserId Test 2", () => {
    if (!userId.includes("@")) throw new Error("Must enter a valid email");
});

it("Password Test", () => {
    if (password === "") throw new Error("equired field!");
});

it("Password Confirmation Test 1", () => {
    if (passwordConfirmation === "") throw new Error("Required field!");
});

it("Password Confirmation Test 2", () => {
    if (password !== passwordConfirmation) throw new Error("Passwords must match!");
});

