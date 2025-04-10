# honcho-ai MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export HONCHO_API_KEY="My API Key"
npx -y honcho-ai-mcp
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "honcho_ai_api": {
      "command": "npx",
      "args": ["-y", "honcho-ai-mcp"],
      "env": {
        "HONCHO_API_KEY": "My API Key"
      }
    }
  }
}
```

## Filtering tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "honcho-ai-mcp/server";

// import a specific tool
import createApps from "honcho-ai-mcp/tools/apps/create-apps";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createApps, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `apps`:

- `create_apps` (`write`): Create a new App
- `update_apps` (`write`): Update an App
- `list_apps` (`write`): Get all Apps
- `get_apps` (`read`): Get an App by ID.

If app_id is provided as a query parameter, it uses that (must match JWT app_id).
Otherwise, it uses the app_id from the JWT token.

- `get_by_name_apps` (`read`): Get an App by Name
- `get_or_create_apps` (`read`): Get or Create an App

### Resource `apps.users`:

- `create_apps_users` (`write`): Create a new User
- `update_apps_users` (`write`): Update a User's name and/or metadata
- `list_apps_users` (`write`): Get All Users for an App
- `get_apps_users` (`read`): Get a User by ID

If user_id is provided as a query parameter, it uses that (must match JWT app_id).
Otherwise, it uses the user_id from the JWT token.

- `get_by_name_apps_users` (`read`): Get a User by name
- `get_or_create_apps_users` (`read`): Get a User or create a new one by the input name

### Resource `apps.users.metamessages`:

- `create_users_apps_metamessages` (`write`): Create a new metamessage associated with a user.
  Optionally link to a session and message by providing those IDs in the request body.
- `update_users_apps_metamessages` (`write`): Update a metamessage's metadata, type, or relationships
- `list_users_apps_metamessages` (`write`): Get metamessages with flexible filtering.

* Filter by user only: No additional parameters needed
* Filter by session: Provide session_id
* Filter by message: Provide message_id (and session_id)
* Filter by type: Provide metamessage_type
* Filter by metadata: Provide filter object

- `get_users_apps_metamessages` (`read`): Get a specific Metamessage by ID

### Resource `apps.users.sessions`:

- `create_users_apps_sessions` (`write`): Create a Session for a User
- `update_users_apps_sessions` (`write`): Update the metadata of a Session
- `list_users_apps_sessions` (`write`): Get All Sessions for a User
- `delete_users_apps_sessions` (`write`): Delete a session by marking it as inactive
- `chat_users_apps_sessions` (`write`): Chat with the Dialectic API
- `clone_users_apps_sessions` (`read`): Clone a session, optionally up to a specific message
- `get_users_apps_sessions` (`read`): Get a specific session for a user.

If session_id is provided as a query parameter, it uses that (must match JWT session_id).
Otherwise, it uses the session_id from the JWT token.

### Resource `apps.users.sessions.messages`:

- `create_sessions_users_apps_messages` (`write`): Adds a message to a session
- `update_sessions_users_apps_messages` (`write`): Update the metadata of a Message
- `list_sessions_users_apps_messages` (`write`): Get all messages for a session
- `batch_sessions_users_apps_messages` (`write`): Bulk create messages for a session while maintaining order. Maximum 100 messages per batch.
- `get_sessions_users_apps_messages` (`read`): Get a Message by ID

### Resource `apps.users.collections`:

- `create_users_apps_collections` (`write`): Create a new Collection
- `update_users_apps_collections` (`write`): Update a Collection's name or metadata
- `list_users_apps_collections` (`write`): Get All Collections for a User
- `delete_users_apps_collections` (`write`): Delete a Collection and its documents
- `get_users_apps_collections` (`read`): Get a specific collection for a user.

If collection_id is provided as a query parameter, it uses that (must match JWT collection_id).
Otherwise, it uses the collection_id from the JWT token.

- `get_by_name_users_apps_collections` (`read`): Get a Collection by Name

### Resource `apps.users.collections.documents`:

- `create_collections_users_apps_documents` (`write`): Embed text as a vector and create a Document
- `update_collections_users_apps_documents` (`write`): Update the content and/or the metadata of a Document
- `list_collections_users_apps_documents` (`write`): Get all of the Documents in a Collection
- `delete_collections_users_apps_documents` (`write`): Delete a Document by ID
- `get_collections_users_apps_documents` (`read`): Get a document by ID
- `query_collections_users_apps_documents` (`write`): Cosine Similarity Search for Documents

### Resource `keys`:

- `create_keys` (`write`): Create a new Key
