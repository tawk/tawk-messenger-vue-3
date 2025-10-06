// Dependencies
import { describe, it, expect } from 'vitest';

// Utilities
import { isValidString, isValidId, isValidBasePath } from '../../src/utils/helper';

describe('Helper Security Tests', () => {
	describe('isValidString()', () => {
		it('Should validate string', () => {
			expect(isValidString('valid_string')).toBe(true);
			expect(isValidString('')).toBe(false);
			expect(isValidString(null)).toBe(false);
			expect(isValidString(undefined)).toBe(false);
			expect(isValidString(123)).toBe(false);
			expect(isValidString({})).toBe(false);
		});
	});
	
	describe('isValidId() - Security Tests', () => {
		it('Should accept valid IDs', () => {
			expect(isValidId('valid-id')).toBe(true);
			expect(isValidId('property_123')).toBe(true);
			expect(isValidId('widget.id')).toBe(true);
			expect(isValidId('abc123DEF')).toBe(true);
		});
		
		it('Should reject potentially dangerous IDs', () => {
			// XSS attempts
			expect(isValidId('<script>alert(1)</script>')).toBe(false);
			expect(isValidId('javascript:alert(1)')).toBe(false);
			expect(isValidId('onload="alert(1)"')).toBe(false);
			
			// Special characters that could be used for injection
			expect(isValidId('id with spaces')).toBe(false);
			expect(isValidId('id&amp;test')).toBe(false);
			expect(isValidId('id<test')).toBe(false);
			expect(isValidId('id>test')).toBe(false);
			expect(isValidId('id"test')).toBe(false);
			expect(isValidId("id'test")).toBe(false);
			expect(isValidId('id/test')).toBe(false);
			expect(isValidId('id\\test')).toBe(false);
			
			// Length limit test (over 100 chars)
			const longId = 'a'.repeat(101);
			expect(isValidId(longId)).toBe(false);
		});
		
		it('Should reject empty or invalid types', () => {
			expect(isValidId('')).toBe(false);
			expect(isValidId(null)).toBe(false);
			expect(isValidId(undefined)).toBe(false);
			expect(isValidId(123)).toBe(false);
		});
	});
	
	describe('isValidBasePath() - Security Tests', () => {
		it('Should accept valid tawk.to domains', () => {
			expect(isValidBasePath('tawk.to')).toBe(true);
			expect(isValidBasePath('embed.tawk.to')).toBe(true);
			expect(isValidBasePath('cdn.tawk.to')).toBe(true);
			expect(isValidBasePath('secure.tawk.to')).toBe(true);
		});
		
		it('Should reject malicious or non-tawk domains', () => {
			// Domain confusion attacks
			expect(isValidBasePath('evil.com')).toBe(false);
			expect(isValidBasePath('tawk.to.evil.com')).toBe(false);
			expect(isValidBasePath('tawkto.evil.com')).toBe(false);
			expect(isValidBasePath('fake-tawk.to.com')).toBe(false);
			
			// Protocol injection attempts
			expect(isValidBasePath('javascript://tawk.to')).toBe(false);
			expect(isValidBasePath('http://tawk.to')).toBe(false);
			expect(isValidBasePath('//tawk.to')).toBe(false);
			
			// XSS attempts through domain
			expect(isValidBasePath('tawk.to<script>alert(1)</script>')).toBe(false);
			
			// Empty or invalid inputs
			expect(isValidBasePath('')).toBe(false);
			expect(isValidBasePath(null)).toBe(false);
			expect(isValidBasePath(undefined)).toBe(false);
		});
	});
});