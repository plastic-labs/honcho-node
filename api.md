# Apps

Types:

- <code><a href="./src/resources/apps/apps.ts">App</a></code>
- <code><a href="./src/resources/apps/apps.ts">PageApp</a></code>

Methods:

- <code title="post /v1/apps">client.apps.<a href="./src/resources/apps/apps.ts">create</a>({ ...params }) -> App</code>
- <code title="put /v1/apps/{app_id}">client.apps.<a href="./src/resources/apps/apps.ts">update</a>(appId, { ...params }) -> App</code>
- <code title="post /v1/apps/list">client.apps.<a href="./src/resources/apps/apps.ts">list</a>({ ...params }) -> AppsPage</code>
- <code title="get /v1/apps">client.apps.<a href="./src/resources/apps/apps.ts">get</a>({ ...params }) -> App</code>
- <code title="get /v1/apps/name/{name}">client.apps.<a href="./src/resources/apps/apps.ts">getByName</a>(name) -> App</code>
- <code title="get /v1/apps/get_or_create/{name}">client.apps.<a href="./src/resources/apps/apps.ts">getOrCreate</a>(name) -> App</code>

## Users

Types:

- <code><a href="./src/resources/apps/users/users.ts">PageUser</a></code>
- <code><a href="./src/resources/apps/users/users.ts">User</a></code>

Methods:

- <code title="post /v1/apps/{app_id}/users">client.apps.users.<a href="./src/resources/apps/users/users.ts">create</a>(appId, { ...params }) -> User</code>
- <code title="put /v1/apps/{app_id}/users/{user_id}">client.apps.users.<a href="./src/resources/apps/users/users.ts">update</a>(appId, userId, { ...params }) -> User</code>
- <code title="post /v1/apps/{app_id}/users/list">client.apps.users.<a href="./src/resources/apps/users/users.ts">list</a>(appId, { ...params }) -> UsersPage</code>
- <code title="get /v1/apps/{app_id}/users">client.apps.users.<a href="./src/resources/apps/users/users.ts">get</a>(appId, { ...params }) -> User</code>
- <code title="get /v1/apps/{app_id}/users/name/{name}">client.apps.users.<a href="./src/resources/apps/users/users.ts">getByName</a>(appId, name) -> User</code>
- <code title="get /v1/apps/{app_id}/users/get_or_create/{name}">client.apps.users.<a href="./src/resources/apps/users/users.ts">getOrCreate</a>(appId, name) -> User</code>

### Metamessages

Types:

- <code><a href="./src/resources/apps/users/metamessages.ts">Metamessage</a></code>
- <code><a href="./src/resources/apps/users/metamessages.ts">PageMetamessage</a></code>

Methods:

- <code title="post /v1/apps/{app_id}/users/{user_id}/metamessages">client.apps.users.metamessages.<a href="./src/resources/apps/users/metamessages.ts">create</a>(appId, userId, { ...params }) -> Metamessage</code>
- <code title="put /v1/apps/{app_id}/users/{user_id}/metamessages/{metamessage_id}">client.apps.users.metamessages.<a href="./src/resources/apps/users/metamessages.ts">update</a>(appId, userId, metamessageId, { ...params }) -> Metamessage</code>
- <code title="post /v1/apps/{app_id}/users/{user_id}/metamessages/list">client.apps.users.metamessages.<a href="./src/resources/apps/users/metamessages.ts">list</a>(appId, userId, { ...params }) -> MetamessagesPage</code>
- <code title="get /v1/apps/{app_id}/users/{user_id}/metamessages/{metamessage_id}">client.apps.users.metamessages.<a href="./src/resources/apps/users/metamessages.ts">get</a>(appId, userId, metamessageId) -> Metamessage</code>

### Sessions

Types:

- <code><a href="./src/resources/apps/users/sessions/sessions.ts">DialecticResponse</a></code>
- <code><a href="./src/resources/apps/users/sessions/sessions.ts">PageSession</a></code>
- <code><a href="./src/resources/apps/users/sessions/sessions.ts">Session</a></code>
- <code><a href="./src/resources/apps/users/sessions/sessions.ts">SessionDeleteResponse</a></code>

Methods:

- <code title="post /v1/apps/{app_id}/users/{user_id}/sessions">client.apps.users.sessions.<a href="./src/resources/apps/users/sessions/sessions.ts">create</a>(appId, userId, { ...params }) -> Session</code>
- <code title="put /v1/apps/{app_id}/users/{user_id}/sessions/{session_id}">client.apps.users.sessions.<a href="./src/resources/apps/users/sessions/sessions.ts">update</a>(appId, userId, sessionId, { ...params }) -> Session</code>
- <code title="post /v1/apps/{app_id}/users/{user_id}/sessions/list">client.apps.users.sessions.<a href="./src/resources/apps/users/sessions/sessions.ts">list</a>(appId, userId, { ...params }) -> SessionsPage</code>
- <code title="delete /v1/apps/{app_id}/users/{user_id}/sessions/{session_id}">client.apps.users.sessions.<a href="./src/resources/apps/users/sessions/sessions.ts">delete</a>(appId, userId, sessionId) -> unknown</code>
- <code title="post /v1/apps/{app_id}/users/{user_id}/sessions/{session_id}/chat">client.apps.users.sessions.<a href="./src/resources/apps/users/sessions/sessions.ts">chat</a>(appId, userId, sessionId, { ...params }) -> DialecticResponse</code>
- <code title="get /v1/apps/{app_id}/users/{user_id}/sessions/{session_id}/clone">client.apps.users.sessions.<a href="./src/resources/apps/users/sessions/sessions.ts">clone</a>(appId, userId, sessionId, { ...params }) -> Session</code>
- <code title="get /v1/apps/{app_id}/users/{user_id}/sessions">client.apps.users.sessions.<a href="./src/resources/apps/users/sessions/sessions.ts">get</a>(appId, userId, { ...params }) -> Session</code>

#### Messages

Types:

- <code><a href="./src/resources/apps/users/sessions/messages.ts">Message</a></code>
- <code><a href="./src/resources/apps/users/sessions/messages.ts">PageMessage</a></code>
- <code><a href="./src/resources/apps/users/sessions/messages.ts">MessageBatchResponse</a></code>

Methods:

- <code title="post /v1/apps/{app_id}/users/{user_id}/sessions/{session_id}/messages">client.apps.users.sessions.messages.<a href="./src/resources/apps/users/sessions/messages.ts">create</a>(appId, userId, sessionId, { ...params }) -> Message</code>
- <code title="put /v1/apps/{app_id}/users/{user_id}/sessions/{session_id}/messages/{message_id}">client.apps.users.sessions.messages.<a href="./src/resources/apps/users/sessions/messages.ts">update</a>(appId, userId, sessionId, messageId, { ...params }) -> Message</code>
- <code title="post /v1/apps/{app_id}/users/{user_id}/sessions/{session_id}/messages/list">client.apps.users.sessions.messages.<a href="./src/resources/apps/users/sessions/messages.ts">list</a>(appId, userId, sessionId, { ...params }) -> MessagesPage</code>
- <code title="post /v1/apps/{app_id}/users/{user_id}/sessions/{session_id}/messages/batch">client.apps.users.sessions.messages.<a href="./src/resources/apps/users/sessions/messages.ts">batch</a>(appId, userId, sessionId, { ...params }) -> MessageBatchResponse</code>
- <code title="get /v1/apps/{app_id}/users/{user_id}/sessions/{session_id}/messages/{message_id}">client.apps.users.sessions.messages.<a href="./src/resources/apps/users/sessions/messages.ts">get</a>(appId, userId, sessionId, messageId) -> Message</code>

### Collections

Types:

- <code><a href="./src/resources/apps/users/collections/collections.ts">Collection</a></code>
- <code><a href="./src/resources/apps/users/collections/collections.ts">PageCollection</a></code>
- <code><a href="./src/resources/apps/users/collections/collections.ts">CollectionDeleteResponse</a></code>

Methods:

- <code title="post /v1/apps/{app_id}/users/{user_id}/collections">client.apps.users.collections.<a href="./src/resources/apps/users/collections/collections.ts">create</a>(appId, userId, { ...params }) -> Collection</code>
- <code title="put /v1/apps/{app_id}/users/{user_id}/collections/{collection_id}">client.apps.users.collections.<a href="./src/resources/apps/users/collections/collections.ts">update</a>(appId, userId, collectionId, { ...params }) -> Collection</code>
- <code title="post /v1/apps/{app_id}/users/{user_id}/collections/list">client.apps.users.collections.<a href="./src/resources/apps/users/collections/collections.ts">list</a>(appId, userId, { ...params }) -> CollectionsPage</code>
- <code title="delete /v1/apps/{app_id}/users/{user_id}/collections/{collection_id}">client.apps.users.collections.<a href="./src/resources/apps/users/collections/collections.ts">delete</a>(appId, userId, collectionId) -> unknown</code>
- <code title="get /v1/apps/{app_id}/users/{user_id}/collections">client.apps.users.collections.<a href="./src/resources/apps/users/collections/collections.ts">get</a>(appId, userId, { ...params }) -> Collection</code>
- <code title="get /v1/apps/{app_id}/users/{user_id}/collections/name/{name}">client.apps.users.collections.<a href="./src/resources/apps/users/collections/collections.ts">getByName</a>(appId, userId, name) -> Collection</code>

#### Documents

Types:

- <code><a href="./src/resources/apps/users/collections/documents.ts">Document</a></code>
- <code><a href="./src/resources/apps/users/collections/documents.ts">PageDocument</a></code>
- <code><a href="./src/resources/apps/users/collections/documents.ts">DocumentDeleteResponse</a></code>
- <code><a href="./src/resources/apps/users/collections/documents.ts">DocumentQueryResponse</a></code>

Methods:

- <code title="post /v1/apps/{app_id}/users/{user_id}/collections/{collection_id}/documents">client.apps.users.collections.documents.<a href="./src/resources/apps/users/collections/documents.ts">create</a>(appId, userId, collectionId, { ...params }) -> Document</code>
- <code title="put /v1/apps/{app_id}/users/{user_id}/collections/{collection_id}/documents/{document_id}">client.apps.users.collections.documents.<a href="./src/resources/apps/users/collections/documents.ts">update</a>(appId, userId, collectionId, documentId, { ...params }) -> Document</code>
- <code title="post /v1/apps/{app_id}/users/{user_id}/collections/{collection_id}/documents/list">client.apps.users.collections.documents.<a href="./src/resources/apps/users/collections/documents.ts">list</a>(appId, userId, collectionId, { ...params }) -> DocumentsPage</code>
- <code title="delete /v1/apps/{app_id}/users/{user_id}/collections/{collection_id}/documents/{document_id}">client.apps.users.collections.documents.<a href="./src/resources/apps/users/collections/documents.ts">delete</a>(appId, userId, collectionId, documentId) -> unknown</code>
- <code title="get /v1/apps/{app_id}/users/{user_id}/collections/{collection_id}/documents/{document_id}">client.apps.users.collections.documents.<a href="./src/resources/apps/users/collections/documents.ts">get</a>(appId, userId, collectionId, documentId) -> Document</code>
- <code title="post /v1/apps/{app_id}/users/{user_id}/collections/{collection_id}/documents/query">client.apps.users.collections.documents.<a href="./src/resources/apps/users/collections/documents.ts">query</a>(appId, userId, collectionId, { ...params }) -> DocumentQueryResponse</code>

# Keys

Types:

- <code><a href="./src/resources/keys.ts">KeyCreateResponse</a></code>

Methods:

- <code title="post /v1/keys">client.keys.<a href="./src/resources/keys.ts">create</a>({ ...params }) -> unknown</code>
