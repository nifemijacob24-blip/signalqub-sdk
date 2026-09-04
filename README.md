# SignalQub Node.js SDK

[![NPM Version](https://img.shields.io/npm/v/signalqub.svg)](https://www.npmjs.com/package/signalqub)
[![Website](https://img.shields.io/badge/Website-SignalQub.com-blue)](https://signalqub.com)

The official Node.js client for [SignalQub](https://signalqub.com). Extract public data from Reddit, Google Maps, YouTube, TikTok, and Facebook without logging in, managing proxies, or fighting CAPTCHAs. 

Get a free API key at [signalqub.com](https://signalqub.com).

## Installation

```bash
npm install signalqub

Quick Start
Initialize the client with your API key and start extracting clean JSON instantly.

const SignalQub = require('signalqub');

const client = new SignalQub({ 
  apiKey: 'YOUR_SIGNALQUB_API_KEY' 
});

async function run() {
  // Extract Facebook Marketplace Listings
  const listings = await client.facebookMarketplace.search({
    query: 'macbook pro',
    lat: '30.2677',
    lng: '-97.7475'
  });
  console.log(listings);

  // Scrape a TikTok Profile
  const profile = await client.tiktok.profile({ 
    handle: 'money' 
  });
  console.log(profile);
}

run();

Supported Platforms
This SDK fully supports 17+ platforms and over 78 specialized endpoints, including:

Facebook & Ad Library: Extract marketplace items, public groups, reels, and ad library transcripts.

TikTok & TikTok Shop: Pull deep storefront data, product reviews, collections, and live streams.

LinkedIn & Twitter (X): Scrape company posts, active ad campaigns, and community timelines.

Local Lead Generation: Aggregate reviews and business details from Google Maps and YellowPages.

For the complete list of parameters, pagination structures, and response schemas, visit the [SignalQub_Documentation](https://signalqub.com/docs).

