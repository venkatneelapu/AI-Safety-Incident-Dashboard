import { Incident } from '../types';

export const mockIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in job recommendations, creating an unbalanced candidate pool for tech positions. Investigation found training data had significant underrepresentation of minority groups.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "Large Language Model provided incorrect safety procedure information when asked about emergency protocols in a manufacturing setting. Could have led to physical harm if followed. System has been temporarily disabled pending review.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata in responses. No PII or critical data was compromised, but the issue reveals a potential vulnerability in information filtering mechanisms.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  },
  {
    id: 4,
    title: "Harmful Content Generation",
    description: "AI text-to-image system generated inappropriate imagery despite content filters. Initial investigation shows certain word combinations were bypassing safety protocols. Additional filter layers being implemented.",
    severity: "High",
    reported_at: "2025-03-25T16:45:00Z"
  },
  {
    id: 5,
    title: "Authentication Bypass Detection",
    description: "Monitoring systems detected attempts to use AI-generated voice to bypass voice authentication systems. No successful breaches occurred, but security team is enhancing voice verification with additional factors.",
    severity: "Medium",
    reported_at: "2025-03-10T11:20:00Z"
  }
];