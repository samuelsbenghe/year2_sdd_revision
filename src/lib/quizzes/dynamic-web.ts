import { CodeXml } from '@lucide/svelte';
import { dynamicWebLectures } from '$lib/dynamic-web';
import { mixedReviewTopic } from './topics';
import type { QuizQuestion, QuizTopic } from './types';

export const dynamicWebQuizTopics: QuizTopic[] = [
	...dynamicWebLectures.map(({ week, title, description }) => ({
		id: `week${week}`,
		title: `Week ${week}: ${title}`,
		description,
		icon: CodeXml,
		iconClass: 'bg-green-100 text-green-600'
	})),
	mixedReviewTopic,
	{
		...mixedReviewTopic,
		id: 'mixed-long',
		title: 'Mixed Review (Long)',
		description: '30 random questions from across all seven weeks',
		mixedQuestionCount: 30
	}
];

export const dynamicWebQuizQuestions: QuizQuestion[] = [
	// Week 1
	{
		area: 'week1',
		question: 'A JavaScript browser client communicates with a Python server. What lets the two programs work together?',
		type: 'multiple-choice',
		options: [
			'They run on the same operating system.',
			'They follow a shared protocol for requests and responses.',
			'They connect directly to the same database.',
			'They use the same programming language for the application logic.'
		],
		answer: 'They follow a shared protocol for requests and responses.'
	},
	{
		area: 'week1',
		question: 'In the lecture’s multi-tier architecture, which tier checks business rules before saving a new order?',
		type: 'multiple-choice',
		options: ['The client tier', 'The reverse proxy in the presentation tier', 'The database in the data tier', 'The application tier'],
		answer: 'The application tier'
	},
	{
		area: 'week1',
		question: 'Where does a browser send traffic when it connects to 127.0.0.1?',
		type: 'multiple-choice',
		options: [
			'To the browser’s own machine through the loopback interface.',
			'To the default router on the local network.',
			'To the DNS resolver configured on the machine.',
			'To the public address assigned to the local network.'
		],
		answer: 'To the browser’s own machine through the loopback interface.'
	},
	{
		area: 'week1',
		question: 'In the lecture’s four-layer TCP/IP model, which layer uses IP addresses to route packets across networks?',
		type: 'multiple-choice',
		options: ['Application layer', 'Transport layer', 'Internet layer', 'Link layer'],
		answer: 'Internet layer'
	},
	{
		area: 'week1',
		question: 'What is the order of messages in a standard TCP three-way handshake?',
		type: 'multiple-choice',
		options: ['ACK, SYN, SYN-ACK', 'SYN, SYN-ACK, ACK', 'SYN, ACK, SYN-ACK', 'SYN-ACK, SYN, ACK'],
		answer: 'SYN, SYN-ACK, ACK'
	},
	{
		area: 'week1',
		question: 'Some network packets carrying a response arrive out of order. What does TCP provide to the receiving application?',
		type: 'multiple-choice',
		options: [
			'Each packet as soon as it arrives, in arrival order.',
			'A separate permanent connection for every packet.',
			'A fresh DNS lookup whenever a packet arrives late.',
			'An ordered byte stream, with missing data retransmitted as needed.'
		],
		answer: 'An ordered byte stream, with missing data retransmitted as needed.'
	},
	{
		area: 'week1',
		question: 'Which destination port does a browser use for https://example.test:8443/notes?',
		type: 'multiple-choice',
		options: ['80', '443', '8443', '8080'],
		answer: '8443'
	},
	{
		area: 'week1',
		question: 'A domain’s IP address changes, but a DNS resolver still returns the old address from its cache. Which value controls how long it can normally reuse that cached record?',
		type: 'multiple-choice',
		options: ['The DNS record’s TTL', 'The HTTP response’s Content-Length', 'The destination TCP port', 'The server’s HTTP version'],
		answer: 'The DNS record’s TTL'
	},
	{
		area: 'week1',
		question: 'In the HTTP/1.1 request line GET /index.html HTTP/1.1, what does /index.html identify?',
		type: 'multiple-choice',
		options: ['The media type of the response', 'The hostname of the requesting client', 'The version of the HTTP protocol', 'The request target’s path'],
		answer: 'The request target’s path'
	},
	{
		area: 'week1',
		question: 'You want the response headers for a resource without downloading its body. Which HTTP method is designed for that?',
		type: 'multiple-choice',
		options: ['GET', 'HEAD', 'OPTIONS', 'PUT'],
		answer: 'HEAD'
	},
	{
		area: 'week1',
		question: 'A client successfully sends the same PUT request twice to replace the same resource. What makes this operation idempotent?',
		type: 'multiple-choice',
		options: [
			'The server must return the same status code both times.',
			'The server stores each request as a new resource.',
			'The intended effect on the resource is the same as sending the request once.',
			'The request never changes server state.'
		],
		answer: 'The intended effect on the resource is the same as sending the request once.'
	},
	{
		area: 'week1',
		question: 'Which HTTP method explicitly represents a partial modification to a resource?',
		type: 'multiple-choice',
		options: ['PATCH', 'PUT', 'HEAD', 'GET'],
		answer: 'PATCH'
	},
	{
		area: 'week1',
		question: 'A browser sends a conditional GET for a cached stylesheet and the server confirms it has not changed. Which status lets the browser reuse its cached copy?',
		type: 'multiple-choice',
		options: ['200 OK', '204 No Content', '302 Found', '304 Not Modified'],
		answer: '304 Not Modified'
	},
	{
		area: 'week1',
		question: 'A user is signed in, but their role is not permitted to open the requested admin page. Which HTTP status best fits?',
		type: 'multiple-choice',
		options: ['401 Unauthorized', '403 Forbidden', '400 Bad Request', '500 Internal Server Error'],
		answer: '403 Forbidden'
	},
	{
		area: 'week1',
		question: 'Which response header tells a client whether a response body is HTML or JSON?',
		type: 'multiple-choice',
		options: ['Host', 'Content-Length', 'Content-Type', 'User-Agent'],
		answer: 'Content-Type'
	},
	{
		area: 'week1',
		question: 'HTTP is stateless. How can a website associate a new request with an existing login session?',
		type: 'multiple-choice',
		options: [
			'The browser sends a session cookie with the request.',
			'The HTTP version identifies the user across requests.',
			'DNS adds the login identity to every address lookup.',
			'The server treats every request on the same TCP port as the same user.'
		],
		answer: 'The browser sends a session cookie with the request.'
	},
	{
		area: 'week1',
		question: 'In https://example.test/notes?topic=web%20basics#overview, which part stays in the browser when it makes the HTTP request?',
		type: 'multiple-choice',
		options: ['/notes', 'example.test', 'topic=web%20basics', '#overview'],
		answer: '#overview'
	},
	{
		area: 'week1',
		question: 'What does execute permission on a Unix directory allow?',
		type: 'multiple-choice',
		options: [
			'Listing all its file names without read permission.',
			'Traversing the directory to access entries by name, subject to their permissions.',
			'Deleting files from the directory without write permission.',
			'Running every file inside it regardless of the file’s permissions.'
		],
		answer: 'Traversing the directory to access entries by name, subject to their permissions.'
	},
	{
		area: 'week1',
		question: 'What permissions does Unix mode 644 give to an ordinary file?',
		type: 'multiple-choice',
		options: [
			'Owner, group, and others can all read and write.',
			'The owner can read and execute, and everyone else can read.',
			'The owner can read and write, and group and others can read.',
			'Only the owner can read the file.'
		],
		answer: 'The owner can read and write, and group and others can read.'
	},
	{
		area: 'week1',
		question: 'When setting up SSH public-key login, where should a developer place the two keys?',
		type: 'multiple-choice',
		options: [
			'Keep the private key on the client and register the public key on the remote account.',
			'Upload the private key to the server and keep the public key on the client.',
			'Upload both keys to the remote account.',
			'Keep both keys on the client and register the private key’s passphrase on the server.'
		],
		answer: 'Keep the private key on the client and register the public key on the remote account.'
	},
	// Week 2
	{
		area: 'week2',
		question: 'How does a dynamic web application differ from a static website?',
		type: 'multiple-choice',
		options: [
			'The server generates customized responses on the fly based on request parameters and application state.',
			'Dynamic websites execute entirely on the client without contacting a server.',
			'Static sites cannot be hosted on standard cloud servers.',
			'Dynamic sites use CSS, whereas static sites only use raw HTML.'
		],
		answer: 'The server generates customized responses on the fly based on request parameters and application state.'
	},
	{
		area: 'week2',
		question: 'An HTTP 500 status code indicates that the error was caused by an unhandled condition on the server.',
		type: 'true-false',
		options: ['True', 'False'],
		answer: 'True'
	},
	{
		area: 'week2',
		question: 'In FastAPI, how does declaring a path parameter as item_id: int affect request processing when a client requests /items/abc?',
		type: 'multiple-choice',
		options: [
			'FastAPI fails Pydantic type validation and automatically returns an HTTP 422 Unprocessable Entity error response with error details.',
			'The application crashes with an unhandled Python ValueError, returning an HTTP 500 Internal Server Error.',
			'The route is ignored and the request cascades down to the generic 404 handler.',
			'FastAPI converts the string "abc" into integer 0 and invokes the route handler.',
			'The server silently drops the TCP connection without sending an HTTP response payload.'
		],
		answer: 'FastAPI fails Pydantic type validation and automatically returns an HTTP 422 Unprocessable Entity error response with error details.'
	},
	{
		area: 'week2',
		question: 'What does the "payload" or "body" of an incoming POST request represent?',
		type: 'multiple-choice',
		options: [
			'The total number of network hops the IP packet traversed.',
			'The server’s internal memory allocation table.',
			'The cryptographic fingerprint of the user’s home Wi-Fi router.',
			'The primary data sent by the client to be processed by the server.'
		],
		answer: 'The primary data sent by the client to be processed by the server.'
	},
	{
		area: 'week2',
		question: 'What is the crucial difference between <%= user.name %> and <%- user.name %> in an EJS template?',
		type: 'multiple-choice',
		options: [
			'<%- is used for numeric variables, while <%= is used for strings.',
			'<%- is deprecated syntax for <%= and produces the same output.',
			'<%- executes JavaScript logic without rendering, whereas <%= renders output.',
			'<%= is evaluated in the browser, whereas <%- is evaluated on the server.',
			'<%= HTML-escapes the value before rendering it, whereas <%- renders the value without escaping it.'
		],
		answer: '<%= HTML-escapes the value before rendering it, whereas <%- renders the value without escaping it.'
	},
	{
		area: 'week2',
		question: 'Why are algorithms like PBKDF2, bcrypt, or Argon2 preferred over MD5 or SHA-256 for password verification?',
		type: 'multiple-choice',
		options: [
			'They consume zero memory overhead during authentication checks.',
			'They are immune to collisions under all mathematical circumstances.',
			'They incorporate tunable work factors that deliberately slow down verification to resist GPU-based brute-force attacks.',
			'They run natively in web browsers without needing server processing.'
		],
		answer: 'They incorporate tunable work factors that deliberately slow down verification to resist GPU-based brute-force attacks.'
	},
	{
		area: 'week2',
		question: 'In RESTful API design, what is the conceptual difference between a path parameter and a query parameter?',
		type: 'multiple-choice',
		options: [
			'Path parameters can only contain numbers, whereas query parameters can only contain strings.',
			'Query parameters are transmitted in the HTTP body, while path parameters are in the headers.',
			'Path parameters identify a specific resource, while query parameters filter, sort, or paginate resources.',
			'Query parameters are required, while path parameters are always optional.'
		],
		answer: 'Path parameters identify a specific resource, while query parameters filter, sort, or paginate resources.'
	},
	{
		area: 'week2',
		question: 'When a JavaScript function calls event.preventDefault() inside a form submit handler, what specifically happens?',
		type: 'multiple-choice',
		options: [
			'It cancels the browser’s default form submission, allowing JavaScript to handle the submission with fetch().',
			'The form data is automatically converted into a URL-encoded string.',
			'The browser closes the active network connection to the server.',
			'The event immediately stops propagating or bubbling up the DOM hierarchy.',
			'All input fields in the form are cleared and reset to their default values.'
		],
		answer: 'It cancels the browser’s default form submission, allowing JavaScript to handle the submission with fetch().'
	},
	{
		area: 'week2',
		question: 'In FastAPI, which decorator correctly maps an asynchronous function to handle HTTP GET requests at /items?',
		type: 'multiple-choice',
		options: ['@app.listen("/items")', '@app.post("/items")', '@fastapi.url("/items")', '@app.get("/items")', '@app.route_get("/items")'],
		answer: '@app.get("/items")'
	},
	{
		area: 'week2',
		question: 'Why are environment variables (e.g., process.env.DB_PASSWORD) used on the server?',
		type: 'multiple-choice',
		options: [
			'To keep sensitive secrets and configuration out of source code repositories.',
			'To speed up network transport speeds over fiber-optic lines.',
			'To automatically format HTML documents for search engine bots.',
			'To enable clients to directly view backend database passwords.'
		],
		answer: 'To keep sensitive secrets and configuration out of source code repositories.'
	},
	{
		area: 'week2',
		question: 'When fetch() receives an HTTP 404 response from the server, how does the resulting Promise behave?',
		type: 'multiple-choice',
		options: [
			'The browser automatically retries the request ten times.',
			'The Promise immediately rejects and enters the .catch() block.',
			'The browser crashes and terminates script execution.',
			'The Promise resolves successfully, but the response.ok property is false.'
		],
		answer: 'The Promise resolves successfully, but the response.ok property is false.'
	},
	{
		area: 'week2',
		question: 'What does event.preventDefault() do when called during a <form> submit event?',
		type: 'multiple-choice',
		options: [
			'It disables all network access for the entire browser tab.',
			'It resets all input fields inside the form to blank values.',
			'It stops the event from bubbling up to any parent DOM elements.',
			'It cancels the browser’s default form submission.'
		],
		answer: 'It cancels the browser’s default form submission.'
	},
	{
		area: 'week2',
		question: 'What wildcard value can a server send in Access-Control-Allow-Origin to allow any public origin to read a non-credentialed response?',
		type: 'multiple-choice',
		options: ['%', 'VOID', 'ALL', '*'],
		answer: '*'
	},
	{
		area: 'week2',
		question: 'In an intranet architecture where external traffic to https://www.doc.gold.ac.uk/usr/551/ routes to server ID 551, what is /usr/551/?',
		type: 'multiple-choice',
		options: [
			'A URL path prefix routed by the reverse proxy to a specific internal container or port.',
			'A local Linux file system folder inside the root directory.',
			'A DNS subdomain registered with an external registrar.',
			'The hardware MAC address of the host machine.'
		],
		answer: 'A URL path prefix routed by the reverse proxy to a specific internal container or port.'
	},
	{
		area: 'week2',
		question: 'In a relational database, what is the primary purpose of a primary key?',
		type: 'multiple-choice',
		options: [
			'Uniquely identifying each individual record in a table.',
			'Securing table passwords with hashing algorithms.',
			'Allowing columns to accept null values.',
			'Linking two separate databases across a local network.',
			'Storing client-side session tokens.'
		],
		answer: 'Uniquely identifying each individual record in a table.'
	},
	{
		area: 'week2',
		question: 'In modern web development, why do many architectures separate the frontend (e.g., React SPA) and backend (e.g., REST API) completely?',
		type: 'multiple-choice',
		options: [
			'To avoid having to use IP addresses on the internet.',
			'Because modern databases only allow connections from client browsers.',
			'To decouple UI concerns from business logic and allow the same API to serve mobile apps and web clients.',
			'Because browsers can no longer parse HTML rendered on servers.'
		],
		answer: 'To decouple UI concerns from business logic and allow the same API to serve mobile apps and web clients.'
	},
	{
		area: 'week2',
		question: 'What does the Cache-Control: no-store response directive instruct browser and intermediary caches to do?',
		type: 'multiple-choice',
		options: [
			'Store the file only on public proxy servers.',
			'Store the file in cache permanently and never check the server again.',
			'Only store the file if the connection uses unencrypted HTTP.',
			'Do not store the current request or its response in the cache.'
		],
		answer: 'Do not store the current request or its response in the cache.'
	},
	{
		area: 'week2',
		question: 'What feature of an asynchronous ASGI server lets FastAPI handle other requests while an async handler waits for I/O?',
		type: 'multiple-choice',
		options: [
			'Forking a new operating system process for every HTTP connection.',
			'Writing incoming requests to a disk queue.',
			'An asynchronous event loop that schedules tasks cooperatively.',
			'Restricting connections to one client at a time.'
		],
		answer: 'An asynchronous event loop that schedules tasks cooperatively.'
	},
	// Week 3
	{
		area: 'week3',
		question: 'What Origin header value is typically sent on a cross-origin request from an HTML file opened directly via file://?',
		type: 'multiple-choice',
		options: ['file://system', 'http://localhost:80', 'https://127.0.0.1', 'null, the serialized value of an opaque origin'],
		answer: 'null, the serialized value of an opaque origin'
	},
	{
		area: 'week3',
		question: 'Which of these is a simple cross-origin request that typically skips the CORS preflight?',
		type: 'multiple-choice',
		options: [
			'A GET request with a standard Accept header and no custom headers.',
			'A POST request sending application/json.',
			'A PUT request modifying database records.',
			'A DELETE request with an Authorization header.'
		],
		answer: 'A GET request with a standard Accept header and no custom headers.'
	},
	{
		area: 'week3',
		question: 'Which HTTP method is defined as both safe and idempotent?',
		type: 'multiple-choice',
		options: ['DELETE', 'PATCH', 'GET', 'POST'],
		answer: 'GET'
	},
	{
		area: 'week3',
		question: 'What role does HTTPS play in web security?',
		type: 'multiple-choice',
		options: [
			'It automatically patches SQL injection vulnerabilities in server code.',
			'It provides encryption in both directions, integrity protection, and server authentication via TLS.',
			'It guarantees that the website content is free of scams or malware.',
			'It makes client-side JavaScript execution ten times faster.'
		],
		answer: 'It provides encryption in both directions, integrity protection, and server authentication via TLS.'
	},
	{
		area: 'week3',
		question: 'What fundamental security breakdown characterizes Server-Side Request Forgery (SSRF)?',
		type: 'multiple-choice',
		options: [
			'An attacker executes cross-site JavaScript inside an administrator’s browser.',
			'Untrusted input can cause a server to make unintended requests using the server’s network access.',
			'An attacker overloads a server with connection attempts.',
			'An application interprets untrusted input as part of a SQL command.'
		],
		answer: 'Untrusted input can cause a server to make unintended requests using the server’s network access.'
	},
	{
		area: 'week3',
		question: 'When diagnosing your own lab server, what can ss -tlpn show that a basic ps listing does not?',
		type: 'multiple-choice',
		options: [
			'SSH private keys currently loaded in the kernel keyring.',
			'Real-time CPU and RAM usage for client browser sessions.',
			'A list of stale server processes that it automatically terminates.',
			'Listening TCP sockets, their bound addresses and ports, and associated process IDs where permitted.',
			'Uncommitted database transactions held in memory.'
		],
		answer: 'Listening TCP sockets, their bound addresses and ports, and associated process IDs where permitted.'
	},
	{
		area: 'week3',
		question: 'An Express GET route is defined as /users/:userId/books/:bookId. How does its handler receive the values from /users/42/books/99?',
		type: 'multiple-choice',
		options: [
			'req.params.userId equals "42" and req.params.bookId equals "99".',
			'req.query.userId equals 42 and req.query.bookId equals 99.',
			'req.body.userId equals "42" and req.body.bookId equals "99".',
			'req.params[0] equals 42 and req.params[1] equals 99.'
		],
		answer: 'req.params.userId equals "42" and req.params.bookId equals "99".'
	},
	{
		area: 'week3',
		question: 'Consider SELECT category, AVG(price) FROM products WHERE in_stock = 1 GROUP BY category HAVING AVG(price) > 50. When do WHERE and HAVING logically filter the data?',
		type: 'multiple-choice',
		options: [
			'HAVING runs first to decide which indexes to load into memory.',
			'HAVING filters rows before grouping, and WHERE filters the aggregate results.',
			'WHERE can only evaluate primary keys, while HAVING handles other columns.',
			'Both clauses filter individual rows during the initial table scan.',
			'WHERE filters rows before grouping and aggregation, and HAVING filters the resulting groups.'
		],
		answer: 'WHERE filters rows before grouping and aggregation, and HAVING filters the resulting groups.'
	},
	{
		area: 'week3',
		question: 'Which standard JavaScript method specifically looks up an HTML element by its ID?',
		type: 'multiple-choice',
		options: ['document.getElementById()', 'document.selectId()', 'document.fetchId()', 'document.find()', 'document.getElement()'],
		answer: 'document.getElementById()'
	},
	{
		area: 'week3',
		question: 'An app loses its in-memory book catalogue whenever the server restarts. Which change provides persistent relational storage without a separate database server?',
		type: 'multiple-choice',
		options: [
			'Store the catalogue in a new global variable.',
			'Keep the catalogue in a request-scoped object.',
			'Store the catalogue in an on-disk SQLite database.',
			'Move the catalogue into the browser’s live DOM.'
		],
		answer: 'Store the catalogue in an on-disk SQLite database.'
	},
	{
		area: 'week3',
		question: 'With an immediate foreign key from books.author_id to authors.id, what happens if you insert a book with a non-null author_id that does not exist in authors?',
		type: 'multiple-choice',
		options: [
			'The database inserts a blank author automatically.',
			'The foreign key constraint rejects the insert.',
			'The database replaces the supplied ID with the first author’s ID.',
			'The insert succeeds and the foreign key affects only later SELECT queries.'
		],
		answer: 'The foreign key constraint rejects the insert.'
	},
	{
		area: 'week3',
		question: 'A book can have several genres, and a genre can contain several books. What does a composite primary key of (book_id, genre_id) do in the book_genres junction table?',
		type: 'multiple-choice',
		options: [
			'Limits each book to one genre.',
			'Limits each genre to one book.',
			'Requires an unrelated author ID for every assignment.',
			'Prevents the same book–genre pair from being recorded twice.'
		],
		answer: 'Prevents the same book–genre pair from being recorded twice.'
	},
	{
		area: 'week3',
		question: 'The books table references authors with ON DELETE RESTRICT. What happens when you try to delete an author who still has books?',
		type: 'multiple-choice',
		options: [
			'The database rejects the author deletion while the books still reference that author.',
			'The database deletes the author and all their books.',
			'The database sets the author ID on each book to NULL.',
			'The database reassigns the books to the next available author.'
		],
		answer: 'The database rejects the author deletion while the books still reference that author.'
	},
	{
		area: 'week3',
		question: 'A book catalogue stores several genre names as a comma-separated list in one cell. Which change best addresses the first normal form problem?',
		type: 'multiple-choice',
		options: [
			'Add an index to the comma-separated text.',
			'Store the same list in the title column as well.',
			'Store each book–genre association as a separate row in a related table.',
			'Change the separator from a comma to a space.'
		],
		answer: 'Store each book–genre association as a separate row in a related table.'
	},
	{
		area: 'week3',
		question: 'An order_items table has a composite key of (order_id, item_id). A customer address is determined by order_id alone. Which change addresses that second normal form violation?',
		type: 'multiple-choice',
		options: [
			'Copy the address into every row twice.',
			'Move the address to the table that stores each order.',
			'Sort the item rows by customer address.',
			'Make the address a required field on each item row.'
		],
		answer: 'Move the address to the table that stores each order.'
	},
	{
		area: 'week3',
		question: 'A table has primary key customer_id and also stores postcode and city, where postcode determines city. Why is this a third normal form issue?',
		type: 'multiple-choice',
		options: [
			'The primary key can identify more than one row.',
			'The postcode field contains a list of customer IDs.',
			'The city field depends on only part of a composite primary key.',
			'The city field depends on a non-key field, creating a transitive dependency.'
		],
		answer: 'The city field depends on a non-key field, creating a transitive dependency.'
	},
	{
		area: 'week3',
		question: 'Which SQL statement is a Data Definition Language (DDL) operation?',
		type: 'multiple-choice',
		options: ['ALTER TABLE books ADD COLUMN isbn TEXT', 'SELECT title FROM books', 'UPDATE books SET price = 10 WHERE id = 1', 'DELETE FROM books WHERE id = 1'],
		answer: 'ALTER TABLE books ADD COLUMN isbn TEXT'
	},
	{
		area: 'week3',
		question: 'In a SQLite query ordered by price and then id, what does LIMIT 10 OFFSET 20 do?',
		type: 'multiple-choice',
		options: [
			'It returns the first 20 rows and discards the last 10.',
			'It returns rows whose IDs fall between 10 and 20.',
			'It skips the first 20 rows of the sorted results and returns up to 10 more.',
			'It returns every twentieth row until 10 rows are found.'
		],
		answer: 'It skips the first 20 rows of the sorted results and returns up to 10 more.'
	},
	{
		area: 'week3',
		question: 'You LEFT JOIN authors to books and group by author. Which aggregate returns zero for authors with no matching books?',
		type: 'multiple-choice',
		options: ['COUNT(*)', 'COUNT(books.id)', 'COUNT(authors.id)', 'AVG(books.id)'],
		answer: 'COUNT(books.id)'
	},
	{
		area: 'week3',
		question: 'What does UPDATE books SET price = 12 do if you omit WHERE?',
		type: 'multiple-choice',
		options: [
			'It changes only the first row.',
			'It changes only books with a price of NULL.',
			'It always fails because WHERE is mandatory.',
			'It attempts to set the price to 12 in every row of the table.'
		],
		answer: 'It attempts to set the price to 12 in every row of the table.'
	},
	// Week 4
	{
		area: 'week4',
		question: 'In REST architectural design, what makes an HTTP method idempotent?',
		type: 'multiple-choice',
		options: [
			'It processes faster than other methods.',
			'It requires client-side encryption.',
			'It can only return plain text instead of JSON.',
			'Making the same request multiple times has the same intended effect on the server as making it once.'
		],
		answer: 'Making the same request multiple times has the same intended effect on the server as making it once.'
	},
	{
		area: 'week4',
		question: 'What does event.preventDefault() do when called during a <form> submit event?',
		type: 'multiple-choice',
		options: [
			'It cancels the browser’s default form submission.',
			'It disables all network access for the entire browser tab.',
			'It stops the event from bubbling up to any parent DOM elements.',
			'It resets all input fields inside the form to blank values.'
		],
		answer: 'It cancels the browser’s default form submission.'
	},
	{
		area: 'week4',
		question: 'What is routing in server-side web frameworks such as Express and Flask?',
		type: 'multiple-choice',
		options: [
			'Balancing electrical voltages across motherboard components.',
			'Compressing image files before saving them to disk.',
			'Directing IP packets across different network gateways.',
			'Mapping incoming HTTP request paths and methods to specific handler functions.'
		],
		answer: 'Mapping incoming HTTP request paths and methods to specific handler functions.'
	},
	{
		area: 'week4',
		question: 'How do you raise an explicit HTTP error with a custom message inside a FastAPI route handler?',
		type: 'multiple-choice',
		options: ['throw Error(404, "Item not found")', 'raise HTTPException(status_code=404, detail="Item not found")', 'sys.exit(404)', 'return {"error": "Not found", "code": 404}'],
		answer: 'raise HTTPException(status_code=404, detail="Item not found")'
	},
	{
		area: 'week4',
		question: 'Why is Jinja2 considered a compiled template engine?',
		type: 'multiple-choice',
		options: [
			'It converts templates into C++ libraries compiled with GCC.',
			'It runs SQL queries to replace placeholders on disk.',
			'It uses a single pass of regular expressions to replace placeholders on each render.',
			'It parses the template into an abstract syntax tree and compiles it into executable Python code.'
		],
		answer: 'It parses the template into an abstract syntax tree and compiles it into executable Python code.'
	},
	{
		area: 'week4',
		question: 'What fundamental security breakdown characterizes Server-Side Request Forgery (SSRF)?',
		type: 'multiple-choice',
		options: [
			'An attacker executes cross-site JavaScript inside an administrator’s browser.',
			'An attacker overloads a server with connection attempts.',
			'An application interprets untrusted input as part of a SQL command.',
			'Untrusted input can cause a server to make unintended requests using the server’s network access.'
		],
		answer: 'Untrusted input can cause a server to make unintended requests using the server’s network access.'
	},
	{
		area: 'week4',
		question: 'Which SQL statement adds new rows to an existing database table?',
		type: 'multiple-choice',
		options: ['ADD ROW', 'APPEND TO', 'INSERT INTO', 'CREATE ROW', 'UPDATE'],
		answer: 'INSERT INTO'
	},
	{
		area: 'week4',
		question: 'What is the primary role of the application layer in the TCP/IP model?',
		type: 'multiple-choice',
		options: [
			'Managing MAC addresses across a single local link.',
			'Transmitting physical electrical and optical signals.',
			'Routing packets between different networks.',
			'Providing services and protocols that application software uses to communicate.'
		],
		answer: 'Providing services and protocols that application software uses to communicate.'
	},
	{
		area: 'week4',
		question: 'What default port does the https:// scheme imply when the URL omits a port?',
		type: 'multiple-choice',
		options: ['443', '22', '80', '8080'],
		answer: '443'
	},
	{
		area: 'week4',
		question: 'A frontend on http://localhost:3000 calls a FastAPI endpoint on http://localhost:8000 using fetch(). Why might the browser block JavaScript from reading the response?',
		type: 'multiple-choice',
		options: [
			'Requests across different ports require an SSH handshake.',
			'The request is missing database credentials in its query parameters.',
			'Browsers require cross-origin requests to use WebSockets.',
			'The different ports make the origins distinct, so the backend must return an appropriate Access-Control-Allow-Origin header.',
			'Browsers disallow asynchronous requests to port 8000.'
		],
		answer: 'The different ports make the origins distinct, so the backend must return an appropriate Access-Control-Allow-Origin header.'
	},
	{
		area: 'week4',
		question: 'How does a standard CSRF token protect a dynamic web application?',
		type: 'multiple-choice',
		options: [
			'It forces users to re-enter their password on every link click.',
			'It converts all database queries to NoSQL commands.',
			'The server checks for an unpredictable token in state-changing requests that an unrelated site should be unable to obtain or guess.',
			'It encrypts the physical Wi-Fi connection between the client and router.'
		],
		answer: 'The server checks for an unpredictable token in state-changing requests that an unrelated site should be unable to obtain or guess.'
	},
	{
		area: 'week4',
		question: 'What is the primary role of a server runtime such as Node.js, Python, or Ruby?',
		type: 'multiple-choice',
		options: [
			'Parsing and displaying CSS layouts directly to end users.',
			'Enforcing colour profiles on user monitors.',
			'Managing physical fibre-optic cables in internet switches.',
			'Executing backend application logic, interacting with system resources, and handling network I/O.'
		],
		answer: 'Executing backend application logic, interacting with system resources, and handling network I/O.'
	},
	{
		area: 'week4',
		question: 'In Node.js, what does non-blocking I/O mean?',
		type: 'multiple-choice',
		options: [
			'The server pauses incoming connections until disk writes complete.',
			'The server creates a dedicated process for every HTTP request.',
			'Data read from disk is never held in RAM.',
			'While an asynchronous I/O operation is pending, the event loop can run other work.'
		],
		answer: 'While an asynchronous I/O operation is pending, the event loop can run other work.'
	},
	{
		area: 'week4',
		question: 'Binding a server only to 127.0.0.1 makes it directly reachable from other computers on the same Wi-Fi network.',
		type: 'true-false',
		options: ['True', 'False'],
		answer: 'False'
	},
	{
		area: 'week4',
		question: 'Which phases carry a bubbling DOM event down through ancestors toward its target and back up through them afterward?',
		type: 'multiple-choice',
		options: ['Compression and decompression', 'Capturing and bubbling', 'Compilation and execution', 'Server and client'],
		answer: 'Capturing and bubbling'
	},
	{
		area: 'week4',
		question: 'A Python backend looks up a user by a username supplied in a request. Which approach keeps that value separate from the SQL syntax?',
		type: 'multiple-choice',
		options: [
			'Use a parameterized query and pass the username as a separate bound value.',
			'Run the database connection through an SSH tunnel and keep using string formatting.',
			'Add a UNIQUE constraint to the username column and keep using string formatting.',
			'Rely on a browser-side JavaScript validator before submitting the username.'
		],
		answer: 'Use a parameterized query and pass the username as a separate bound value.'
	},
	{
		area: 'week4',
		question: 'What is the difference between a session cookie and a persistent cookie?',
		type: 'multiple-choice',
		options: [
			'Session cookies cannot be sent over HTTPS.',
			'A session cookie has no explicit expiry and is normally removed at the end of the browser session. A persistent cookie has an expiry set with Expires or Max-Age.',
			'Persistent cookies can contain only numbers.',
			'Session cookies are stored on the server, while persistent cookies are stored only in browser memory.'
		],
		answer: 'A session cookie has no explicit expiry and is normally removed at the end of the browser session. A persistent cookie has an expiry set with Expires or Max-Age.'
	},
	{
		area: 'week4',
		question: 'On the same host and transport protocol, what do port numbers primarily distinguish?',
		type: 'multiple-choice',
		options: [
			'Different physical network interfaces.',
			'Different services or communication endpoints on the host.',
			'Different geographic data centres.',
			'Different physical routers on the internet backbone.'
		],
		answer: 'Different services or communication endpoints on the host.'
	},
	{
		area: 'week4',
		question: 'Which standard Unix command opens an encrypted remote shell session on a university server?',
		type: 'multiple-choice',
		options: ['telnet', 'http', 'ping', 'ftp', 'ssh'],
		answer: 'ssh'
	},
	{
		area: 'week4',
		question: 'Which character separates multiple key-value pairs in a typical URL query string?',
		type: 'multiple-choice',
		options: ['#', '&', ';', ':'],
		answer: '&'
	},
	// Week 5
	{
		area: 'week5',
		question: 'A script that uses document.querySelector() works in a browser but throws an error in plain Node.js. Why?',
		type: 'multiple-choice',
		options: [
			'Node.js only supports selectors written as regular expressions.',
			'Plain Node.js has no browser document or DOM tree.',
			'Express must parse a JSON body before document becomes available.',
			'The script must use CommonJS before it can access document.'
		],
		answer: 'Plain Node.js has no browser document or DOM tree.'
	},
	{
		area: 'week5',
		question: 'Which file declares Express as a dependency that another developer can install with npm?',
		type: 'multiple-choice',
		options: ['server.js', 'requirements.txt', 'package.json', 'views/books.ejs'],
		answer: 'package.json'
	},
	{
		area: 'week5',
		question: 'A helper module declares export const getBooks = … in database.js. How should server.js load that named export?',
		type: 'multiple-choice',
		options: ['import { getBooks } from "./database.js";', 'import getBooks from "./database.js";', 'export { getBooks } from "./database.js";', 'import "./database.js";'],
		answer: 'import { getBooks } from "./database.js";'
	},
	{
		area: 'week5',
		question: 'What happens when an async Node.js handler uses await with readFile() from node:fs/promises?',
		type: 'multiple-choice',
		options: [
			'The event loop stops until the file has been read.',
			'The handler immediately receives the file text before the read finishes.',
			'Node.js automatically converts the file contents into a JavaScript object.',
			'The handler waits for its result while the event loop can handle other work.'
		],
		answer: 'The handler waits for its result while the event loop can handle other work.'
	},
	{
		area: 'week5',
		question: 'What does Express add on top of the built-in Node.js HTTP server?',
		type: 'multiple-choice',
		options: [
			'A browser DOM for rendering pages inside the server process.',
			'Convenient routing and middleware so each handler can focus on the application logic.',
			'A relational database that replaces SQLite or PostgreSQL.',
			'A guarantee that all requests run on separate CPU cores.'
		],
		answer: 'Convenient routing and middleware so each handler can focus on the application logic.'
	},
	{
		area: 'week5',
		question: 'An Express logging middleware records an incoming request. What should it call to let the next middleware or route handler run?',
		type: 'multiple-choice',
		options: ['res.end()', 'res.send()', 'req.next()', 'next()'],
		answer: 'next()'
	},
	{
		area: 'week5',
		question: 'An Express POST route receives JSON and needs to read it from req.body. What should be registered before that route?',
		type: 'multiple-choice',
		options: ['app.use(express.static("public"))', 'app.set("view engine", "ejs")', 'app.use(express.json())', 'app.use(express.urlencoded({ extended: true }))'],
		answer: 'app.use(express.json())'
	},
	{
		area: 'week5',
		question: 'Which Express middleware parses a traditional form body sent as application/x-www-form-urlencoded?',
		type: 'multiple-choice',
		options: ['express.urlencoded()', 'express.json()', 'express.static()', 'express.Router()'],
		answer: 'express.urlencoded()'
	},
	{
		area: 'week5',
		question: 'An Express app registers app.use(express.static("public")). Which URL path normally serves the file public/styles.css?',
		type: 'multiple-choice',
		options: ['/public/styles.css', '/styles.css', '/views/styles.css', '/public?file=styles.css'],
		answer: '/styles.css'
	},
	{
		area: 'week5',
		question: 'In an Express route handler with parameters (req, res), which object do you use to set the outgoing HTTP status?',
		type: 'multiple-choice',
		options: ['req.params', 'req.body', 'req', 'res'],
		answer: 'res'
	},
	{
		area: 'week5',
		question: 'Which EJS tag runs a JavaScript loop without printing the loop statement into the generated HTML?',
		type: 'multiple-choice',
		options: ['<%= ... %>', '<%- ... %>', '<% ... %>', '{{ ... }}'],
		answer: '<% ... %>'
	},
	{
		area: 'week5',
		question: 'After configuring EJS as the view engine, how does an Express handler render views/books.ejs with an array called books?',
		type: 'multiple-choice',
		options: ['res.render("books", { books })', 'res.json({ books })', 'res.send("books")', 'express.static("views/books.ejs")'],
		answer: 'res.render("books", { books })'
	},
	{
		area: 'week5',
		question: 'Several EJS pages share the same navigation bar. How can you update that navigation in one place?',
		type: 'multiple-choice',
		options: [
			'Copy the navigation markup into a separate route handler for each page.',
			'Use the navigation markup as the name of each template.',
			'Store a different copy of the markup in each page’s route parameters.',
			'Put the markup in an EJS partial and include it in each page template.'
		],
		answer: 'Put the markup in an EJS partial and include it in each page template.'
	},
	{
		area: 'week5',
		question: 'What would the Network panel show for a catalogue page rendered by EJS compared with a browser client that fetches catalogue JSON?',
		type: 'multiple-choice',
		options: [
			'Both responses must be raw JSON because their original data came from a database.',
			'The EJS response already contains the catalogue HTML. The fetch response supplies data that browser JavaScript can render.',
			'The EJS response sends template source for the browser to compile.',
			'The JSON response already contains the rendered catalogue elements in the DOM.'
		],
		answer: 'The EJS response already contains the catalogue HTML. The fetch response supplies data that browser JavaScript can render.'
	},
	{
		area: 'week5',
		question: 'Two clients submit writes to different records in a single SQLite database file at the same time. What is the expected behaviour?',
		type: 'multiple-choice',
		options: [
			'SQLite always lets both writers modify the same database concurrently using row locks.',
			'SQLite sends one of the writes to a separate MySQL server.',
			'SQLite permits one writer at a time, so the other write must wait or retry if the database is busy.',
			'SQLite discards one write as a duplicate because both clients used the same file.'
		],
		answer: 'SQLite permits one writer at a time, so the other write must wait or retry if the database is busy.'
	},
	{
		area: 'week5',
		question: 'An Express catalogue stores orders in a module-level array. What happens to orders that exist only in that array when the Node.js process restarts?',
		type: 'multiple-choice',
		options: [
			'They are lost because the new process starts with fresh memory.',
			'They are restored from the JavaScript source file automatically.',
			'They are copied into package.json before the process stops.',
			'Express moves them to a persistent database on restart.'
		],
		answer: 'They are lost because the new process starts with fresh memory.'
	},
	{
		area: 'week5',
		question: 'A reverse proxy publishes a FastAPI app under /course-app. What does configuring root_path help Swagger UI do?',
		type: 'multiple-choice',
		options: [
			'Choose a port number for the underlying TCP socket.',
			'Change the server’s filesystem working directory.',
			'Allow every origin to read API responses.',
			'Use the public URL prefix when locating the OpenAPI schema.'
		],
		answer: 'Use the public URL prefix when locating the OpenAPI schema.'
	},
	{
		area: 'week5',
		question: 'You want more space between a card’s text and its border, and more space between the card and its neighbour. Which CSS properties should you change?',
		type: 'multiple-choice',
		options: [
			'Increase padding for the space inside the border and margin for the space outside.',
			'Increase margin for the space inside the border and padding for the space outside.',
			'Increase border width for the inside space and line height for the outside space.',
			'Increase margin for both spaces.'
		],
		answer: 'Increase padding for the space inside the border and margin for the space outside.'
	},
	{
		area: 'week5',
		question: 'In the DevTools network waterfall, which measurement covers waiting for the first byte of the HTTP response after sending the request?',
		type: 'multiple-choice',
		options: ['DNS lookup', 'Initial connection', 'Time to first byte (TTFB)', 'Content download'],
		answer: 'Time to first byte (TTFB)'
	},
	{
		area: 'week5',
		question: 'A form checks that a price is positive before submitting it. Where should the application enforce the same rule before saving the record?',
		type: 'multiple-choice',
		options: [
			'In a stylesheet that hides the form when its input is invalid.',
			'On the server, with a database constraint where appropriate.',
			'In the browser’s Network panel after the response arrives.',
			'In the page template after the record has already been saved.'
		],
		answer: 'On the server, with a database constraint where appropriate.'
	},
	// Week 6
	{
		area: 'week6',
		question: 'What protection does the SameSite=Lax cookie attribute provide?',
		type: 'multiple-choice',
		options: [
			'It restricts cookies to unencrypted HTTP connections.',
			'It limits cookies to localhost.',
			'It withholds cookies on most cross-site requests while allowing top-level navigations that use a safe method, which helps mitigate CSRF.',
			'It makes cookies expire after 60 seconds of inactivity.'
		],
		answer: 'It withholds cookies on most cross-site requests while allowing top-level navigations that use a safe method, which helps mitigate CSRF.'
	},
	{
		area: 'week6',
		question: 'What does the HttpOnly flag specifically prevent?',
		type: 'multiple-choice',
		options: [
			'Client-side JavaScript reading the flagged cookie through document.cookie.',
			'Packet sniffing over an unencrypted connection.',
			'SQL injection in a database query.',
			'A server making an unintended outbound request.'
		],
		answer: 'Client-side JavaScript reading the flagged cookie through document.cookie.'
	},
	{
		area: 'week6',
		question: 'Which HTTP response header tells a browser to store a session cookie?',
		type: 'multiple-choice',
		options: ['Content-Security-Policy', 'X-Session-Store', 'Authorization', 'Set-Cookie'],
		answer: 'Set-Cookie'
	},
	{
		area: 'week6',
		question: 'What does it mean that HTTP is stateless?',
		type: 'multiple-choice',
		options: [
			'HTTP does not itself tell a server which earlier requests belong to the same application session.',
			'Web servers cannot retain information in a database.',
			'Browsers clear their caches after each response.',
			'Routers assign the client a new public IP address after every TCP handshake.'
		],
		answer: 'HTTP does not itself tell a server which earlier requests belong to the same application session.'
	},
	{
		area: 'week6',
		question: 'What is the purpose of Jinja autoescaping when Flask renders an HTML template?',
		type: 'multiple-choice',
		options: [
			'It escapes characters such as < and & so an interpolated value in HTML text displays as text rather than becoming markup.',
			'It verifies that every closing tag conforms to XHTML 1.1.',
			'It minifies whitespace to reduce download size.',
			'It encrypts the HTML before it is sent.'
		],
		answer: 'It escapes characters such as < and & so an interpolated value in HTML text displays as text rather than becoming markup.'
	},
	{
		area: 'week6',
		question: 'Why is Jinja2 considered a compiled template engine?',
		type: 'multiple-choice',
		options: [
			'It parses the template into an abstract syntax tree and compiles it into executable Python code.',
			'It replaces placeholders using only regular expressions on every render.',
			'It uses SQL queries to rewrite placeholders in the template file.',
			'It compiles templates into C++ libraries using GCC.'
		],
		answer: 'It parses the template into an abstract syntax tree and compiles it into executable Python code.'
	},
	{
		area: 'week6',
		question: 'How did early Node.js differ from server-side ecosystems organized around gateway interfaces such as WSGI or Rack?',
		type: 'multiple-choice',
		options: [
			'Node.js exposed a built-in asynchronous HTTP server API through http.createServer().',
			'Node.js required an Apache JavaScript module to process HTTP requests.',
			'Node.js could not run JavaScript outside a browser until WebAssembly arrived.',
			'All Node.js applications had to implement the CommonJS JSGI specification.'
		],
		answer: 'Node.js exposed a built-in asynchronous HTTP server API through http.createServer().'
	},
	{
		area: 'week6',
		question: 'Who builds the WSGI environ dictionary, and what does it contain?',
		type: 'multiple-choice',
		options: [
			'SQLite supplies it as a read-only JSON snapshot of the database.',
			'The WSGI server or gateway builds it for the request using CGI-style metadata and WSGI fields.',
			'Jinja builds it to store template variables.',
			'The browser’s JavaScript engine creates it and sends it over the network.'
		],
		answer: 'The WSGI server or gateway builds it for the request using CGI-style metadata and WSGI fields.'
	},
	{
		area: 'week6',
		question: 'Which pair of positional arguments does a WSGI server pass to the application callable under PEP 3333?',
		type: 'multiple-choice',
		options: [
			'A raw TCP socket and a bytecode object.',
			'An HTTP server class and its configuration.',
			'An environ dictionary and a start_response callback.',
			'A raw request string and the process’s standard output stream.'
		],
		answer: 'An environ dictionary and a start_response callback.'
	},
	{
		area: 'week6',
		question: 'Why did the traditional CGI execution model scale poorly under high request concurrency?',
		type: 'multiple-choice',
		options: [
			'CGI could send only plain text.',
			'Launching a separate program for each request repeated process and interpreter startup costs.',
			'CGI could only read data from local files.',
			'CGI required every handler to create multiple threads.'
		],
		answer: 'Launching a separate program for each request repeated process and interpreter startup costs.'
	},
	{
		area: 'week6',
		question: 'What information does a WSGI application pass to start_response before yielding its first body bytes?',
		type: 'multiple-choice',
		options: ['The incoming request method and path.', 'The full request body.', 'The database result and template name.', 'The HTTP status and response headers.'],
		answer: 'The HTTP status and response headers.'
	},
	{
		area: 'week6',
		question: 'What does signing Flask’s default client-side session cookie provide?',
		type: 'multiple-choice',
		options: [
			'Confidentiality for every value stored in the cookie.',
			'A way for the server to verify integrity while the cookie contents remain readable.',
			'Automatic permission checks for every protected route.',
			'A guarantee that the browser keeps the cookie forever.'
		],
		answer: 'A way for the server to verify integrity while the cookie contents remain readable.'
	},
	{
		area: 'week6',
		question: 'Which Werkzeug workflow is appropriate for registering a user and later checking their password?',
		type: 'multiple-choice',
		options: [
			'Store the password directly and compare it on login.',
			'Store the password in the signed session cookie and read it back.',
			'Store the result of generate_password_hash() and verify the submitted password with check_password_hash().',
			'Create a fresh salted hash at login and compare the two hash strings directly.'
		],
		answer: 'Store the result of generate_password_hash() and verify the submitted password with check_password_hash().'
	},
	{
		area: 'week6',
		question: 'Why should a Python decorator for Flask routes use functools.wraps?',
		type: 'multiple-choice',
		options: [
			'It preserves metadata such as the original function name, which Flask can use as the endpoint name.',
			'It turns a synchronous Flask route into an asynchronous one.',
			'It confirms the user is authenticated before invoking the wrapper.',
			'It automatically sets the route’s HTTP methods.'
		],
		answer: 'It preserves metadata such as the original function name, which Flask can use as the endpoint name.'
	},
	{
		area: 'week6',
		question: 'How should a Flask route pass a form value to a SQLite query so the database treats it as data?',
		type: 'multiple-choice',
		options: [
			'Insert the value into the SQL string with an f-string.',
			'Send the SQL text to the browser for the client to complete.',
			'Use the submitted value to choose the SQL command itself.',
			'Use a placeholder in the SQL statement and bind the form value separately.'
		],
		answer: 'Use a placeholder in the SQL statement and bind the form value separately.'
	},
	{
		area: 'week6',
		question: 'What pattern lets Flask reuse a database connection during a request and clean it up afterward?',
		type: 'multiple-choice',
		options: [
			'Put the connection in a session cookie and close it on logout.',
			'Store the connection on Flask’s g object for the application context and close it in teardown_appcontext.',
			'Open one never-closed global connection for the entire process.',
			'Let each Jinja template open its own connection.'
		],
		answer: 'Store the connection on Flask’s g object for the application context and close it in teardown_appcontext.'
	},
	{
		area: 'week6',
		question: 'Why give a trusted upstream lookup a timeout in a Flask route?',
		type: 'multiple-choice',
		options: [
			'To make the remote service cache the result indefinitely.',
			'To guarantee the response contains valid coordinates.',
			'To limit how long the route waits for an unresponsive service and handle the failure.',
			'To convert the response from JSON into HTML.'
		],
		answer: 'To limit how long the route waits for an unresponsive service and handle the failure.'
	},
	{
		area: 'week6',
		question: 'Why does the lecture’s SVG map invert latitude when calculating its vertical coordinate?',
		type: 'multiple-choice',
		options: [
			'Higher latitudes go north, but SVG y coordinates increase downward.',
			'Longitude becomes negative east of the prime meridian.',
			'SVG requires all y positions to be negative.',
			'Latitude controls the horizontal position of each point.'
		],
		answer: 'Higher latitudes go north, but SVG y coordinates increase downward.'
	},
	{
		area: 'week6',
		question: 'On an 800 by 400 SVG map with the lecture’s equirectangular projection, where is the point at latitude 0° and longitude 0°?',
		type: 'multiple-choice',
		options: ['(0, 0)', '(200, 400)', '(800, 400)', '(400, 200)'],
		answer: '(400, 200)'
	},
	{
		area: 'week6',
		question: 'Why does the lecture use a deterministic spiral offset for map markers that share coordinates?',
		type: 'multiple-choice',
		options: [
			'To replace the original geographic coordinates with different locations.',
			'To make nearby markers distinguishable while keeping their displayed positions stable across reloads.',
			'To sort markers by the time of the upstream response.',
			'To convert latitude and longitude into a database primary key.'
		],
		answer: 'To make nearby markers distinguishable while keeping their displayed positions stable across reloads.'
	},
	// Week 7
	{
		area: 'week7',
		question: 'A visitor sets an ordinary PHP variable during one request. What value does the next request inherit from that variable?',
		type: 'multiple-choice',
		options: [
			'The last value set by that visitor.',
			'No value. Ordinary script variables are created anew for each request.',
			'The last value cached by OPcache.',
			'The value sent in the previous response body.'
		],
		answer: 'No value. Ordinary script variables are created anew for each request.'
	},
	{
		area: 'week7',
		question: 'What does Zend OPcache reuse when several requests run the same unchanged PHP script?',
		type: 'multiple-choice',
		options: ['The HTML generated for the first visitor.', 'The form fields from the previous request.', 'The script’s compiled opcodes.', 'A snapshot of the first visitor’s session.'],
		answer: 'The script’s compiled opcodes.'
	},
	{
		area: 'week7',
		question: 'On the lecture’s PHP-enabled server, which action makes a new about.php page available through file-based routing?',
		type: 'multiple-choice',
		options: ['Place about.php in the web-served directory.', 'Register an /about.php decorator.', 'Start a separate PHP process listening on a new port.', 'Add the page name to a session cookie.'],
		answer: 'Place about.php in the web-served directory.'
	},
	{
		area: 'week7',
		question: 'A request to toolbox.php?view=compact also submits a standard POST form. Where does PHP expose the view query parameter?',
		type: 'multiple-choice',
		options: ["$_POST['view']", "$_FILES['view']", "$_SESSION['view']", "$_GET['view']"],
		answer: "$_GET['view']"
	},
	{
		area: 'week7',
		question: 'What does the PHP expression "42" === 42 evaluate to?',
		type: 'multiple-choice',
		options: [
			'true, because both operands represent the same number.',
			'false, because the operands have different types.',
			'42, because the string is converted to an integer.',
			'A TypeError, because the operands have different types.'
		],
		answer: 'false, because the operands have different types.'
	},
	{
		area: 'week7',
		question: 'A file with declare(strict_types=1) calls a user-defined function expecting an int. What happens if it passes the string "80"?',
		type: 'multiple-choice',
		options: ['The function receives the integer 80.', 'The function receives the string unchanged.', 'PHP raises a TypeError.', 'PHP substitutes the integer 0.'],
		answer: 'PHP raises a TypeError.'
	},
	{
		area: 'week7',
		question: 'Which flags should the lecture’s log writer combine to keep earlier entries and take an exclusive lock during a write?',
		type: 'multiple-choice',
		options: ['FILE_APPEND | LOCK_EX', 'LOCK_SH | FILE_APPEND', 'LOCK_EX alone', 'FILE_USE_INCLUDE_PATH alone'],
		answer: 'FILE_APPEND | LOCK_EX'
	},
	{
		area: 'week7',
		question: 'A toolbox user only wants to know whether their input is syntactically valid JSON. Which PHP 8.3 call directly answers that question?',
		type: 'multiple-choice',
		options: ['json_encode($input)', 'is_array($input)', 'trim($input)', 'json_validate($input)'],
		answer: 'json_validate($input)'
	},
	{
		area: 'week7',
		question: 'Which function checks a submitted password against a stored hash produced by password_hash()?',
		type: 'multiple-choice',
		options: ['hash_file()', 'password_verify()', 'base64_decode()', 'password_hash() with a new salt followed by string comparison'],
		answer: 'password_verify()'
	},
	{
		area: 'week7',
		question: 'A search form builds a URL from several values, including a phrase containing an ampersand. Which function builds the query string from the array of fields?',
		type: 'multiple-choice',
		options: ['parse_url()', 'htmlspecialchars()', 'http_build_query()', 'parse_str()'],
		answer: 'http_build_query()'
	},
	{
		area: 'week7',
		question: 'In the URL https://example.org/tools?mode=json#result, which value does parse_url() identify as the fragment?',
		type: 'multiple-choice',
		options: ['result', 'mode=json', '/tools', 'example.org'],
		answer: 'result'
	},
	{
		area: 'week7',
		question: 'A UTF-8 string contains a single precomposed é, encoded in two bytes. What do strlen() and mb_strlen() with UTF-8 return, respectively?',
		type: 'multiple-choice',
		options: ['1 and 1', '1 and 2', '2 and 2', '2 and 1'],
		answer: '2 and 1'
	},
	{
		area: 'week7',
		question: 'Which expression generates 32 hexadecimal characters from 16 bytes of cryptographically secure randomness?',
		type: 'multiple-choice',
		options: ['base64_encode(random_bytes(16))', 'bin2hex(random_bytes(16))', 'bin2hex(random_bytes(32))', 'strlen(random_bytes(16))'],
		answer: 'bin2hex(random_bytes(16))'
	},
	{
		area: 'week7',
		question: 'Six toolbox forms submit to the same PHP file. How does the script identify which tool should handle a submission?',
		type: 'multiple-choice',
		options: [
			'It uses the order of forms in the rendered HTML.',
			'It matches the heading of the visible card.',
			'It reads the tool identifier submitted in a named hidden field.',
			'It selects a handler based on the length of the input.'
		],
		answer: 'It reads the tool identifier submitted in a named hidden field.'
	},
	{
		area: 'week7',
		question: 'After a formatting error, how can the JSON tool safely redisplay the submitted text inside its textarea?',
		type: 'multiple-choice',
		options: [
			'Escape the submitted text with htmlspecialchars() when rendering it.',
			'Insert the submitted text directly into the HTML.',
			'Render the hash of the text inside the textarea.',
			'Set the textarea placeholder to the name of the POST field.'
		],
		answer: 'Escape the submitted text with htmlspecialchars() when rendering it.'
	},
	{
		area: 'week7',
		question: 'Which storage choice lets the toolbox show each visitor their own recent activity across requests?',
		type: 'multiple-choice',
		options: [
			'An ordinary local array initialised on each request.',
			'One shared history file displayed to every visitor.',
			'An entry in the opcode cache keyed by script name.',
			'A history array in $_SESSION after session_start().'
		],
		answer: 'A history array in $_SESSION after session_start().'
	},
	{
		area: 'week7',
		question: 'The toolbox suggests function names using levenshtein(). How should it rank candidates to show the closest spelling first?',
		type: 'multiple-choice',
		options: [
			'By decreasing number of characters.',
			'By increasing number of single-character edits needed.',
			'By decreasing number of matching initial letters only.',
			'By alphabetical order of the function names.'
		],
		answer: 'By increasing number of single-character edits needed.'
	},
	{
		area: 'week7',
		question: 'The toolbox wants to display a submitted PHP snippet in colour. Which function formats the source without executing it?',
		type: 'multiple-choice',
		options: ['json_encode()', 'strtotime()', 'highlight_string()', 'hash_file()'],
		answer: 'highlight_string()'
	},
	{
		area: 'week7',
		question: 'A tool saves a user’s note in SQLite through PDO. How should it pass the note text to an INSERT statement?',
		type: 'multiple-choice',
		options: [
			'Prepare SQL with a placeholder and supply the note as a bound value.',
			'Escape the note for HTML and concatenate it into the SQL.',
			'Put the note in quotes using PHP string interpolation.',
			'Use the note text as the SQL statement to prepare.'
		],
		answer: 'Prepare SQL with a placeholder and supply the note as a bound value.'
	},
	{
		area: 'week7',
		question: 'A deployed toolbox hits a database error. Which response gives the maintainer diagnostic details while protecting internal paths?',
		type: 'multiple-choice',
		options: [
			'Include the full stack trace in the visitor’s error page.',
			'Put the database path in an HTML comment.',
			'Discard the error and show a success message.',
			'Log the details on the server and show the visitor a generic error.'
		],
		answer: 'Log the details on the server and show the visitor a generic error.'
	}
];
