# Instagram Business & Creator Suite for n8n

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![n8n Community Node](https://img.shields.io/badge/n8n-Community%20Node-ea4b71.svg)](https://n8n.io)
[![Meta Graph API](https://img.shields.io/badge/Meta%20API-v26.0-0668E1.svg)](https://developers.facebook.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-3178C6.svg)](https://www.typescriptlang.org)

An enterprise-ready **n8n** integration that connects directly to the **Instagram Platform via Instagram Login** (powered by Meta Graph API `v26.0`).

Automate Instagram Professional (Business & Creator) accounts directly without requiring any connected Facebook Page.

---

## ⚡ Highlights & Capabilities

### 🔐 Modern Authorization Modes
- **Instagram Business OAuth 2.0**: Standard web-based authorization flow with custom scopes.
- **Direct Access Tokens**: Works with short-lived or 60-day permanent User Access Tokens.

### 👤 Account & Profile Management
- Fetch authenticated account data (`/me`) or look up other public accounts (followers, bio, website link, media count).
- Retrieve account-level analytical insights.

### 🚀 Content Publishing & Asset Automation
- **Single Photos**: Publish image posts directly to the feed.
- **Videos & Reels**: Publish short and long-form video content with automated asynchronous container status polling (`FINISHED`).
- **Carousel Albums**: Multi-slide posts combining photos and videos (2–10 items).
- **Stories**: Distribute photo or video Story updates.
- **Asset Control**: Look up metadata or delete posts.

### 💬 Community & Comment Moderation
- Retrieve incoming comments and conversation threads across media items.
- Post replies to comments or create top-level discussion points.
- Moderate conversations with hide, unhide, and delete actions.

### 📬 Direct Messaging Automation
- Send automated direct messages to users via their Instagram-Scoped ID (IGSID).
- Send rich multimedia attachments (photos, videos, audio clips, and files).
- Query conversation histories and active threads.

### 📈 Metrics & Analytics
- **Account Metrics**: Reach, profile views, account engagement, total interactions, follower growth, website clicks.
- **Media Metrics**: Plays, saves, shares, likes, comments, reach, and profile visits.
- **Query Modes**: Fetch all metrics or select specific data points.

### 🧠 Autonomous AI Agent Tooling
- Connects directly to n8n **AI Agent** nodes as a specialized tool sub-node.
- Allows AI agents to browse profiles, moderate comments, broadcast messages, publish posts, and pull analytical data on demand.

### 🌐 Direct Graph API Access
- Execute custom HTTP requests (GET, POST, DELETE) to any Meta Graph API `v26.0` endpoint with automated authentication.

---

## 🛠️ Step-by-Step Meta Developer Setup

To configure OAuth2 in n8n, obtain your credentials from the Meta App Dashboard:

### 1. Create a Meta Developer Application
1. Sign in to the [Meta for Developers Portal](https://developers.facebook.com/apps).
2. Click **Create App** and select **Business** or **Other**.

### 2. Enable Instagram Business Login
1. In the app dashboard, navigate to **Use Cases** or **Add Product**.
2. Select **Manage messaging & content on Instagram** (or **Instagram Platform** > **Instagram API with Instagram Login**).

### 3. Retrieve Credentials
1. In the left navigation menu, go to:
   **Instagram Platform** ➔ **API setup with Instagram login** ➔ **Set up Instagram business login** ➔ **Business login settings**.
2. Find the credentials:
   - **Instagram App ID**: Your **Client ID** for n8n.
   - **Instagram App Secret**: Click **Show** to view your **Client Secret**.

> [!IMPORTANT]
> Use the **Instagram App ID** found in the Instagram Platform settings. Do not use the generic Facebook App ID from the top header.

### 4. Set the Redirect URI
1. In n8n, create a new **Instagram OAuth2 API** credential.
2. Copy the **OAuth Callback URL** (e.g. `https://your-n8n-instance.com/rest/oauth2-credential/callback`).
3. In the Meta Dashboard under **Business login settings > Valid OAuth Redirect URIs**, paste the callback URI and save.

---

## 📋 OAuth Permissions & Scopes

| Scope | Description |
| :--- | :--- |
| `instagram_business_basic` | Read profile details and basic media feeds |
| `instagram_business_content_publish` | Publish photos, videos, reels, stories, and carousels |
| `instagram_business_manage_messages` | Read direct message threads and send outbound messages |
| `instagram_business_manage_comments` | Moderate, post, reply to, and delete comments |

---

## 💻 Installation

### Method A: Via n8n Community Nodes UI
1. Open your **n8n instance**.
2. Navigate to **Settings** ➔ **Community Nodes**.
3. Click **Install a community node**.
4. Enter the package name:
   ```text
   n8n-nodes-instagram-business
   ```
5. Accept the prompt and click **Install**.

### Method B: Local Development / Manual Build
```bash
# Clone the repository
git clone https://github.com/Emanyahyadev/n8n-nodes-instagram-business.git
cd n8n-nodes-instagram-business

# Install dependencies and build
npm install
npm run build

# Link globally for local testing
npm link
```

In your local n8n custom directory:
```bash
npm link n8n-nodes-instagram-business
```

---

## ⚙️ Credential Configurations

### 1. Instagram OAuth2 API (Recommended)
* **Client ID**: Your Instagram App ID from the Meta Dashboard.
* **Client Secret**: Your Instagram App Secret.
* **Scope**: `instagram_business_basic,instagram_business_content_publish,instagram_business_manage_messages,instagram_business_manage_comments`
* **API Version**: `v26.0`
* **Base URL**: `https://graph.instagram.com`

### 2. Instagram Access Token API
* **Access Token**: Short-lived or 60-day Long-Lived User Access Token.
* **API Version**: `v26.0`
* **Base URL**: `https://graph.instagram.com`

---

## 📁 Project Structure

```text
n8n-nodes-instagram-business/
├── credentials/
│   ├── InstagramApi.credentials.ts        # Access Token configuration
│   ├── InstagramOAuth2Api.credentials.ts  # OAuth2 flow configuration
│   └── instagram.svg                      # Credential icon
├── nodes/
│   └── Instagram/
│       ├── Instagram.node.ts              # Node definition and AI tool handler
│       ├── Instagram.node.json            # Node metadata
│       ├── GenericFunctions.ts            # Network helpers & polling logic
│       ├── instagram.svg                  # Node icon
│       ├── handlers/                      # Execution handlers
│       │   ├── UserHandler.ts             # Profile and user insights
│       │   ├── MediaHandler.ts            # Publishing and media management
│       │   ├── CommentHandler.ts          # Comment moderation
│       │   ├── MessageHandler.ts          # Direct messaging
│       │   ├── InsightHandler.ts          # Metrics and insights
│       │   ├── MentionHandler.ts          # Mentions and tags
│       │   └── CustomHandler.ts           # Custom Graph API queries
│       └── descriptions/                  # UI and property definitions
├── scripts/
│   └── build.js                           # Cross-platform build script
├── index.ts                               # Package entry point
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📜 License

Distributed under the [MIT License](LICENSE).
