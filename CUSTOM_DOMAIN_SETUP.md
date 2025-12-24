# Custom Domain Setup for SmartGuide Website

This guide explains how to connect a custom domain (e.g., `smartguide.com.tr`) to the Azure Static Web App.

## Current Setup

| Item | Value |
|------|-------|
| Azure Static Web App | `smartguide-website` |
| Default URL | https://ashy-coast-025020710.2.azurestaticapps.net |

## Prerequisites

- Access to Azure Portal (portal.azure.com)
- Access to your domain's DNS settings (usually through your domain registrar)

## Step 1: Open Custom Domains in Azure Portal

1. Go to [portal.azure.com](https://portal.azure.com)
2. Search for **"Static Web Apps"** in the top search bar
3. Click on **smartguide-website**
4. In the left menu, click **"Custom domains"**

## Step 2: Add Your Custom Domain

1. Click **"+ Add"** button
2. Enter your domain name (e.g., `smartguide.com.tr` or `www.smartguide.com.tr`)
3. Click **"Next"**

## Step 3: Configure DNS Records

Azure will show you the DNS records you need to add. There are two options:

### Option A: Root Domain (e.g., smartguide.com.tr)

Add these records at your domain registrar:

| Type | Name | Value |
|------|------|-------|
| **A** | `@` | Azure's IP address (shown in portal) |
| **TXT** | `@` | Verification code (shown in portal) |

### Option B: Subdomain (e.g., www.smartguide.com.tr)

Add this record at your domain registrar:

| Type | Name | Value |
|------|------|-------|
| **CNAME** | `www` | `ashy-coast-025020710.2.azurestaticapps.net` |

## Step 4: Verify and Complete

1. After adding DNS records, go back to Azure Portal
2. Click **"Add"** to complete the domain setup
3. Wait for DNS propagation (can take up to 24-48 hours, usually faster)
4. Azure will automatically provision a free SSL certificate

## Step 5: Set Up Both Root and WWW (Recommended)

For the best user experience, set up both:
- `smartguide.com.tr` (root domain)
- `www.smartguide.com.tr` (www subdomain)

Repeat Steps 2-4 for each domain.

## Common Domain Registrars - DNS Settings Location

| Registrar | Where to find DNS settings |
|-----------|---------------------------|
| GoDaddy | My Products → Domain → DNS |
| Namecheap | Domain List → Manage → Advanced DNS |
| Google Domains | My domains → DNS |
| Cloudflare | Select domain → DNS |
| Natro (Turkey) | Domain Yönetimi → DNS Ayarları |
| İsimtescil (Turkey) | Alan Adı Yönetimi → DNS Yönetimi |

## Troubleshooting

### Domain not working after 24 hours?
- Double-check the DNS records are entered exactly as shown in Azure
- Use [dnschecker.org](https://dnschecker.org) to verify DNS propagation
- Make sure there are no conflicting DNS records

### SSL Certificate not showing?
- Azure automatically provisions SSL, but it can take up to 24 hours
- Clear your browser cache and try again

### "Domain already in use" error?
- The domain might be connected to another Azure resource
- Remove it from the other resource first

## Need Help?

Contact your domain registrar's support for help with DNS settings, or refer to Azure's documentation:
https://docs.microsoft.com/en-us/azure/static-web-apps/custom-domain
