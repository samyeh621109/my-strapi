export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 's3cr3tAdm1nJwtT0k3n=='), // 後台登入 JWT 密鑰
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'G6zY9xJp3H2qLmN8CvU0Kg=='), // API Token 加密用 Salt
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'uY7d9wLp2zN6qMb3RtP1Jg=='), // 備份/移轉 token 用
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY', 'vB3t8sMf5Xk7qCz1GrY9Hg=='), // 資料加密用 key
  },
  flags: {
    nps: env.bool('FLAG_NPS', true), // 啟用意見調查 (可關)
    promoteEE: env.bool('FLAG_PROMOTE_EE', true), // 推薦升級 EE 版本 (可關)
  },
});
