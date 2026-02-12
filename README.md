# MPRV STUDIO

Curated minimalist product discovery site. Fewer, better purchases.

## Overview

MPRV STUDIO is a curated product discovery platform designed to eliminate decision fatigue through strict curation limits and weekly rotation. Built according to a comprehensive PRD focusing on minimal design, transparent affiliate disclosure, and multiple revenue streams.

## Key Features

### Product Curation (Cognitive Load Control)
- **Weekly Shortlist**: 12-18 carefully selected items, updated every Monday
- **Essentials**: Maximum 108 items (12 per category × 9 categories)
- **Curated Packs**: Up to 36 complete product bundles
- **9 Categories**: Grooming, Tech, Fitness, Food, Home Décor, Apps, Phone Cases, Clothes, Watches

### Design Philosophy
- **Navy & White Theme**: Professional, minimalist aesthetic (#081630 / #FDFEFE)
- **Typography**: Modern grotesk font stack (Inter, Helvetica Neue)
- **Spacing System**: 4, 8, 12, 16, 24, 32, 48, 72px tokens
- **Border Radius**: 4px (small), 12px (cards), 999px (pills)

### Revenue Streams (Target: $20k/month in 90 days)
1. **Affiliate Commissions**: Click-out links via Geniuslink
2. **Sponsorships**: 1 labeled spot per week
3. **Club Membership**: $20/month for exclusive access
4. **Concierge Service**: $99-$499 procurement tiers

## File Structure

```
mprv-studio/
├── index.html          # Main homepage
├── styles.css          # Complete styling system
├── app.js              # Product data & rendering
├── analytics.js        # PostHog tracking integration
├── club.html          # Membership page (to be added)
├── concierge.html     # Procurement service (to be added)
├── legal.html         # Affiliate disclosure (to be added)
└── README.md          # This file
```

## Tech Stack

- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript
- **Hosting**: Recommended: Vercel (easy deployment)
- **CMS**: Sanity (for product management)
- **Analytics**: PostHog (event tracking)
- **Affiliate Links**: Geniuslink (localization & deep linking)
- **Newsletter**: beehiiv (list management)
- **Payments**: Stripe (Club subscriptions)
- **Community**: Discord + LaunchPass (gated access)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/hamdijawher-workspace/mprv-studio.git
cd mprv-studio
```

### 2. Configure Analytics
Edit `analytics.js` and replace `YOUR_PROJECT_KEY` with your PostHog project key:
```javascript
posthog.init('YOUR_PROJECT_KEY', {
    api_host: 'https://app.posthog.com'
});
```

### 3. Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### 4. Add Product Data
Edit the `sampleProducts` array in `app.js` with real products:
```javascript
{
    id: 1,
    name: "Product Name",
    price: 99,
    category: "category-slug",
    badge: "Weekly" | "Essential" | "Pack",
    image: "image-url",
    affiliateLink: "geniuslink-url"
}
```

### 5. Set Up Affiliate Links
- Sign up for Amazon Associates, Impact, ShareASale
- Create Geniuslink account for link management
- Replace `#` placeholders with actual affiliate URLs

## Analytics Events Tracked

As per PRD requirements, the following events are tracked:

- `pageview` - Page visits
- `product_impression` - Product card views
- `product_card_click` - Clicks on product cards
- `product_view` - Product detail page views
- `outbound_click` - Affiliate link clicks
- `newsletter_signup` - Email captures
- `club_checkout_start` - Membership flow initiation
- `club_subscribe_success` - Successful subscriptions

## Content Constraints (Critical)

These limits are enforced to reduce cognitive load:

| Content Type | Maximum | Purpose |
|--------------|---------|----------|
| Weekly Items | 12-18 | Focus attention |
| Essentials per Category | 12 | Quality over quantity |
| Total Essentials | 108 | Manageable catalog |
| Total Packs | 36 | Curated bundles |

## Affiliate Disclosure Requirements

As per FTC guidelines and Amazon Associates Operating Agreement:

1. **Sitewide Disclaimer**: Footer includes Amazon Associate statement
2. **Legal Page**: Dedicated `/legal.html` with full disclosure
3. **Clear Language**: "As an Amazon Associate, MPRV STUDIO earns from qualifying purchases"
4. **No Fulfillment**: Site does not sell or ship products directly

## Brand Voice & Copywriting

- **Value Proposition**: "Fewer, better purchases—picked for you weekly"
- **Tone**: Direct, helpful, anti-consumerist
- **Inspired by**: curated.supply's editorial stance
- **Key Message**: The world doesn't need more stuff, it needs better stuff

## Roadmap

### Phase 1 (Weeks 1-4): Foundation
- [x] Repository setup
- [x] Core HTML/CSS/JS
- [x] Analytics integration
- [ ] Add Club page
- [ ] Add Concierge page
- [ ] Add Legal/Disclosure page
- [ ] Newsletter integration

### Phase 2 (Weeks 5-8): Content & Launch
- [ ] 108 Essentials catalog
- [ ] First 3-6 Packs
- [ ] Weekly rotation system
- [ ] Social media setup (Instagram, X)
- [ ] 300+ waitlist signups

### Phase 3 (Weeks 9-12): Monetization
- [ ] Launch Club membership
- [ ] First sponsor deal
- [ ] Concierge pilot (3 clients)
- [ ] Optimize conversion funnels
- [ ] Target: $8-20k/month run-rate

## Contributing

This is a founder-led project. For inquiries: [contact info]

## License

All rights reserved © 2026 MPRV STUDIO

## Acknowledgments

Design inspiration from:
- [curated.supply](https://www.curated.supply) - Curation model
- [minimalgoods.co](https://www.minimalgoods.co) - Aesthetic & affiliate approach
- [Uncrate](https://uncrate.com) - Scale & audience targeting

---

**Built with focus. Curated with care. For people who value their attention.**
