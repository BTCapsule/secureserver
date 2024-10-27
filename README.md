# SecureServer

A secure Node.js server implementation featuring multi-user authentication, PIN protection, IP blacklisting, and real-time device authorization.

## Features

- 🔐 Multi-user authentication system
- 📱 PIN-based access control
- 🛡️ IP blacklisting for denied access attempts
- 🔄 Real-time WebSocket notifications
- 🌐 HTTPS with auto-generated SSL certificates
- ⚡ Rate limiting protection
- 🔑 Automatic session key rotation
- 👥 Device authorization prompts


## Security Architecture

### Cookie-Based Secret Management
The server uses a dual-cookie system for secure authentication and data encryption:

- **Secret Cookie**: Stores a unique hash that identifies the user's secret file. Stored on the browser in the in `.secret` file.

- **Encrypt Cookie**: Contains the encryption key hash used to decrypt the `.secret` file on the server. Stored only on authorized browsers.
- Cookies are secure, same-site restricted, and HTTPS-only

### Secret File Encryption
- User data is encrypted using AES-256-CBC encryption
- Each user's data is stored in a separate `.secret` file
- Files are encrypted using the encrypt cookie as the key
- Contains user's secret hash and PIN (if set)

### Session Security
- Automatic key rotation on successful PIN verification
- New secret and encrypt hashes generated each session
- Secret files are automatically re-encrypted with new keys
- Session cookies expire after 1 hour
- Rate limiting prevents brute force attempts








