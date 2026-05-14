# Security Spec - Contact Submissions

## Data Invariants
- A contact submission must have a full name, phone number, email, and service type.
- `createdAt` must be the current server time.
- The `service` field must be one of the pre-defined options.
- Document IDs must be valid.
- Public users can only create documents, never read or modify them.

## The Dirty Dozen Payloads (Target: /contacts/{id})

1. **Identity Spoofing**: `{"fullName": "Attacker", "phoneNumber": "123", "email": "a@b.com", "service": "Free Roof Inspection", "createdAt": "2020-01-01T00:00:00Z"}` - Attempting to set an old `createdAt`.
2. **Ghost Field**: `{"fullName": "John", "phoneNumber": "123", "email": "a@b.com", "service": "Free Roof Inspection", "createdAt": "request.time", "isAdmin": true}` - Attempting to inject a field.
3. **Invalid Type**: `{"fullName": 123, "phoneNumber": "123", "email": "a@b.com", "service": "Free Roof Inspection", "createdAt": "request.time"}` - Name as number.
4. **Massive Payload**: `{"fullName": "A".repeat(1000000), ...}` - Resource exhaustion.
5. **Unauthorized Read**: `get /contacts/some-id` - Attempting to read a submission.
6. **Unauthorized List**: `list /contacts` - Attempting to scrape all submissions.
7. **Unauthorized Update**: `patch /contacts/some-id {"fullName": "Changed"}` - Attempting to modify status/info.
8. **Unauthorized Delete**: `delete /contacts/some-id` - Attempting to delete records.
9. **Invalid Enum**: `{"fullName": "John", "phoneNumber": "123", "email": "a@b.com", "service": "Malicious Service", "createdAt": "request.time"}` - Service not in list.
10. **Missing Required**: `{"fullName": "John", "phoneNumber": "123", "email": "a@b.com", "createdAt": "request.time"}` - Missing service.
11. **Id Poisoning**: `create /contacts/VERY-LONG-ID-..................` - Document ID too long.
12. **Wrong Identity**: `{"fullName": "John", "phoneNumber": "123", "email": "a@b.com", "service": "Free Roof Inspection", "createdAt": "request.time", "ownerId": "somebody-else"}` - Setting owner fields if they existed.

## Test Runner (firestore.rules.test.ts)
(Planned to be implemented if environment supports vitest/firebase-testing)
