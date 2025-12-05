import { describe, expect, it } from "vitest"

import { cn } from "./utils"

describe("cn utility function", () => {
	it("should merge class names", () => {
		expect(cn("class1", "class2")).toBe("class1 class2")
	})

	it("should handle conditional classes", () => {
		expect(cn("base", true && "conditional")).toBe("base conditional")
		expect(cn("base", false && "conditional")).toBe("base")
	})

	it("should merge Tailwind classes and resolve conflicts", () => {
		// Later class should override earlier class
		expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4")
	})

	it("should handle arrays of classes", () => {
		expect(cn(["class1", "class2"])).toBe("class1 class2")
	})

	it("should handle undefined and null values", () => {
		expect(cn("base", undefined, null, "end")).toBe("base end")
	})

	it("should handle complex conditional logic", () => {
		const isActive = true
		const isDisabled = false

		expect(
			cn("base", isActive && "active", isDisabled && "disabled", !isDisabled && "enabled")
		).toBe("base active enabled")
	})

	it("should work with no arguments", () => {
		expect(cn()).toBe("")
	})

	it("should handle objects with boolean values", () => {
		expect(
			cn({
				base: true,
				active: true,
				disabled: false,
			})
		).toBe("base active")
	})
})
