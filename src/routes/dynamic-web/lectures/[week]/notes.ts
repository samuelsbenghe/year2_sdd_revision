import type { DynamicWebWeek } from '$lib/dynamic-web';

type LectureNotes = {
	overview: string;
	sections: {
		title: string;
		concepts: { title: string; description: string }[];
	}[];
	practice: { title: string; description: string; tasks: string[] };
};

export const lectureNotes: Record<DynamicWebWeek, LectureNotes> = {
	1: {
		overview:
			'Follow a browser request from the client to the server and back. This lecture introduces the layers that carry the request, the fields that give it meaning, and the Unix tools used to inspect the server that handles it.',
		sections: [
			{
				title: 'Client-Server Architecture & Networking',
				concepts: [
					{ title: 'Tiers', description: 'A web app can separate presentation, application logic, and data storage. Follow the request through those responsibilities in a three-tier design.' },
					{ title: 'DNS, Ports & Sockets', description: 'DNS looks up the host address. The destination port identifies the service, and its listening socket receives incoming connections.' },
					{ title: 'TCP/IP Layers', description: 'HTTP defines application messages. TCP delivers an ordered byte stream, IP routes packets, and the link layer carries frames across a local link.' }
				]
			},
			{
				title: 'HTTP Methods, Status Codes & URLs',
				concepts: [
					{ title: 'Requests & Responses', description: 'A request identifies its method and target. A response reports a status. Both can carry headers and a body.' },
					{ title: 'Safe vs Idempotent', description: 'GET asks to read a resource. Repeating an idempotent operation such as PUT has the same intended effect as making it once.' },
					{ title: 'Status Code Families', description: 'Read 2xx as success, 3xx as redirection, 4xx as a request problem, and 5xx as a server problem.' },
					{ title: 'URL Anatomy', description: 'Separate scheme, host, port, path, query, and fragment. Percent-encode data where a character would otherwise have structural meaning.' },
					{ title: 'HTTP State', description: 'Each HTTP request carries its own context. Cookies can associate separate requests with a session.' }
				]
			},
			{
				title: 'Unix & Remote Access',
				concepts: [
					{ title: 'Files & Permissions', description: 'Use owner, group, and other permission bits to reason about which processes can read files or traverse directories.' },
					{ title: 'SSH', description: 'SSH encrypts remote shell access. With key-based authentication, keep the private key on your machine and register the public key on the server.' },
					{ title: 'Diagnosing a Request', description: 'Compare the HTTP status and headers with the URL path, file permissions, and server logs to locate a problem.' }
				]
			}
		],
		practice: {
			title: 'Static and Dynamic Server Practice',
			description: 'Compare the three setups from Lab 1 and use the lecture’s HTTP and Unix concepts to explain what you observe.',
			tasks: [
				'Compare the page in public_html with the file served by Python’s static server. Record the host, port, request path, status, and content type for each.',
				'Explain what the web server must be able to do with the public_html directory and the HTML file inside it. How would you distinguish a permissions problem from a missing file?',
				'Extend your Python handler with a time-based greeting. Compare two GET responses and explain where each response body is produced.'
			]
		}
	},
	2: {
		overview:
			'Static hosting serves prepared files. A dynamic back end can run code for each request, validate incoming data, and read or update application state. This lecture uses FastAPI to connect those decisions to a working browser client.',
		sections: [
			{
				title: 'Static, Dynamic & Hybrid Rendering',
				concepts: [
					{ title: 'Static Generation', description: 'Build HTML in advance and serve it as files. This works well for content that can be shared across visitors.' },
					{ title: 'Server-Side Rendering', description: 'Generate HTML for the current request. A server can render content using request-specific data before the browser receives the page.' },
					{ title: 'Client-Side Rendering & Hydration', description: 'CSR builds the interface in the browser. Hydration attaches client-side behaviour to HTML that was already rendered.' }
				]
			},
			{
				title: 'Python Gateways & FastAPI',
				concepts: [
					{ title: 'WSGI & ASGI', description: 'WSGI specifies a synchronous Python web interface. ASGI supports asynchronous communication and protocols such as WebSockets.' },
					{ title: 'Concurrent I/O', description: 'An async handler can yield while it awaits non-blocking I/O. Blocking code inside an async handler can stall other work on the same event loop.' },
					{ title: 'Validation & Documentation', description: 'FastAPI uses declared types and Pydantic models to validate input, report invalid requests, and generate an OpenAPI schema.' }
				]
			},
			{
				title: 'API Contracts & Browser Integration',
				concepts: [
					{ title: 'API Contract', description: 'Agree on the method, path, parameters, payload shape, and status codes so the front end and back end can be developed independently.' },
					{ title: 'Fetch & CORS', description: 'Use fetch() to request data and check response.ok. CORS lets a server grant browsers permission to read responses from specified origins.' },
					{ title: 'Server State & Scaling', description: 'Process memory is temporary and local to one process. Identify which state needs shared storage before adding more server instances.' }
				]
			}
		],
		practice: {
			title: 'FastAPI Lab Practice',
			description: 'Use the Lab 2 greeting route and in-memory CRUD API to check validation, browser access, and the API contract.',
			tasks: [
				'Try numeric and non-numeric values for repeat on your greeting route. Read the successful JSON and the 422 response, then explain when FastAPI validates the input.',
				'Call your API from your own front end on a different port. Use DevTools to compare the request’s Origin with the response’s Access-Control-Allow-Origin after you allow that front end.',
				'Use Swagger UI to create, read, and delete an item. Record each method and status, then restart the server and check which data survives.'
			]
		}
	},
	3: {
		overview:
			'Move application state from volatile memory into a relational database. The lecture develops a bookshop schema, then uses that schema to explain keys, normalisation, and set-based SQL queries.',
		sections: [
			{
				title: 'Relational Modelling & Integrity',
				concepts: [
					{ title: 'Tables & Cardinality', description: 'Use an entity-relationship diagram to map one-to-one, one-to-many, and many-to-many relationships.' },
					{
						title: 'Primary & Foreign Keys',
						description: 'A primary key identifies a row. A foreign key ties a row to a valid reference and can declare what happens when the referenced row is deleted.'
					},
					{ title: 'Junction Tables', description: 'A book can have many genres, and a genre can contain many books. A book_genres junction table records each pair using a composite key.' }
				]
			},
			{
				title: 'Normalisation & SQL Basics',
				concepts: [
					{
						title: 'First to Third Normal Form',
						description: 'Store atomic values, make non-key columns depend on the whole key, and move facts that depend on another non-key column into their own table.'
					},
					{ title: 'Define, Change & Query', description: 'CREATE TABLE defines the schema. INSERT, UPDATE, and DELETE change rows. SELECT reads a result set.' },
					{ title: 'Filtering & Aggregation', description: 'WHERE filters individual rows before grouping. GROUP BY forms groups, and HAVING filters the aggregated groups.' }
				]
			},
			{
				title: 'Joins & Database Engines',
				concepts: [
					{ title: 'INNER JOIN', description: 'Returns matched rows across the tables. Join books to authors through the author foreign key.' },
					{ title: 'LEFT JOIN', description: 'Keeps each row from the left table. Columns from the right table are NULL when there is no match.' },
					{
						title: 'SQLite, PostgreSQL & MySQL',
						description: 'SQLite is embedded and stores data in a file. PostgreSQL and MySQL run as separate server processes and have their own SQL dialect details.'
					}
				]
			}
		],
		practice: {
			title: 'SQLite Bookshop Lab Practice',
			description: 'Use the normalised bookshop schema from Lab 3 to check what the lecture’s keys, joins, and grouping rules do in practice.',
			tasks: [
				'Draw the four bookshop tables and label their keys. With foreign key enforcement enabled, predict which constraints apply to a duplicate book–genre pair and a genre assignment for a missing book.',
				'Trace a join from books through book_genres to genres. Run it with INNER JOIN and then LEFT JOIN, and check what happens to a book with no genre.',
				'Group genre names into one row per book. Add a condition on the number of genres and explain where WHERE and HAVING act in the query.'
			]
		}
	},
	4: {
		overview:
			'Trace a request from electrical signals on a local link to the HTTP activity shown in browser DevTools. The lecture separates the physical and data link layers that Week 1 groups together in its four-layer model.',
		sections: [
			{
				title: 'Physical Signals & Local Networks',
				concepts: [
					{ title: 'Signals & Timing', description: 'A receiver needs agreement on signal encoding, sampling, and framing before it can interpret transmitted bits.' },
					{ title: 'Character Encoding', description: 'ASCII and UTF-8 map bit patterns to characters. UTF-8 uses a variable number of bytes and preserves the ASCII byte values.' },
					{ title: 'Ethernet & Switching', description: 'Ethernet frames use MAC addresses on a local link. A switch learns which ports lead to destination MAC addresses.' }
				]
			},
			{
				title: 'Routing, Transport & Encapsulation',
				concepts: [
					{ title: 'IP Routing', description: 'Routers use destination IP addresses and routing tables to choose the next hop across networks.' },
					{ title: 'Reliable TCP', description: 'The handshake establishes a connection. Sequence numbers, acknowledgements, and retransmission support an ordered byte stream.' },
					{ title: 'Encapsulation', description: 'Application data is carried by transport data units, which travel in IP packets inside link-layer frames.' }
				]
			},
			{
				title: 'Browser DevTools',
				concepts: [
					{ title: 'Source vs Live DOM', description: 'The delivered HTML is the starting point. The Elements panel shows the current DOM after parsing and JavaScript updates.' },
					{ title: 'Events & Fetch', description: 'Code can listen for user events, send a request with fetch(), and update the DOM when a response arrives.' },
					{ title: 'Network Waterfall', description: 'Inspect methods, status codes, headers, and timing. Time to first byte includes more than server or database work alone.' }
				]
			}
		],
		practice: {
			title: 'DevTools Lab Practice',
			description: 'Use your Lab 4 sandbox page to connect a browser interaction to the live DOM and the network stack from the lecture.',
			tasks: [
				'Change a card’s padding in the Elements panel. Identify the affected part of the box model and check which changes survive a reload.',
				'Use the lab button to fetch data and display a result. Compare the new element in the live DOM with what appears in View Page Source.',
				'Inspect the button’s request in Network. Identify the remote address, HTTP status, and response encoding, then explain what connection setup and time to first byte each measure.'
			]
		}
	},
	5: {
		overview:
			'Use JavaScript on the server with Node.js and Express, then generate views with EJS. The second half revisits API design, databases, and browser inspection to prepare for reading week and the formative lab.',
		sections: [
			{
				title: 'Node.js & Express',
				concepts: [
					{ title: 'Runtime & Modules', description: 'Node.js runs JavaScript outside the browser and provides APIs such as node:fs. package.json describes dependencies and project scripts.' },
					{ title: 'Routes & Parameters', description: 'Express maps methods and paths to handlers. A path parameter identifies a part of the route, while query parameters refine the request.' },
					{ title: 'Middleware', description: 'Middleware runs in registration order. Place logging, static-file handling, or body parsing before routes that depend on them.' }
				]
			},
			{
				title: 'EJS & Application Architecture',
				concepts: [
					{ title: 'Server-Rendered Views', description: 'Pass data to an EJS template to generate HTML on the server. Use partials for shared pieces of a page.' },
					{ title: 'JSON API vs HTML', description: 'An API exposes data to independent clients. Server-rendered routes can send finished HTML directly to the browser.' },
					{
						title: 'Persistent State',
						description: 'Use a database for records that should survive restarts. Compare an embedded SQLite file with a separate database server as write concurrency grows.'
					}
				]
			},
			{
				title: 'Formative Review Topics',
				concepts: [
					{ title: 'HTTP & Validation', description: 'Explain safe and idempotent methods, identify status code families, and distinguish browser feedback from server-side validation.' },
					{ title: 'SQL', description: 'Trace how joins and junction tables affect result sets. Explain the different stages at which WHERE and HAVING filter data.' },
					{ title: 'Browser Inspection', description: 'Use DevTools to tell a layout or DOM issue from an HTTP error and inspect the request timeline.' }
				]
			}
		],
		practice: {
			title: 'Formative Revision Practice',
			description: 'Use these independent prompts before attempting the Level 6 formative lab. Apply the lecture’s architecture review to a small inventory app.',
			tasks: [
				'Sketch an Express route that renders an EJS inventory page and a separate route that returns JSON. Explain when a browser client would need CORS to read the JSON.',
				'Design a request to set the quantity of an existing item. Use HTTP method semantics to predict the final state if an identical request is retried.',
				'Imagine several users save inventory changes while a browser request takes longer than expected. Explain what the DevTools waterfall can tell you and how concurrent writes might differ between SQLite and MySQL.'
			]
		}
	},
	6: {
		overview:
			'The ThreatMap lab brings a Flask request, user authentication, an upstream lookup, SQLite storage, and an SVG map into one application. Follow the data through each boundary to see which checks belong where.',
		sections: [
			{
				title: 'Gateways, Flask & Jinja',
				concepts: [
					{
						title: 'CGI to WSGI',
						description: 'Classic CGI starts a process to run each request. WSGI gives a persistent Python application a standard contract for receiving request data and returning responses.'
					},
					{ title: 'Flask Request Handling', description: 'Flask turns the WSGI environment into objects that route handlers can use to read request data and build responses.' },
					{ title: 'Jinja Templates', description: 'Jinja builds the HTML and SVG from application data. Keep autoescaping enabled for HTML and escape output for the context where it appears.' }
				]
			},
			{
				title: 'Authentication & Session State',
				concepts: [
					{ title: 'Signed Sessions', description: 'Flask’s default client-side session cookie is signed for integrity. Its contents can still be read, so keep sensitive data out of the cookie.' },
					{
						title: 'Cookie Flags & Password Storage',
						description: 'Review HttpOnly, Secure, and SameSite. Use a dedicated password-hashing function with a salt, such as the one provided by Werkzeug.'
					},
					{ title: 'Route Guards', description: 'A login decorator checks the session before a protected handler runs. functools.wraps preserves the wrapped handler’s metadata.' }
				]
			},
			{
				title: 'Network Boundaries & Persistence',
				concepts: [
					{ title: 'Trusted Proxy Headers', description: 'Trust forwarded client details only when they come through a configured reverse proxy that controls those headers.' },
					{ title: 'Outbound Request Safety', description: 'Use a fixed upstream service where possible, validate destination addresses, restrict outbound access, and set request timeouts.' },
					{ title: 'SQL Parameters', description: 'Bind values to prepared SQL statements. Keep database connections tied to the request lifecycle and release them during teardown.' }
				]
			},
			{
				title: 'SVG Mapping',
				concepts: [
					{ title: 'Projecting Coordinates', description: 'An equirectangular projection maps longitude to the horizontal axis and latitude to the vertical axis.' },
					{ title: 'Screen Coordinates', description: 'SVG y coordinates increase downwards. Account for that when mapping northern latitudes toward the top of the canvas.' },
					{ title: 'Overlapping Markers', description: 'The lab uses a deterministic spiral offset to make markers at the same projected position easier to distinguish.' }
				]
			}
		],
		practice: {
			title: 'ThreatMap Lab Practice',
			description: 'Use your local Flask and SVG app to check the lecture’s session, persistence, and projection concepts with sample data.',
			tasks: [
				'Register a test user and check dashboard access before login, after login, and after logout. Explain what the signed session contributes to the route guard.',
				'Use a fixed sample response in your local app. Trace the lookup through validation, a parameterised SQLite write, and the values passed into the Jinja template.',
				'Plot two sample points on the SVG canvas, one north and one south of the equator. Predict the vertical order before rendering and explain how you would display two records at the same point.'
			]
		}
	},
	7: {
		overview:
			'Compare Flask’s persistent application process with PHP’s request-scoped execution model. The lecture builds a developer toolbox from built-in PHP functions, then uses the resulting forms to review validation, output escaping, and state.',
		sections: [
			{
				title: 'PHP Request Handling',
				concepts: [
					{ title: 'File-Based Routing', description: 'In the lecture’s deployment model, a URL maps to a .php file and the server runs the script to generate the response.' },
					{ title: 'Request Scope & OPcache', description: 'Ordinary variables are scoped to the request. OPcache can reuse compiled script bytecode across requests.' },
					{ title: 'Superglobals & Types', description: 'Read query and form inputs from $_GET and $_POST. Validate the values and use strict comparisons where type coercion would be surprising.' }
				]
			},
			{
				title: 'Built-In Tools & the Dashboard',
				concepts: [
					{ title: 'JSON, URLs & Time', description: 'Built-in functions can validate and format JSON, decompose URLs, and convert timestamps into human-readable dates.' },
					{
						title: 'Encodings, Checksums & Passwords',
						description: 'Base64 and URL encoding change representation. A file checksum checks data integrity. Use password_hash() for storing passwords.'
					},
					{ title: 'Sticky Forms & Sessions', description: 'Repopulate form fields with escaped values after submission. Use a session when the toolbox needs history to survive across requests.' }
				]
			},
			{
				title: 'Safer Forms & Persistence',
				concepts: [
					{ title: 'Validation & Escaping', description: 'Validate at the server boundary, escape untrusted values before inserting them into HTML, and keep detailed errors in server logs.' },
					{ title: 'CSRF & File Boundaries', description: 'Use server-verified CSRF tokens for state-changing forms. Restrict file operations to intended directories and validate uploads.' },
					{ title: 'PDO & SQLite', description: 'Use PDO prepared statements for values, and use a database when data needs to outlive the request or session.' }
				]
			}
		],
		practice: {
			title: 'Developer Toolbox Lab Practice',
			description: 'Use Lab 7’s toolbox.php to connect PHP’s request lifecycle and built-in functions to the behaviour of the individual forms.',
			tasks: [
				'Submit the lab’s JSON and hashing forms separately. Trace how the posted tool field selects a handler, and check where invalid JSON is reported and submitted text is escaped.',
				'Compare the byte length and character count reported by your text analyser for a value containing é. Explain why the counts differ and check what the slug tool produces.',
				'Add a short session-backed activity log from the lab extension. Reload the page and then open a separate private browser window to see which history is available.'
			]
		}
	}
};
