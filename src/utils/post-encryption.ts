export type PostEncryptionData = {
	encrypted?: boolean;
	password?: string | number;
};

/**
 * Resolves the fail-closed encryption contract shared by every post surface.
 * An explicit encrypted flag without a usable password is a configuration error,
 * not permission to publish the post as plaintext.
 */
export function isEncryptedPost(data: PostEncryptionData): boolean {
	const hasPassword =
		data.password !== undefined && String(data.password).trim().length > 0;
	if (data.encrypted && !hasPassword) {
		throw new Error("Encrypted posts require a non-empty password");
	}
	return hasPassword;
}

/**
 * Stand-in for a post password once the real value is no longer needed.
 * It keeps `isEncryptedPost` truthy without carrying the secret.
 */
export const REDACTED_POST_PASSWORD = "[redacted]";

/**
 * Returns post data that is safe to serialize into hydrated component props.
 * The real password is only needed at build time to encrypt the post body, so
 * any list that can reach the browser must carry this redacted copy instead.
 */
export function redactPostPassword<T extends PostEncryptionData>(data: T): T {
	if (data.password === undefined) return data;
	return { ...data, password: REDACTED_POST_PASSWORD };
}
