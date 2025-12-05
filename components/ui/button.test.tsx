import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Button } from "./button"

describe("Button Component", () => {
	it("renders children correctly", () => {
		render(<Button>Click me</Button>)
		expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument()
	})

	it("applies default variant", () => {
		render(<Button>Default</Button>)
		const button = screen.getByRole("button")
		expect(button).toBeInTheDocument()
	})

	it("applies different variants", () => {
		const { rerender } = render(<Button variant="destructive">Delete</Button>)
		let button = screen.getByRole("button")
		expect(button.className).toContain("destructive")

		rerender(<Button variant="outline">Outline</Button>)
		button = screen.getByRole("button")
		expect(button.className).toContain("outline")
	})

	it("applies different sizes", () => {
		const { rerender } = render(<Button size="sm">Small</Button>)
		let button = screen.getByRole("button")
		// Check for size-specific classes (h-8 px-3 for sm)
		expect(button.className).toMatch(/h-8|px-3/)

		rerender(<Button size="lg">Large</Button>)
		button = screen.getByRole("button")
		// Check for size-specific classes (h-10 for lg)
		expect(button.className).toMatch(/h-10|h-11/)
	})

	it("handles disabled state", () => {
		render(<Button disabled>Disabled</Button>)
		const button = screen.getByRole("button")
		expect(button).toBeDisabled()
	})

	it("accepts custom className", () => {
		render(<Button className="custom-class">Custom</Button>)
		const button = screen.getByRole("button")
		expect(button.className).toContain("custom-class")
	})

	it("renders as child component when asChild is true", () => {
		render(
			<Button asChild>
				<a href="/test">Link Button</a>
			</Button>
		)
		const link = screen.getByRole("link")
		expect(link).toBeInTheDocument()
		expect(link).toHaveAttribute("href", "/test")
	})
})
