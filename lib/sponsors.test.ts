import { describe, expect, it } from "vitest"

import { sponsors } from "./sponsors"

describe("sponsors data", () => {
	it("should be an array", () => {
		expect(Array.isArray(sponsors)).toBe(true)
	})

	it("should contain sponsor objects with required fields", () => {
		for (const sponsor of sponsors) {
			expect(sponsor).toHaveProperty("name")
			expect(sponsor).toHaveProperty("image")
			expect(sponsor).toHaveProperty("link")

			expect(typeof sponsor.name).toBe("string")
			expect(typeof sponsor.image).toBe("string")
			expect(typeof sponsor.link).toBe("string")
		}
	})

	it("should have valid image paths", () => {
		for (const sponsor of sponsors) {
			// Image should be a filename (not a full path)
			expect(sponsor.image).not.toContain("/")
			expect(sponsor.image).toMatch(/\.(png|jpg|jpeg|svg|webp)$/i)
		}
	})

	it("should have valid URLs for links", () => {
		for (const sponsor of sponsors) {
			// Should be a valid URL format
			expect(sponsor.link).toMatch(/^https?:\/\//)
		}
	})

	it("should have non-empty names", () => {
		for (const sponsor of sponsors) {
			expect(sponsor.name.length).toBeGreaterThan(0)
		}
	})

	it("should have at least one sponsor", () => {
		expect(sponsors.length).toBeGreaterThan(0)
	})
})
