/**
 * API Service for Consultation Requests
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.vego.sa/api';

export interface ConsultationRequest {
  fullname: string;
  email: string;
  consultation_type: string;
  request_details: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

/**
 * Submit a consultation request to the backend
 */
export async function submitConsultationRequest(
  data: ConsultationRequest
): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/consultation-requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit consultation request');
    }

    return {
      success: true,
      data: result,
      message: result.message || 'Consultation request submitted successfully',
    };
  } catch (error) {
    console.error('API Error:', error);
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate consultation request data
 */
export function validateConsultationRequest(
  data: Partial<ConsultationRequest>
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.fullname || data.fullname.trim().length < 2) {
    errors.push('Full name must be at least 2 characters');
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Please provide a valid email address');
  }

  if (!data.consultation_type) {
    errors.push('Please select a consultation type');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
