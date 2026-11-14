# Payzani Platform Architecture & Storefront

Payzani is a next-generation Nigerian VTU & White-Label Telecom Agent platform designed with an Apple/Google minimalist aesthetic.

## File Navigation
- Main Application: [index.html](file:///c:/Users/HP/Desktop/Folder/payzani/index.html)
- Local Server Runner: [server.py](file:///c:/Users/HP/Desktop/Folder/payzani/server.py)

## Key Features Implemented
1. **Payzani Direct VTU Engine**:
   - Airtime recharge (MTN, Airtel, Glo, 9mobile).
   - High-speed SME & Gifting mobile data.
   - Cable TV (DSTV, GOtv, Startimes) and Electricity Disco token generation.
   - Live wallet balance deduction and simulated instant top-up.

2. **White-Label Agent Storefront**:
   - Dedicated agent URL (e.g., `payzani.com/@apex-telecom`).
   - Dynamic custom brand name, logo emblem, and live CSS color theme swatches.
   - Full customer ordering portal branded under the agent's identity.

3. **Agent Dashboard & Paystack Split Engine**:
   - Real-time token quota balance tracking.
   - Token purchase packages (₦5,000, ₦10,000, ₦25,000, ₦50,000).
   - Dynamic fee calculation (e.g., ₦5,000 billed via Paystack, ₦200 retained by Payzani, ₦4,800 credited in service tokens).
   - Simulated Paystack checkout modal with instant authorization.

4. **Master Admin Console**:
   - Platform-wide retained profit metrics.
   - Dynamic controls for the Agent Onboarding Fee and Platform Margin per token pack.
