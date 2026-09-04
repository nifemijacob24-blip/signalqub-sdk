# SignalQub Node.js SDK

[![NPM Version](https://img.shields.io/npm/v/signalqub.svg)](https://www.npmjs.com/package/signalqub)
[![Website](https://img.shields.io/badge/Website-SignalQub.com-blue)](https://signalqub.com)

The official Node.js client for [SignalQub](https://signalqub.com). Extract public data from Reddit, Google Maps, YouTube, TikTok, and Facebook without logging in, managing proxies, or fighting CAPTCHAs. 

Get a free API key at [signalqub.com](https://signalqub.com).

## Installation

```bash
npm install signalqub
```

---

## Quick Start

Initialize the client with your SignalQub API key:

```javascript
const SignalQub = require('signalqub');

const client = new SignalQub({ 
  apiKey: 'YOUR_SIGNALQUB_API_KEY' 
});

async function main() {
  try {
    // 1. Search Facebook Marketplace
    const items = await client.facebookMarketplace.search({
      query: 'macbook pro',
      lat: 30.2677,
      lng: -97.7475
    });
    console.log('Marketplace Results:', items);

    // 2. Fetch TikTok User Profile
    const profile = await client.tiktok.profile({ 
      handle: 'money' 
    });
    console.log('TikTok Profile:', profile);

    // 3. Search Google Maps Local Businesses
    const places = await client.gmaps.search({
      query: 'plumbers in Los Angeles, CA'
    });
    console.log('Google Maps Places:', places);
  } catch (error) {
    console.error('SignalQub Error:', error.message);
  }
}

main();

```

---

## Supported Platforms & Namespaces

The SDK exposes dedicated client namespaces for all 17 supported platforms:

| Namespace | Platform | Primary Methods |
| --- | --- | --- |
| `client.amazon` | Amazon | `search()`, `storefront()`, `product()` |
| `client.facebook` | Facebook | `profile()`, `profileReels()`, `profilePhotos()`, `profilePosts()`, `profileEvents()`, `postTranscript()`, `post()`, `postComments()`, `group()`, `groupPosts()` |
| `client.facebookMarketplace` | Facebook Marketplace | `locationSearch()`, `search()`, `item()` |
| `client.facebookAdLibrary` | Meta Ad Library | `ad()`, `adTranscript()`, `searchAds()`, `companyAds()` |
| `client.gmaps` | Google Maps | `search()`, `reviews()` |
| `client.google` | Google Search | `search()` |
| `client.instagram` | Instagram | `profile()`, `userPosts()`, `post()`, `userHighlights()`, `transcript()`, `search()`, `userTaggedPosts()`, `postComments()` |
| `client.linkedin` | LinkedIn | `profile()`, `company()`, `companyPosts()`, `searchPosts()`, `post()` |
| `client.linkedinAds` | LinkedIn Ads | `search()` |
| `client.reddit` | Reddit | `subredditDetails()`, `subredditPosts()`, `subredditSearch()`, `postComments()`, `search()` |
| `client.tiktok` | TikTok | `profile()`, `profileRegion()`, `collectionVideos()`, `profileVideos()`, `video()`, `videoTranscript()`, `userLive()`, `videoComments()`, `userFollowing()`, `userFollowers()`, `searchUsers()`, `searchKeyword()` |
| `client.tiktokShop` | TikTok Shop | `search()`, `products()`, `product()`, `productReviews()` |
| `client.trustpilot` | Trustpilot | `search()`, `reviews()` |
| `client.twitter` | Twitter / X | `profile()`, `profileTweets()`, `tweet()`, `transcript()`, `community()`, `communityTweets()` |
| `client.yellowpages` | YellowPages | `search()` |
| `client.youtube` | YouTube | `channel()`, `channelVideos()`, `channelPlaylists()`, `channelCommunityPosts()`, `channelShorts()`, `channelLives()`, `video()`, `transcript()`, `search()`, `videoComments()` |
| `client.zillow` | Zillow | `search()`, `item()` |

---

## Universal Raw Method

For dynamic route calls or newly deployed endpoints, use the built-in raw GET requester:

```javascript
const response = await client.api.get('/custom/endpoint/path', {
  paramKey: 'value'
});

```

---

## Documentation & Support

Full API parameter schemas, rate limits, response types, and webhooks are detailed in the official [SignalQub Documentation](https://signalqub.com/docs).

## License

MIT

```

To update your live NPM listing with this clean layout:
1. Increment `"version": "1.0.1"` in your `package.json`.
2. Overwrite your local `README.md` with the snippet above.
3. Run `npm publish --access public` in PowerShell.

```