# Test Plan: VWO Login — Email and Password

## 1. Test Plan ID and Title

| Field | Value |
|---|---|
| Test Plan ID | TP-VWO-LOGIN-001 (locally assigned) |
| Title | VWO Login — Email and Password Test Plan |
| Status | Draft for product and QA review |
| Version | 1.0 |
| Application | VWO / Wingify login |
| Feature | Email-and-password sign-in |
| Target URL | https://app.vwo.com/#/login |

## 2. Objective and References

### Objective

Define a reproducible, risk-based test approach for positive and negative email-and-password sign-in scenarios on the VWO login page. The plan covers validation, authentication outcomes, and protection against unauthenticated access. It is a plan only; no test cases have been executed and no application behavior beyond the observations below is claimed as verified.

### References and evidence

- Target login page: https://app.vwo.com/#/login
- Public page inspection performed on 2026-10-07. The page displayed email address and password inputs and a Sign in button. It also displayed Forgot Password, Remember me, Google, SSO, and passkey options; those alternate controls are outside this plan's scope.
- No product requirements, acceptance criteria, approved test credentials, environment specification, or expected error-message text were supplied.

## 3. In Scope and Out of Scope

### In scope

- Positive sign-in with valid credentials for an active, approved test account.
- Negative sign-in attempts using synthetic inputs, including invalid credentials and invalid or missing field values.
- Observable authentication outcome and confirmation that denied attempts do not establish an authenticated session.
- Relevant regression checks for the email/password sign-in flow after changes to that flow.

### Out of scope

- Forgot Password workflow.
- Remember me behavior or persistence across browser restarts.
- Google sign-in, SSO, and passkey sign-in.
- Registration/free-trial flows and legal links.
- MFA behavior, account recovery, account lifecycle administration, and identity-provider testing.
- Performance, load, penetration, and exhaustive security testing.
- Testing with random real-looking identities against production. Negative values must be synthetic and used only in an approved test environment.

## 4. Requirements and Planned Coverage

No formal requirement IDs were provided. The following IDs are assigned locally for traceability; requirement statements and expected outcomes are proposed and require product confirmation.

| Local ID | Proposed requirement / acceptance expectation | Planned coverage | Status / dependency |
|---|---|---|---|
| VWO-LOGIN-01 | An active user can sign in with valid email and password and reach an authenticated state. | Valid credentials; verify a product-approved authenticated-state indicator or destination. | In scope; blocked until an approved active test account and expected authenticated state are provided. |
| VWO-LOGIN-02 | Invalid credentials do not authenticate the user, and the response does not disclose whether an account exists. | Incorrect password; unknown synthetic email; verify no authenticated state and confirm approved generic response behavior. | Proposed; exact response and account-enumeration policy need confirmation. |
| VWO-LOGIN-03 | Required email and password values are validated without creating an authenticated session. | Both fields empty; email only; password only; whitespace-only values. | Proposed; field-level validation and submission behavior need confirmation. |
| VWO-LOGIN-04 | Email input must meet the product's accepted format and boundary rules before authentication is attempted. | Malformed email values and agreed length/character boundaries. | Proposed; permitted formats, length limits, and validation timing are not provided. |
| VWO-LOGIN-05 | Authentication denial remains effective for unusual input and repeated failed attempts. | Synthetic special-character/SQL-like strings as ordinary negative inputs; assess documented rate limiting or lockout only if specified. | Limited negative functional coverage only; not a penetration test. Rate-limit and lockout policy are not provided. |
| VWO-LOGIN-06 | Successful authentication grants access only to authorized content, while denied sign-in does not. | Verify access state after success and absence of authenticated state after denial; direct protected-route checks only if an approved route is identified. | Proposed; protected route and authorization expectations need confirmation. |

## 5. Test Approach, Levels, and Types

### Approach

1. Review and confirm requirements, account prerequisites, expected messages, and the authenticated-state oracle.
2. Prepare an approved, isolated test environment and synthetic negative inputs.
3. Run positive and negative email/password checks manually or with the team's approved UI test tooling. Tooling has not been selected.
4. Record actual outcomes and evidence without inferring success from a click or page load alone.
5. Re-run impacted sign-in checks after relevant fixes and include the agreed regression subset.

### Test levels and types

- **System/UI functional testing:** Primary level for form validation and sign-in outcomes.
- **Integration testing:** Include only where the approved environment and test account permit checking the login-to-authentication service interaction; internal service details are not provided.
- **Regression testing:** Re-run agreed email/password scenarios after changes to login, validation, or session handling.
- **Compatibility checks:** Browser/device coverage is not provided and must be agreed before execution.
- **Nonfunctional testing:** Not currently planned. Accessibility, performance, and security assessments require separate scope, acceptance criteria, and suitable tools.

### Scenario design

The detailed case set should include:

- Active account with correct credentials.
- Active account with incorrect password.
- Synthetic unknown email with a plausible-format value.
- Empty email and password; email-only and password-only submissions.
- Malformed email values, including missing/extra separators and whitespace, subject to confirmed format rules.
- Leading/trailing whitespace and agreed input-length boundaries.
- Special characters and SQL-like text as data to confirm ordinary denial behavior, not as proof of security.
- Repeated failed attempts only after expected throttling/lockout policy is supplied.

Do not use random usernames as substitutes for valid credentials. Random or synthetic identities are suitable only for negative scenarios in an authorized test environment; a positive case requires a provisioned account.

## 6. Environment, Tools, Access, and Test Data

| Item | Current information / requirement |
|---|---|
| URL | https://app.vwo.com/#/login |
| Environment | Not provided. Confirm that the target is an approved test environment before submitting any credentials or test data. |
| Browsers/devices/OS | Not provided; QA and product must agree on supported targets and versions. |
| Test tooling | Not provided. Manual execution is possible; automation framework and versions require agreement. |
| Access | Not provided. Tester access and any network/VPN requirements must be confirmed. |
| Positive test account | Not available. Provision an approved active account with known credentials and agreed cleanup/ownership before running the positive scenario. |
| Negative test data | Synthetic values only; do not use real people's email addresses or passwords. |
| Secrets handling | Do not put credentials in this plan, test reports, screenshots, source control, or logs. Use the approved secret-management mechanism. |
| Test data reset | Not provided. Confirm whether failed attempts affect lockout, counters, or account state and how those are reset. |

## 7. Entry and Exit Criteria

All thresholds below are proposals for approval, not supplied product commitments.

### Entry criteria

- Scope, locally assigned requirements, expected validation behavior, and response expectations are reviewed and approved.
- An approved test environment and supported browser/device matrix are identified.
- An active test account is provisioned for successful-login testing; credentials are delivered through an approved secure channel.
- The expected authenticated-state indicator and any protected route used for verification are identified.
- Test data, reset procedures, and account lockout/rate-limit policies are known, or affected checks are explicitly deferred.
- Test execution and defect-reporting tools are available to the assigned QA owner.

### Exit criteria

Proposed; approve or replace before execution:

- 100% of approved in-scope test cases have a recorded execution status and reproducible result.
- All planned high-risk positive and negative scenarios are executed, or each exception is documented with an owner and rationale.
- No open Critical or High severity defects remain for the in-scope login flow, unless an authorized product owner accepts them in writing.
- All remaining defects, deferred checks, environment limitations, and requirement gaps are documented.
- QA summary and evidence are reviewed by the designated approver.

Passing these proposed criteria does not establish complete security, accessibility, or production readiness.

## 8. Roles, Responsibilities, Estimates, and Schedule

| Role | Responsibility | Owner / estimate |
|---|---|---|
| Product owner / requirements owner | Confirm intended behavior, acceptance criteria, supported email rules, error messaging, and lockout policy. | Not provided |
| QA engineer / test lead | Finalize test cases, prepare synthetic data, execute checks, report defects, and summarize results. | Not provided |
| Development / authentication team | Support environment and account setup, investigate defects, and identify safe reset procedures. | Not provided |
| Environment / access owner | Provide approved environment, browser access, and required network permissions. | Not provided |

Schedule, staffing, and effort estimates are not provided. Estimate only after the environment, requirements, account access, browser matrix, and tooling are confirmed.

## 9. Defect Management and Reporting

- Record defects in the team's approved issue tracker; the tracker and required fields are not provided.
- Each report should include a concise title, environment/browser, preconditions, synthetic test data, reproducible steps, expected result, actual result, evidence with secrets removed, and reproduction frequency.
- Link defects to the relevant local ID above until product requirement IDs are supplied.
- Severity and priority must follow the team's defined convention. Do not present proposed classifications as confirmed.
- Triage owner, triage cadence, escalation path, and status-reporting cadence are not provided and require agreement.
- Report test progress, passed/failed/blocked/not-run counts, open defects, and known coverage gaps. Do not report unexecuted checks as passed.

## 10. Risks, Dependencies, Assumptions, and Open Questions

### Risks and dependencies

- No valid account is available, so successful-login verification cannot be completed until one is provisioned.
- Unconfirmed validation rules or error behavior could cause false failures or allow incorrect expected results.
- Testing against production or using real identities without authorization could affect real accounts; use an approved test environment and synthetic negative data.
- Unknown lockout or rate-limit behavior could disable an account during repeated negative checks.
- Unknown supported browsers, test tooling, and environment access may delay or limit coverage.

### Assumptions

- Email/password sign-in is the sole feature under test for this plan.
- Positive sign-in remains in scope but is dependent on an approved active test account.
- Proposed requirements and acceptance expectations are placeholders for review, not verified product behavior.
- The visible login controls were observed on the public page; their backend behavior was not tested.

### Open questions

1. What are the product-approved success indicator and destination after sign-in?
2. What exact validation rules apply to email and password, including whitespace and length boundaries?
3. What response should be shown for unknown email and incorrect password, and should those responses be indistinguishable?
4. What are the failed-attempt rate-limit, lockout, and account-reset rules?
5. Which environment, browsers/devices, and versions are supported for QA?
6. Who will provision the active test account and provide credentials securely?
7. Which defect tracker, severity/priority convention, owners, schedule, and reporting cadence should be used?
8. Should accessibility or other nonfunctional checks be planned separately?

## 11. Suspension and Resumption Criteria

### Suspend testing when

- The target environment is unavailable or is not confirmed as approved for testing.
- The account or authentication service is unstable, or failures prevent reliable result interpretation.
- A test risks affecting a real user/account or triggering an unknown lockout policy.
- A Critical/High impact defect makes further execution unsafe or invalidates the remaining checks.
- Required behavior, test data, or access is missing such that continuing would rely on unapproved assumptions.

### Resume testing when

- The environment and account state are restored and confirmed.
- The defect or blocking issue is fixed, mitigated, or explicitly accepted for continued testing.
- Test data is reset as needed and affected tests are reviewed for rerun.
- Any changed acceptance criteria or assumptions are documented and approved.

Suspension authority and notification path are not provided; assign these before execution.

## 12. Test Deliverables and Approval

### Deliverables

- This test plan.
- Approved, traceable email/password test cases.
- Execution results and evidence for executed cases, with secrets removed.
- Defect records and a test summary identifying passed, failed, blocked, and not-run checks.

### Approval

| Approver | Name | Approval / date |
|---|---|---|
| Product / requirements owner | Not provided | Pending |
| QA lead | Not provided | Pending |
| Development / authentication representative | Not provided | Pending |

Approval of this plan confirms agreement on its scope and proposed approach; it does not assert that tests have been executed or that the application has passed them.
