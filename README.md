# SecureServer

A secure Node.js server implementation featuring real-time device authorization and cookie-based encryption.

## Core Security Architecture


### User Experience Flow

1. Server starts and displays its public IP address
2. When a user visits the IP on their device:
   - Page loads `main.html` and waits for authorization
   - Server prompts existing users via WebSocket for approval
   - Server also provides CLI prompt for approval
   - If approved, user proceeds to PIN creation and index.html
   - If denied, IP is blacklisted


### Dual-Cookie Encryption System
- **Secret Cookie**: Identifies user's encrypted `.secret` file
- **Encrypt Cookie**: Contains the only key capable of decrypting the user's data
- No decryption keys are ever stored on the server
- Even with full server access, files remain encrypted without client cookies

### How It Works
1. User creates PIN
2. Server generates two SHA-256 hashes:
   - `secret` hash stored in `.secret` file and browser
   - `encrypt` hash stored only in browser
3. `.secret` file is encrypted using `encrypt` hash as key
4. To access data:
   - Browser sends both cookies
   - `encrypt` cookie decrypts `.secret` file
   - `secret` cookie verifies user identity
   - PIN provides final authentication layer

### Security Features
- Hourly key rotation with new encryption hashes
- Real-time notifications of new device access
- Instant remote device revocation
- IP blacklisting for denied attempts
- Rate limiting protection

### Examples

Pictures I Keep At My Place (pikamp), a photo app that allows you to view, upload, and save images between your phone and computer:

https://github.com/BTCapsule/pikamp

Node On Phone, a Bitcoin wallet that uses your own node:

https://github.com/BTCapsule/nop

